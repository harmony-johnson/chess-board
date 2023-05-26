import os

def camel_case(text):
    words = text.split('-')
    return words[0] + ''.join(word.title() for word in words[1:])

def rename_files_in_current_folder():
    current_folder = os.path.dirname(os.path.abspath(__file__))
    for filename in os.listdir(current_folder):
        if '-' in filename:
            new_filename = camel_case(filename)
            original_path = os.path.join(current_folder, filename)
            new_path = os.path.join(current_folder, new_filename)
            os.rename(original_path, new_path)

# Rename files in the current folder
rename_files_in_current_folder()
