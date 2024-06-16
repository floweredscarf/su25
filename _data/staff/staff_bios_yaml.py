""" Script to generate yaml file for course website

Set up steps:
- download csv of the staff information form - https://docs.google.com/spreadsheets/d/1e9x5wmWeDNioll-O8ESgPaNQP9IyRONH8CQhQAtKd9I/edit?resourcekey#gid=656121963
    - put csv in this repo, i.e. su22/_data/staff, and name as bios.csv
- download staff images and move them to assets/img/staff/ in website repo, e.g. su22.
    - name each picture as first name of person (hopefully no duplicating first names lmao)
- move this script in this folder, su22/_data/staff, and run the below
- refresh the website, and it should be up to date!
"""
# python3 staff_bios_yaml.py -ta teaching_assistants.yaml -tu tutors.yml

import yaml, csv, argparse, os

def create_yaml(tafilename, tutorfilename, instructorfilename):
    csvfile = open('bios.csv', 'r')
    datareader = csv.reader(csvfile, delimiter=",", quotechar='"')
    tas, tutors, instructors = list(), list(), list()
    name_index = -1
    website_index = -1
    email_index = -1
    bio_index = -1
    pronouns_index = -1
    appointment_index = -1

    for row_index, row in enumerate(datareader):
        if row_index == 0:
            for heading_index, heading in enumerate(row):
                if heading == "Full Name":
                    name_index = heading_index
                elif heading == "Email Address":
                    email_index = heading_index
                elif heading == "Pronouns":
                    pronouns_index = heading_index
                elif heading == "Bio":
                    bio_index = heading_index
                elif heading == "Personal website":
                    website_index = heading_index
                elif heading == "What is your hiring appointment?":
                    appointment_index = heading_index
        else:
            dir = '../../assets/img/staff/'
            image_name = 'missing.png'
            for root, dirs, files in os.walk(dir):
                first_name = row[name_index].lower().split()[0]
                if '(' in row[name_index]:
                    first_name = row[name_index].lower().split()[1][1:]
                for file in files:
                    if file.startswith(first_name):
                        image_name = file
                        break
            content = {
                "name": row[name_index],
                "email": row[email_index],
                "biography": "Pronouns: " + row[pronouns_index] + "<br><br>" + row[bio_index],
                "p1": "assets/img/staff/" + image_name
            }
            if row[website_index]:
                content["website"] = row[website_index]
            if "ta" in row[appointment_index].lower():
                tas.append(content)
            elif "tutor" in row[appointment_index].lower():
                tutors.append(content)
            elif "instructor" in row[appointment_index].lower():
                instructors.append(content)
            else:
                raise ValueError(f"Appointment not found for {content}")

    tas = sorted(tas, key = lambda entry: entry["name"])
    tutors = sorted(tutors, key = lambda entry: entry["name"])
    instructors = sorted(instructors, key = lambda entry: entry["name"])
    tas_result = {"title": "Teaching Assistants", "staffers": tas}
    yaml.dump(tas_result, open(tafilename, "w"), sort_keys=False)

    tutors_result = {"title": "Tutors", "staffers": tutors}
    yaml.dump(tutors_result, open(tutorfilename, "w"), sort_keys=False)
    
    instructors_result = {"title": "Instructors", "staffers": instructors}
    yaml.dump(instructors_result, open(instructorfilename, "w"), sort_keys=False)

if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("--tafilename", "-ta", type=str, default="teaching_assistants.yml", help="Specify filename for TAs")
    parser.add_argument("--tutorfilename", "-tu", type=str, default="tutors.yml", help="Specify filename for tutors")
    parser.add_argument("--instructorfilename", "-inst", type=str, default="instructors.yml", help="Specify filename for instructors")
    args = parser.parse_args()

    create_yaml(args.tafilename, args.tutorfilename, args.instructorfilename)
