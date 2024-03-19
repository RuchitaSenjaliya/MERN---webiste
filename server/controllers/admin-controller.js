const Contact = require("../models/contact-model");
const Service = require("../models/services-model");
const User = require("../models/user-model");

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select({ password: 0 });
    console.log(users);
    if (!users || users.length === 0) {
      return res.status(404).json({ message: "No users found." });
    }
    return res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

const getUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await User.findOne({ _id: id }, { password: 0 });
    return res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    console.log(contacts);
    if (!contacts || contacts.length === 0) {
      return res.status(404).json({ message: "No contact found." });
    }
    return res.status(200).json(contacts);
  } catch (error) {
    next(error);
  }
};

const deleteUserById = async (req, res) => {
  try {
    const id = req.params.id;
    await User.deleteOne({ _id: id });
    return res.status(200).json({ message: "user deleted successfully" });
  } catch (error) {
    next(error);
  }
};
const updateUserById = async (req, res, next) => {
  try {
    console.log("req", req);
    const id = req.params.id;
    const updatedUserData = req.body;
    console.log("updatedUserData", updatedUserData);
    const updatedData = await User.updateOne(
      { _id: id },
      { $set: updatedUserData }
    );
    return res.status(200).json(updatedData);
  } catch (error) {
    next(error);
  }
};

const deleteContactById = async (req, res) => {
  try {
    const id = req.params.id;
    await Contact.deleteOne({ _id: id });
    return res.status(200).json({ message: "Contact deleted successfully" });
  } catch (error) {
    next(error);
  }
};

const getAllServices = async (req, res, next) => {
  try {
    const services = await Service.find();
    console.log(services);
    if (services.length === 0 || !services) {
      return res.status(404).json({ message: "No Service Found." });
    }
    return res.status(200).json(services);
  } catch (error) {
    next(error);
  }
};

const addServiceForm = async (req, res, next) => {
  try {
    const response = req.body;
    await Service.create(response);

    return res.status(200).json({ message: "Service created successfully." });
  } catch (error) {
    next(error);
  }
};

const deleteServiceById = async (req, res) => {
  try {
    const id = req.params.id;
    await Service.deleteOne({ _id: id });
    return res.status(200).json({ message: "Service deleted successfully" });
  } catch (error) {
    next(error);
  }
};

const getServiceById = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Service.findOne({ _id: id });
    return res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

const updateServiceById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const updatedServiceData = req.body;
    const updatedData = await Service.updateOne(
      { _id: id },
      { $set: updatedServiceData }
    );
    return res.status(200).json(updatedData);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllUsers,
  getAllContacts,
  deleteUserById,
  getUserById,
  updateUserById,
  deleteContactById,
  getAllServices,
  addServiceForm,
  deleteServiceById,
  getServiceById,
  updateServiceById,
};
