const db = require("../data/dbConfig");

// Add user and return user resource
const add = async user => {
  const [id] = await db("users")
    .insert(user)
    .returning("id");
  return findById(id);
};

// Find all users
const findAll = () => {
  return db("users");
};

// Find user by parameter
const findBy = filter => {
  return db("users").where(filter);
};

// Find user by id
const findById = id => {
  return db("users")
    .where(id)
    .first();
};

// Update user and return user resource
const update = async (id, user) => {
  await db("users")
    .where({ id })
    .update(user);
  return findById(id);
};

// Delete user by id
const remove = id => {
  return db("users")
    .where({ id })
    .del();
};

const findApplicant = id => {
  return db("applicants")
    .where({ userId: id })
    .select("id")
    .first()
    .returning("id");
};

module.exports = {
  add,
  findAll,
  findBy,
  findById,
  update,
  remove,
  findApplicant
};
