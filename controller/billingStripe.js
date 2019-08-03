const router = require("express").Router();

router.post("/api/stripe", async (req, res) => {
  const charge = await stripe.charges.create({
    amount: 1000,
    currency: "usd",
    description: "$10 for 10 Super Likes",
    source: req.body.id
  });
  req.user.credits += 10;
  const user = await req.user.save();
  res.send(user);
});
