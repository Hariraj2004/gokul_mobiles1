import re

with open("src/data/mobiles.js", "r") as f:
    content = f.read()

# Fix the specific error: display: "6.1" Super Retina
# It happens because the python script dumped it as `display: "6.1" ..."`
# We can replace 'display: "6.1" ' with 'display: "6.1\\" '
def replacer(match):
    return match.group(1) + '\\"' + match.group(2)

fixed_content = re.sub(r'(display: "[^"]+)"(.*?")', replacer, content)

with open("src/data/mobiles.js", "w") as f:
    f.write(fixed_content)

