import os

def load_file(filename):
    with open(filename, "r") as file:
        return file.read()

def save_file(fileName,data):
    data_file = open(fileName, "wb")
    data_file.write(data.encode("utf-8"))
    data_file.close()
    print(f"{len(data)} bytes saved in {fileName}")
    return

def copy_section(section):
    section_name = section.splitlines()[0]
    if(os.path.isdir(section_name)):
        section_readme_file = section_name+"/README.md"
        section = '# ' + section
        section = section.replace("./media","../media")
        section = section.replace(f"./{section_name}",f"../{section_name}")
        save_file(section_readme_file,section)
    else:
        print(f" !! (x) !! {section_name} is not an example directory")
    return
readme = load_file("README.md")

sections = readme.split("\n# ")
print(f" {len(sections)} sections found")
for section in sections[1:]:    #skip first because it does not have a heading '# '
    copy_section(section)
