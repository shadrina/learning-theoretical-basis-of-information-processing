from Levenshtein import *
import json, xmltodict, csv

def find_string_by_number(filename, number):
    with open(filename) as f:
        content = f.readlines()
    content = [x.strip() for x in content]
    length = len(content)
    if number >= length:
        return "File contains only " + str(length) + " lines :(", 200
    else:
        return content[number], 200

def produce_json_from_xml(xml):
    o = xmltodict.parse(xml)
    return json.dumps(o), 200

def compare_csv(filename):
    result = list()
    with open(filename, newline='') as File:
        data_list = list(csv.reader(File))
        row_count = sum(1 for row in data_list)
        for i in range(1, row_count):
            for j in range(i + 1, row_count):
                if rows_are_same(data_list[i], data_list[j]):
                    result.append("Rows " + str(i) + " and " + str(j) + " are almost similar")
    return json.dumps(result), 200

def rows_are_same(row1, row2):
    similarity_flag = True
    for i in range (0, len(row1)):
        try:
            num1 = int(row1[i])
            num2 = int(row2[i])
            if not numbers_are_same(num1, num2):
                similarity_flag = False
        except ValueError:
            if not strings_are_same(row1[i], row2[i]):
                similarity_flag = False
    return similarity_flag

def numbers_are_same(num1, num2):
    return num1 == num2

def strings_are_same(str1, str2):
    return distance(str1, str2) < 20
