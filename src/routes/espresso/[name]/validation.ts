import Joi from "joi";

const EspressoNameSchema = Joi.string().alphanum().min(3).max(30).required();

export const validate = (req: Req, res: Res, next: Next) => {
  const { name } = req.params;

  if (EspressoNameSchema.validate(name).error) {
    return res.status(400).json({
      message: "Invalid espresso name",
    });
  }

  next();
};
