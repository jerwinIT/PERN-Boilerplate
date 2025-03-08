const { z } = require("zod");
const validate = (schema, data) => {
  const result = schema.safeParse(data);
  if (!result.success)
    throw new Error(result.error.errors.map((e) => e.message).join(", "));
};
module.exports = validate;
