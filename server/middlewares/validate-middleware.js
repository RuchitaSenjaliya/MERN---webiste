const validate = (schema) => async (req, res, next) => {
  try {
    const parseBody = await schema.parseAsync(req.body);
    req.body = parseBody;
    next();
  } catch (err) {
    // console.log(error);
    const status = 422;
    const message = "Fill the details properly";
    const extraDetails = err.errors[0].message;

    const errors = {
      status,
      message,
      extraDetails,
    };
    next(errors);
  }
};

module.exports = validate;
