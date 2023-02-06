const validationService = require("../Services/validation.service");

const validationMiddleware = (req, res, next) => {

    let data = req.body;

    let validate = validationService.validateData(data);

    if (!validate.status) {
        res.status(400).send(validate.message);
        return;
    }

    next();
}

module.exports = {
    validationMiddleware
}