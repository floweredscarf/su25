""" Script to generate yaml file for course website

Set up steps:
- download csv of the staff information form - https://docs.google.com/spreadsheets/d/1e9x5wmWeDNioll-O8ESgPaNQP9IyRONH8CQhQAtKd9I/edit?resourcekey#gid=656121963
    - put csv in this repo, i.e. su22/_data/staff, and name as bios.csv
- download staff images and move them to assets/img/staff/ in website repo, e.g. su22.
    - name each picture as first name of person (hopefully no duplicating first names lmao)
- move this script in this folder, su22/_data/staff, and run the below
- refresh the website, and it should be up to date!
"""
# python3 zoom_links_to_yaml.py -tu tutor-sections.yml -ta sections.yml


import yaml, csv, argparse, os

def create_tutor_yaml(tutorfilename):
    csvfile = open('tutors.csv', 'r')
    datareader = csv.reader(csvfile, delimiter=",", quotechar='"')
    data = list()

    for row_index, row in enumerate(datareader):
        content = {
            "link": row[1],
            "staff": row[0],
        }
        data.append(content)

    yaml.dump(data[1:], open(tutorfilename, "w"))


def create_ta_yaml(tafilename):
    csvfile = open('tas.csv', 'r')
    datareader = csv.reader(csvfile, delimiter=",", quotechar='"')
    data = list()

    for row_index, row in enumerate(datareader):
        content = {
            "staff": row[0],
            "link": row[1],
            "discord": row[2],
            "time": row[3]
        }
        data.append(content)

    yaml.dump(data[1:], open(tafilename, "w"))

if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("--tafilename", "-ta", type=str, default=1, help="Specify filename for TAs")
    parser.add_argument("--tutorfilename", "-tu", type=str, default=1, help="Specify filename for tutors")
    args = parser.parse_args()

    create_tutor_yaml(args.tutorfilename)
    create_ta_yaml(args.tafilename)
