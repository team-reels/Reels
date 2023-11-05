import Joi from 'joi';

const passwordValidation = Joi.string().min(6).max(30).required();

export function validatePassword(password) {
    const { error } = passwordValidation.validate(password);
    return error ? error.details[0].message : null;
}

const emailValidation = Joi.string().email().required();
export function validateEmail(email) {
    const { error } = emailValidation.validate(email);
    return error ? error.details[0].message : null;
}

const usernameValidation = Joi.string().pattern(new RegExp('^[a-zA-Z0-9_]{3,30}$')).required();
export function validateUsername(username) {
    const { error } = usernameValidation.validate(username);
    return error ? error.details[0].message : null;
}