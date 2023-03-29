const User = require("../model/schema");

// get User data
const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json(error);
  }
};

module.exports = getUser;
