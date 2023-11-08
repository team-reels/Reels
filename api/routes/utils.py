from functools import wraps
from flask import request, jsonify

def require_json_params(params):
    def decorator(func):
        @wraps(func)
        def returned_func(*args, **kwargs):
            context = request.get_json()
            for i in params:
                if context.get(i) is None:
                    return jsonify({
                            "status": "failure", "reason": f"missing {i}"
                    })
            return func()
        return returned_func
    return decorator