import re
import json

with open("parse_docx.py", "r") as f:
    pass # we already ran this

# Just run the function and get text
import zipfile
from xml.etree import ElementTree

def get_docx_text(path):
    document = zipfile.ZipFile(path)
    xml_content = document.read('word/document.xml')
    document.close()
    tree = ElementTree.XML(xml_content)
    WORD_NAMESPACE = '{http://schemas.openxmlformats.org/wordprocessingml/2006/main}'
    PARA = WORD_NAMESPACE + 'p'
    TEXT = WORD_NAMESPACE + 't'
    paragraphs = []
    for paragraph in tree.iter(PARA):
        texts = [node.text for node in paragraph.iter(TEXT) if node.text]
        if texts:
            paragraphs.append(''.join(texts))
    return '\n'.join(paragraphs)

text = get_docx_text("Gokul_Mobiles_Catalogue_2020_2026.docx")

lines = text.split('\n')
mobiles = []

current_brand = ""
current_mobile = {}
image_counter = 1

def add_mobile():
    global current_mobile, image_counter
    if 'model' in current_mobile and current_mobile['model']:
        current_mobile['id'] = current_brand[:3].lower() + str(image_counter)
        current_mobile['brand'] = current_brand
        current_mobile['image'] = f"/images/mobiles/image{image_counter}.png"
        
        # Format some fields that are missing
        if 'ram' not in current_mobile: current_mobile['ram'] = "8GB"
        if 'storage' not in current_mobile: current_mobile['storage'] = "128GB"
        if 'processor' not in current_mobile: current_mobile['processor'] = "Octa-core"
        if 'camera' not in current_mobile: current_mobile['camera'] = "Triple Camera"
        if 'battery' not in current_mobile: current_mobile['battery'] = "4000 mAh"
        if 'display' not in current_mobile: current_mobile['display'] = "6.5\""
        if 'priceRange' not in current_mobile: current_mobile['priceRange'] = "~₹30,000"
        
        current_mobile['is5G'] = True
        current_mobile['colors'] = ["Default Color"]
        current_mobile['inStore'] = True
        current_mobile['trending'] = False
        
        mobiles.append(current_mobile)
        image_counter += 1
        current_mobile = {}

i = 0
while i < len(lines):
    line = lines[i].strip()
    if not line:
        i += 1
        continue
    
    if line == "APPLE (IPHONE)":
        current_brand = "Apple"
    elif line == "SAMSUNG":
        current_brand = "Samsung"
    elif line == "OPPO":
        current_brand = "Oppo"
    elif line == "VIVO":
        current_brand = "Vivo"
    elif line == "REDMI (XIAOMI)":
        current_brand = "Redmi"
    elif line == "REALME":
        current_brand = "Realme"
    elif line == "POCO (XIAOMI)":
        current_brand = "Poco"
        
    elif line.startswith("Display"):
        i += 1
        current_mobile['display'] = lines[i].strip()
    elif line.startswith("Processor"):
        i += 1
        current_mobile['processor'] = lines[i].strip()
    elif line.startswith("RAM"):
        i += 1
        current_mobile['ram'] = lines[i].strip()
    elif line.startswith("Storage"):
        i += 1
        current_mobile['storage'] = lines[i].strip()
    elif line.startswith("Camera"):
        i += 1
        current_mobile['camera'] = lines[i].strip()
    elif line.startswith("Battery"):
        i += 1
        current_mobile['battery'] = lines[i].strip()
    elif line.startswith("OS"):
        i += 1
        # skip OS, or save it? mobiles.js doesn't have OS
        pass
    elif line.startswith("Price"):
        i += 1
        current_mobile['priceRange'] = lines[i].strip()
        add_mobile() # Price is the last field
    elif "  " in line and "(" in line and ")" in line:
        # e.g., "  iPhone 12  (2020)"
        pass
    else:
        # Potential model name
        if current_brand and not line.startswith('Flagship Models') and not line.startswith('━━') and not line.isdigit():
            # If we see a model name and we don't have one set, or we just finished one
            if 'model' not in current_mobile:
                current_mobile['model'] = line
        elif line.isdigit() and 'model' in current_mobile and 'year' not in current_mobile:
            current_mobile['year'] = int(line)
            
    i += 1

# Generate JS code
js_content = "export const mobilesData = [\n"
for m in mobiles:
    js_content += "  {\n"
    for k, v in m.items():
        if isinstance(v, str):
            js_content += f'    {k}: "{v}",\n'
        elif isinstance(v, bool):
            js_content += f'    {k}: {"true" if v else "false"},\n'
        elif isinstance(v, int):
            js_content += f'    {k}: {v},\n'
        elif isinstance(v, list):
            js_content += f'    {k}: {json.dumps(v)},\n'
    js_content += "  },\n"
js_content += "];\n"

with open("src/data/mobiles.js", "w") as f:
    f.write(js_content)

print(f"Generated {len(mobiles)} mobiles.")
