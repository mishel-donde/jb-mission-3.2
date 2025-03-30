import Joi from "joi";

export const updateServerStatusValidator = Joi.object({
  serverId: Joi.string().uuid().required(),
});
