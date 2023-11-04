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


if __name__ == "__main__":
    app = init_app()
    app.run(host='0.0.0.0', port=5050)
