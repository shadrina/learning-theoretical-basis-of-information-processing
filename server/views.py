from flask import Blueprint, render_template, request
from werkzeug.utils import secure_filename
import os

from engine import compare_csv, produce_json_from_xml, find_string_by_number
from config import UPLOAD_FOLDER

blueprint = Blueprint('blueprint', __name__,
                      static_folder="../client/dist",
                      template_folder="../client/static")

@blueprint.route('/', defaults={'path': ''})
@blueprint.route('/<path:path>')
def index(path):
    return render_template('index.html')

@blueprint.route('/lab1/process', methods=['POST'])
def process():
    try:
        file = request.files['file']
    except:
        file = None
    if file:
        if not os.path.exists(UPLOAD_FOLDER):
            os.makedirs(UPLOAD_FOLDER)
        absolute_file = os.path.abspath(UPLOAD_FOLDER + file.filename)
        filename = secure_filename(absolute_file)
        file.save(os.path.join(UPLOAD_FOLDER, filename))
        return compare_csv(UPLOAD_FOLDER + "\\" + filename)
    else:
        return "Empty file", 400

@blueprint.route('/lab2/parse', methods=['POST'])
def parse():
    return produce_json_from_xml(request.json.get('xml'))

@blueprint.route('/lab3/find', methods=['POST'])
def find():
    try:
        file = request.files['file']
        number = request.form['number']
    except:
        file = None
        number = None
    if file and number:
        if not os.path.exists(UPLOAD_FOLDER):
            os.makedirs(UPLOAD_FOLDER)
        absolute_file = os.path.abspath(UPLOAD_FOLDER + file.filename)
        filename = secure_filename(absolute_file)
        file.save(os.path.join(UPLOAD_FOLDER, filename))
        return find_string_by_number(UPLOAD_FOLDER + "\\" + filename, int(number))
    else:
        return "Empty file", 400
