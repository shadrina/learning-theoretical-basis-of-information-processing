from flask import Blueprint, render_template

blueprint = Blueprint('blueprint', __name__,
                      static_folder="../client/dist",
                      template_folder="../client/static")


@blueprint.route('/', defaults={'path': ''})
@blueprint.route('/<path:path>')
def index(path):
    return render_template('index.html')
