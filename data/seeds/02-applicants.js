exports.seed = function(knex, Promise) {
  return knex("applicants").insert([
    {
      userId: 4,
      firstName: "Arshak",
      lastName: "Smith",
      country: "United States",
      state: "California",
      city: "San Francisco",
      zipcode: 94016,
      address: "123 Brick st."
    },
    {
      userId: 5,
      firstName: "Tigran",
      lastName: "Dough",
      country: "United States",
      state: "Washington",
      city: "Redmond",
      zipcode: 98008,
      address: "123 Stone st."
    },
    {
      userId: 6,
      firstName: "Gene",
      lastName: "Jones",
      country: "United States",
      state: "Michigan",
      city: "Detroit",
      zipcode: 48127,
      address: "123 Rock st."
    }
  ]);
};
