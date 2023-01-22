import json
import shutil
from os import mkdir
from os.path import dirname,join,isdir
import subprocess
from pathlib import Path
import math
import time

root = Path('.')

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

def clear_all(config_list):
    for config in config_list:
        clear(join(root,config["path"]))
    return

def test(config):
    report = {}
    file_dir = join(root,config["path"])

    for id in range(config["count"]):
        text_id = "{:06d}".format(id)
        content = f"# Page {text_id}\n" + template
        save(content,file_dir+text_id+config["ext"])

    report["count"] = config["count"]
    report["ext"] = config["ext"]
    report["path"] = config["path"]
    start_build = time.time()
    proc = subprocess.run(["build.cmd"])#TODO ["pnpm","run","build"] the system cannot find the specific file
    if(proc.returncode == 0):
        dir_size_bates = dir_size(join(root,"dist"))
        report["size"] = dir_size_bates
        report["size_text"] = convert_size(dir_size_bates)
        time_sec = time.time() - start_build
        report["time"] = time_sec
        report["time_text"] = convert_time(time_sec)
        report["status"] = "pass"
    else:
        report["status"] = "fail"
    return report


template = open("template.md").read()
config_list = json.load(open("pages_count.json"))

clear_all(config_list)
report = test(config_list[0])

print(report)
