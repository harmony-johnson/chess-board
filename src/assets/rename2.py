import os

def rename_files_in_current_folder():
    current_folder = os.path.dirname(os.path.abspath(__file__))
    for filename in os.listdir(current_folder):
        if filename.islower():
            continue
        
        new_filename = filename[0].lower() + filename[1:]
        original_path = os.path.join(current_folder, filename)
        new_path = os.path.join(current_folder, new_filename)
        os.rename(original_path, new_path)

# Rename files in the current folder
rename_files_in_current_folder()
