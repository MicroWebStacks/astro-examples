import json
import shutil
from os import mkdir
from os.path import dirname,join,isdir

root = dirname(__file__)

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

    print(f'saved {config["count"]} pages in {file_dir}')


template = open("template.md").read()
config_list = json.load(open("pages_count.json"))

clear_all(config_list)
#test(config_list[0])
