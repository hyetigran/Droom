exports.seed = function(knex, Promise) {
  return knex("seekers").insert([
    {
      userId: 4,
      firstName: "Arshak",
      lastName: "Smith",
      profilePicture:
        "http://www.stleos.uq.edu.au/wp-content/uploads/2016/08/image-placeholder-350x350.png",
      month: 10,
      day: 13,
      year: 1990,
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
      month: 5,
      day: 21,
      year: 1994,
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
      month: 1,
      day: 2,
      year: 1992,
      country: "United States",
      state: "Michigan",
      city: "Detroit",
      zipcode: 48127,
      address: "123 Rock st."
    }
  ]);
};
