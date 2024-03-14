const { z } = require("zod");

const loginSchema = z.object({
  email: z
    .string({ required_error: "email is required." })
    .trim()
    .email({ message: "Invalid email address" })
    .min(3, { message: "email must be atleast of 3 character." })
    .max(50, { message: "email must not be more than 50 characters." }),

  password: z
    .string({ required_error: "Password is required." })
    .min(7, { message: "Password must be atleast 6 character." })
    .max(250, { message: "Password can not be more than 250 characters." }),
});

const signupSchema = loginSchema.extend({
  username: z
    .string({ required_error: "Name is required." })
    .trim()
    .min(3, { message: "Name must be atleast of 3 character." })
    .max(25, { message: "Name must not be more than 25 characters." }),
  email: z
    .string({ required_error: "email is required." })
    .trim()
    .email({ message: "Invalid email address" })
    .min(3, { message: "email must be atleast of 3 character." })
    .max(50, { message: "email must not be more than 50 characters." }),
  phone: z
    .string({ required_error: "Phone is required." })
    .trim()
    .min(10, { message: "Phone must be atleast of 10 character." })
    .max(20, { message: "Phone must not be more than 20 characters." }),
  password: z
    .string({ required_error: "Password is required." })
    .min(7, { message: "Password must be atleast 6 character." })
    .max(250, { message: "Password can not be more than 250 characters." }),
});

module.exports = { signupSchema, loginSchema };
