const router = require("express").Router();
const Companies = require("../model/Companies");
const {
  companyValidation,
  updateCompanyValidation
} = require("../middleware/validation/index");

router.post("/", companyValidation, async (req, res) => {
  try {
    const newCompany = await Companies.add(req.body.userId, req.body.company);
    res.status(201).json(newCompany);
  } catch (error) {
    res.status(500).json({
      message: "Oops, something went wrong while creating your profile"
    });
    throw new Error(error);
  }
});

router.get("/", async (req, res) => {
  try {
    const companies = await Companies.findAll();
    if (!companies) {
      return res.status(404).json({
        message: "Oops, doesn't look like there are any companies"
      });
    } else {
      res.status(200).json({ companies });
    }
  } catch (error) {
    res.status(500).json({
      message: "Oops, something went wrong while fetching this profile"
    });
    throw new Error(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const company = await Companies.findById(req.params.id);
    if (!company) {
      return res.status(404).json({
        message: "Oops, doesn't look like that company exists"
      });
    } else {
      res.status(200).json({ company });
    }
  } catch (error) {
    res.status(500).json({
      message: "Oops, something went wrong while fetching this company"
    });
    throw new Error(error);
  }
});

router.put("/:id", updateCompanyValidation, async (req, res) => {
  try {
    const updatedCompany = await Companies.update(req.params.id, req.body);

    if (updatedCompany.id) {
      res.status(200).json(updatedCompany);
    } else {
      res.status(404).json({
        message: "Oops, company could not be found"
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Oops, something went wrong while updating this company"
    });
    throw new Error(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const company = await Companies.findById(id);
    if (!company) {
      return res.status(404).json({
        message: "Oops, doesn't look like that company exists"
      });
    } else {
      await Companies.remove(id);
      res.status(200).json({
        message: "Company successfully deleted"
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Oops, something went wrong while deleting this company"
    });
    throw new Error(error);
  }
});

module.exports = router;
