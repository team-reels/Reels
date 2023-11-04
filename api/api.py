from flask import Flask
from routes.user import user_blueprint
from routes.comment import comment_blueprint
from routes.catch import catch_blueprint


def init_app():
    app = Flask(__name__)
    app.register_blueprint(user_blueprint)
    app.register_blueprint(comment_blueprint)
    app.register_blueprint(catch_blueprint)
    return app
