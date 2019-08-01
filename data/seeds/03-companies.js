exports.seed = function(knex, Promise) {
  // Inserts seed entries
  return knex("companies").insert([
    {
      id: 1,
      userId: 1,
      companyName: "Microsoft",
      companyPicture:
        "https://www.zdnet.de/wp-content/uploads/2017/02/microsoft-logo.png",
      companyDescription:
        "At Microsoft, our mission is to empower every person and every organization on the planet to achieve more. Our mission is grounded in both the world in which we live and the future we strive to create. Today, we live in a mobile-first, cloud-first world, and the transformation we are driving across our businesses is designed to enable Microsoft and our customers to thrive in this world.",
      country: "United States",
      state: "Washington",
      city: "Redmond",
      zipcode: 98052,
      address: "One Microsoft Way"
    },
    {
      id: 2,
      userId: 2,
      companyName: "Apple",
      companyDescription:
        "We’re a diverse collection of thinkers and doers, continually reimagining what’s possible to help us all do what we love in new ways. The people who work here have reinvented entire industries with the Mac, iPhone, iPad, and Apple Watch, as well as with services, including iTunes, the App Store, Apple Music, and Apple Pay. And the same innovation that goes into our products also applies to our practices — strengthening our commitment to leave the world better than we found it.",
      country: "United States",
      state: "Cupertino",
      city: "Calfornia",
      zipcode: 95014,
      address: "1 Apple Park Way"
    },
    {
      id: 3,
      userId: 3,
      companyName: "Github",
      companyDescription:
        "GitHub is the best place to share code with friends, co-workers, classmates, and complete strangers. Over 31 million people use GitHub to build amazing things together across 97+ million repositories. With all the collaborative features of GitHub, it has never been easier for individuals and teams to write faster, better code.",
      country: "United States",
      state: "Calfornia",
      city: "San Francisco",
      zipcode: 94107,
      address: "88 Colin P Kelly Jr Street"
    }
  ]);
};
