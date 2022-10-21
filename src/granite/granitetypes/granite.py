import os
import re

directory = './granitedefs'

for filename in sorted(os.listdir(directory)):
    fullpath = os.path.join(directory, filename)

    if os.path.isfile(fullpath):
        filedata = ''
