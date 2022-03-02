const { verifyToken } = require("../utils/handleToken");
const {
  handleErrorResponse,
  handleHttpError,
} = require("../utils/handleError");

const checkAuth = async (req, res, next) => {
  try {
    if (!req.headers.authorization) {
        handleErrorResponse(res, "NOT_ALLOW", 409);
      return;
    }
    const token = req.headers.authorization.split(" ").pop();
    const tokenData = await verifyToken(token);
    if (tokenData._id) {
      next();
    } else {
      handleErrorResponse(res, "NOT_ALLOW", 409);
    }
  } catch (e) {
    handleHttpError(res, e);
  }
};

module.exports = checkAuth;
