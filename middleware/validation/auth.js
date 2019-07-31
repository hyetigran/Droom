module.exports = (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      message: "Please ensure all fields have been provided"
    });
  }
  next();
};
