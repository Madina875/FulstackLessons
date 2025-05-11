const Joi = require("joi");

module.exports = (data) => {
  let validation = Joi.object({
    fullname: Joi.string().required().min(3).max(25),
    age: Joi.number().required().max(150).min(18).integer(),
    email: Joi.string().required(),
    phone: Joi.string().required(),
  });
  return validation.validate(data, { abortEarly: false });
};
