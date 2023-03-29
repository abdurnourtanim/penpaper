const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  const token = req.header("x-access-token");
  if (!token) {
    return res.status(406).json({ err: "Not authentication token" });
  }

  const verified = jwt.verify(token, process.env.JWT_SECRET_KEY);
  if (!verified)
    return res.status(406).json({ err: "Token verification failed!!" });

  req.user_id = verified.id;
  next();
};

module.exports = auth;
