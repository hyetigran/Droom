module.exports = {
  educationValidation,
  updateEducationValidation
};

function educationValidation(req, res, next) {
  const { userId, applicantEducation } = req.body;

  applicantEducation.map(exp => {
    const {
      expTitle,
      expCompany,
      expDescription,
      expStartDate,
      expEndDate
    } = exp;

    if (!userId) {
      return res.status(400).json({
        message: "Please provide a user id"
      });
    }

    if (!expTitle) {
      return res.status(400).json({
        message: "Please provide a job title"
      });
    }

    if (!expCompany) {
      return res.status(400).json({
        message: "Please provide a user id"
      });
    }
    if (!expDescription) {
      return res.status(400).json({
        message: "Please provide a user id"
      });
    }

    if (!expStartDate) {
      return res.status(400).json({
        message: "Please provide a user id"
      });
    }

    if (!expEndDate) {
      return res.status(400).json({
        message: "Please provide a user id"
      });
    }

    next();
  });
}

function updateEducationValidation(req, res, next) {
  const {
    expTitle,
    expCompany,
    expDescription,
    expStartDate,
    expEndDate
  } = exp;

  if (!userId) {
    return res.status(400).json({
      message: "Please provide a user id"
    });
  }

  if (!expTitle) {
    return res.status(400).json({
      message: "Please provide a job title"
    });
  }

  if (!expCompany) {
    return res.status(400).json({
      message: "Please provide a user id"
    });
  }
  if (!expDescription) {
    return res.status(400).json({
      message: "Please provide a user id"
    });
  }

  if (!expStartDate) {
    return res.status(400).json({
      message: "Please provide a user id"
    });
  }

  if (!expEndDate) {
    return res.status(400).json({
      message: "Please provide a user id"
    });
  }
  next();
}
