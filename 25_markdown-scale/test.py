import json
import shutil
from os import mkdir
from os.path import dirname,join,isdir
import subprocess
from pathlib import Path
import math

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
    file_dir = join(root,config["path"])

    for id in range(config["count"]):
        text_id = "{:06d}".format(id)
        save(template,file_dir+text_id+config["ext"])

    print(f'saved {config["count"]} "{config["ext"]}" pages in {file_dir}')


template = open("template.md").read()
config_list = json.load(open("pages_count.json"))

clear_all(config_list)
test(config_list[0])
proc = subprocess.run(["build.cmd"])#TODO ["pnpm","run","build"] the system cannot find the specific file
if(proc.returncode == 0):
    dir_size_bates = dir_size(join(root,"dist"))
    print(f"build size = {convert_size(dir_size_bates)}")
