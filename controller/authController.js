import authModel from "../model/authModel";

export const registerAuth = async (req, res) => {
  try {
    const { username, email, password } = req.body;
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
