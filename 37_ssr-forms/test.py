import subprocess
from pathlib import Path
import math
import time
import psutil
from psutil._common import bytes2human
import platform

root = Path('.')


#https://stackoverflow.com/questions/5194057/better-way-to-convert-file-sizes-in-python
# check "bytes2human"
def convert_size(size_bytes):
   if size_bytes == 0:
       return "0B"
   size_name = ("B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB")
   i = int(math.floor(math.log(size_bytes, 1024)))
   p = math.pow(1024, i)
   s = round(size_bytes / p, 2)
   return "%s %s" % (s, size_name[i])

#https://github.com/giampaolo/psutil/blob/master/scripts/meminfo.py
def pprint_ntuple(nt):
    for name in nt._fields:
        value = getattr(nt, name)
        if name != 'percent':
            value = bytes2human(value)
        print('%-10s : %7s' % (name.capitalize(), value))

def print_system_info():
    print(f"System    : {platform.system()}")
    print(f"machine   : {platform.machine()}")
    print(f"processor : {platform.processor()}")
    print(f"nb cpu    : {psutil.cpu_count()}")
    print(f"version   : {platform.version()}")
    print(f"platform  : {platform.platform()}")
    return

def print_memory_info():
    pprint_ntuple(psutil.virtual_memory())
    return

def get_child_proc_rss(pid):
    total_mem = 0
    try:
        parent = psutil.Process(pid)
        children = parent.children(recursive=True)
        children.append(parent)
        for p in children:
            try:
                total_mem += p.memory_info().rss
            except Exception as e:
                print("Process finished :",e)
    except Exception as e:
        print("Process finished :",e)
    return total_mem

def run_get_max_mem(commands):
    proc = subprocess.Popen(commands)
    max_memory = 0
    while proc.poll() is None:
        current_memory = get_child_proc_rss(proc.pid)
        max_memory = max(max_memory, current_memory)
        time.sleep(0.5)
        print(f"Max memory consumption: {convert_size(max_memory)}")
    return max_memory


def test():

    print_system_info()
    print_memory_info()

    max_memory = run_get_max_mem(["run.cmd"])
    print(f"Max memory consumption: {convert_size(max_memory)}")

    return

#--------- main ---------
test()
