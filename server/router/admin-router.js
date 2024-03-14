const adminController = require("../controllers/admin-controller");
const express = require("express");
const authMiddleware = require("../middlewares/auth-middleware");
const router = express.Router();

router.route("/users").get(authMiddleware, adminController.getAllUsers);

router.route("/users/:id").get(authMiddleware, adminController.getUserById);

router
  .route("/users/update/:id")
  .patch(authMiddleware, adminController.updateUserById);

router
  .route("/users/delete/:id")
  .delete(authMiddleware, adminController.deleteUserById);

router.route("/contacts").get(authMiddleware, adminController.getAllContacts);

router
  .route("/contacts/delete/:id")
  .delete(authMiddleware, adminController.deleteContactById);

router.route("/services").get(authMiddleware, adminController.getAllServices);
router
  .route("/services/:id")
  .get(authMiddleware, adminController.getServiceById);
router.route("/services/delete/:id").delete(adminController.deleteServiceById);
router.route("/services/service-form").post(adminController.addServiceForm);
router
  .route("/services/edit/:id")
  .patch(authMiddleware, adminController.updateServiceById);

module.exports = router;
