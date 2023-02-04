import json
import shutil
import sys
import os
from os import mkdir
from os.path import dirname,join,isdir
import subprocess
from pathlib import Path
import math
import time
from copy import deepcopy
import psutil


root = Path('.')

def print_list(entries):
    for entry in entries:
        print(entry)
    return

#https://stackoverflow.com/questions/1392413/calculating-a-directorys-size-using-python
def dir_size(root_dir_str):
    root_dir = Path(root_dir_str)
    return sum(f.stat().st_size for f in root_dir.glob('**/*') if f.is_file())

#https://stackoverflow.com/questions/5194057/better-way-to-convert-file-sizes-in-python
def convert_size(size_bytes):
   if size_bytes == 0:
       return "0B"
   size_name = ("B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB")
   i = int(math.floor(math.log(size_bytes, 1024)))
   p = math.pow(1024, i)
   s = round(size_bytes / p, 2)
   return "%s %s" % (s, size_name[i])

def convert_time(seconds):
    minutes = int(seconds / 60)
    milliseconds = int((seconds - int(seconds))*1000)
    seconds = int(seconds % 60)
    text = ""
    if(minutes != 0):
        text += f"{minutes} mn "
    if(seconds != 0):
        text += f"{seconds} s "
    if(milliseconds != 0):
        text += f"{milliseconds} ms"
    text.rstrip(" ")
    return text

def clear(dir):
    if isdir(dir):
        shutil.rmtree(dir)
    mkdir(dir)
    return

def save(text,path):
    with open(path, "w") as f:
        f.write(text)
    return

def append(text,path):
    with open(path, "a") as f:
        f.write(text)
    return

def append_jsonl(data,path):
    for entry in data:
        jsonline = json.dumps(entry)
        append(jsonline+'\n',path)
        if("size_bytes" in entry):
            del entry["size_bytes"]
        if("time_sec" in entry):
            del entry["time_sec"]
        jsonline = json.dumps(entry)
        print(jsonline)
    return

def clear_all(path_list):
    for path in path_list:
        clear(join(root,path))
    return

def test(config):
    print(f"running test : {config}")
    report = {}
    file_dir = join(root,config["path"])

    for id in range(config["count"]):
        text_id = "{:06d}".format(id)
        content = f"# Page {text_id}\n" + template
        save(content,file_dir+text_id+config["ext"])

    report = config
    start_build = time.time()

    test_env = os.environ.copy()
    test_env["OUTPUT"] = config["output"]
    proc = subprocess.Popen(["build.cmd"], env=test_env)#TODO ["pnpm","run","build"] the system cannot find the specific file

    pid = proc.pid
    p = psutil.Process(pid)
    mem_info = p.memory_info()
    max_memory = mem_info.rss
    print(convert_size(max_memory))
    while proc.poll() is None:
        mem_info = p.memory_info()
        max_memory = max(max_memory, mem_info.rss)
        time.sleep(0.1)

    print("Max memory consumption: ", convert_size(max_memory))

    dir_size_bytes = dir_size(join(root,"dist"))
    if(dir_size_bytes != 0):
        report["size"] = convert_size(dir_size_bytes)
        report["size_bytes"] = dir_size_bytes
        time_sec = time.time() - start_build
        report["time"] = convert_time(time_sec)
        report["time_sec"] = time_sec
        report["status"] = "pass"
    else:
        report["status"] = "fail"
    return report

def run_config_list(config_list):
    reports = []
    for config in config_list:
        clear_all(clear_path_list)
        report = test(config)
        reports.append(report)
    return reports

def test_list(filename,batch,reports_filename):
    config_lists_map = json.load(open(filename))
    config_list = config_lists_map[batch]
    reports = run_config_list(config_list)
    append_jsonl(reports,reports_filename)
    return

def expand_config_list(config):
    config_list = [config]
    for key,val in config.items():
        run_list = deepcopy(config_list)
        for entry in config_list:
            if(type(entry[key]) == list):
                run_list.remove(entry)
                for output_val in entry[key]:
                    sample_config = deepcopy(entry)
                    sample_config[key] = output_val
                    run_list.append(sample_config)
        config_list = run_list
    return config_list

def test_range(filename,batch,reports_filename):
    config_lists_map = json.load(open(filename))
    config_list = expand_config_list(config_lists_map[batch])
    print_list(config_list)
    reports = run_config_list(config_list)
    #plot
    append_jsonl(reports,reports_filename)
    return

#--------- main ---------

template = open("template.md").read()
clear_path_list = ["dist","src/pages/md/","src/pages/mdx/","local/md/","local/mdx/","local/markdown/"]


if(len(sys.argv) == 2):
    batch = sys.argv[1]
else:
    batch = "server"
test_range("test_range.json",batch,"reports.jsonl")
