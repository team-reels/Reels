from functools import wraps
from flask import request, jsonify

def require_json_params(params):
    def decorator(func):
        @wraps(func)
        def returned_func(*args, **kwargs):
            for i in params:
                if request.json and request.json.get(i) is None:
                    return jsonify({
                            "status": "failure", "reason": f"missing {i}"
                    })
            return func()
        return returned_func
    return decorator 
