module.exports = {
  companyValidation,
  updateCompanyValidation
};

function companyValidation(req, res, next) {
  const { userId, company } = req.body;

  const {
    companyName,
    companyDescription,
    country,
    state,
    city,
    zipcode,
    address
  } = company;

  if (!userId) {
    return res.status(400).json({
      message: "Please provide a user id for this company."
    });
  }
  if (!companyName) {
    return res.status(400).json({
      message: "Please provide a name for this company."
    });
  }

  if (!companyDescription) {
    return res.status(400).json({
      message: "Please provide a description for this company."
    });
  }

  if (!country) {
    return res.status(400).json({
      message: "Please provide a country for this company."
    });
  }

  if (!state) {
    return res.status(400).json({
      message: "Please provide a state for this company."
    });
  }

  if (!city) {
    return res.status(400).json({
      message: "Please provide a city for this company."
    });
  }

  if (!zipcode) {
    return res.status(400).json({
      message: "Please provide a zip code for this company."
    });
  }
  if (!address) {
    return res.status(400).json({
      message: "Please provide an address for this company."
    });
  }

  next();
}

function updateCompanyValidation(req, res, next) {
  const {
    userId,
    companyName,
    companyDescription,
    country,
    state,
    city,
    zipcode
  } = req.body;
  if (!userId) {
    return res.status(400).json({
      message: "Please provide a user id for this company."
    });
  }
  if (!companyName) {
    return res.status(400).json({
      message: "Please provide a name for this company."
    });
  }

  if (!companyDescription) {
    return res.status(400).json({
      message: "Please provide a description for this company."
    });
  }

  if (!country) {
    return res.status(400).json({
      message: "Please provide a country for this company."
    });
  }

  if (!state) {
    return res.status(400).json({
      message: "Please provide a state for this company."
    });
  }

  if (!city) {
    return res.status(400).json({
      message: "Please provide a city for this company."
    });
  }

  if (!zipcode) {
    return res.status(400).json({
      message: "Please provide a zip code for this company."
    });
  }

  next();
}
