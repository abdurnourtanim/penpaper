const User = require("../model/schema");

const updateUser = async (req, res) => {
  const { username, photo, phone } = req.body;

  try {
    await User.findByIdAndUpdate(req.params.userId, {
      $set: {
        username: username || User.username,
        photo: photo || User.photo,
        phone: phone || User.phone,
      },
    })
      .then((response) => {
        res.status(200).json({ response, message: "user update successfull" });
      })
      .catch((error) => {
        res
          .status(406)
          .json({ error, error: "There was error from update user.js" });
      });
  } catch (error) {
    res.status(406).json({ err: error });
  }
};

module.exports = updateUser;
