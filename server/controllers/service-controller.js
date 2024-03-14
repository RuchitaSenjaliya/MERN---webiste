const Service = require("../models/services-model");

const service = async (req, res) => {
  try {
    const response = await Service.find();
    res.status(200).json({ msg: response });
  } catch (error) {
    console.log("services error", error);
  }
};

module.exports = { service };
