const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const SajhaRoutes = [
  {
    main: "Langankhel -- Gongabu New Bus Park",
    sub: [
      "Kumaripati -- Jawalakhel -- Pulchowk",
      "Harihar Bhavan -- Kupondol -- Tripureshwor",
      "N.A.C -- Jamal -- Lainchaur -- Lazimpat",
      "Panipokhari -- President Building -- Teaching Hospital",
      "Narayan Gopal Chowk -- Basundhara -- Samakhusi-- Gongabu",
    ],
  },
  {
    main: "Langankhel -- Budhanilkantha",
    sub: [
      "Kumaripati -- Jawalakhel -- Pulchowk",
      "Harihar Bhavan -- Kupondole",
      "Tripureshwor -- N.A.C -- Jamal",
      "Lainchowr -- Lazimpat -- Panipokhari",
      "Teaching Hospital -- Narayan Gopal Chowk",
      "Gangalal Hospital -- Neuro Hospital -- Golfutar",
      "Telecom Chwok -- Hattigauda -- Chapali -- Deuwa Chwok",
      "Budhanilkantha",
    ],
  },
  {
    main: "Godawari -- Ratnapark",
    sub: [
      "Godawari",
      "Taukhel -- Hadegaun -- Badegaun",
      "Harishidhi -- Hattiban -- Khumaltar",
      "Satdobato -- Lagankhel -- Kumaripati -- Jawalakhel",
      "Pulchowk -- Harihar Bhawan -- Kupondole",
      "Tripureshwor -- N.A.C",
      "Ratnapark",
    ],
  },
  {
    main: "Lamatar -- Ratnapark",
    sub: [
      "Lamatar",
      "Dungin -- Lubhu -- School Chwok -- Sanagaun",
      "Kamalpokhari -- Imadole Krishna Mandir-- Ratamakai Chowk",
      "Kist Hospital -- Gwarko -- Satdobato",
      "Lagankhel -- Jawalakhel -- Pulchowk",
      "Harihar Bhawan -- Kupondole -- Tripureshwor -- N.A.C",
      "Ratnapark",
    ],
  },
  {
    main: "Thankot -- Tribhuvan International Airport",
    sub: [
      "Thankot",
      "Tribhuwan park -- Checkpost -- Satungal",
      "Naikap -- Dua Aadha",
      "Kalanki -- Kalanki Mandir -- Rabibhawan",
      "Solteemode -- Kalimati -- Teku",
      "Vipareshwor -- N.A.C -- Ratnapark",
      "Singhadurbar -- Maitighar -- Bijali Bajar",
      "Naya Baneshwor -- Tinkune -- Sinamangal",
      "Tribhuvan International Airport",
    ],
  },
  {
    main: "Thankot -- Budhanilkantha",
    sub: [
      "Thankot",
      "Tribhuvan Park -- Checkpost -- Satungal",
      "Naikap -- Kalanki -- Bafal",
      "Sitapaila -- Swoyambhu -- Banasthali",
      "Balaju -- Gongabu Bus Park -- Samakhusi",
      "Basundhara- - Narayangopal Chowk -- Gangalal Hospital",
      "Neuro Hospital -- Golfutaar",
      "Hattigauda -- Deuba Chwok",
      "Budhanilkantha",
    ],
  },
];

const SubhakamanaRoutes = [
  {
    main: "Langankhel -- Gongabu New Bus Park",
    sub: [
      "Kumaripati -- Jawalakhel -- Pulchowk",
      "Harihar Bhavan -- Kupondol -- Tripureshwor",
      "N.A.C -- Jamal -- Lainchaur -- Lazimpat",
      "Panipokhari -- President Building -- Teaching Hospital",
      "Narayan Gopal Chowk -- Basundhara -- Samakhusi-- Gongabu",
    ],
  },
  {
    main: "Langankhel -- Budhanilkantha",
    sub: [
      "Kumaripati -- Jawalakhel -- Pulchowk",
      "Harihar Bhavan -- Kupondole",
      "Tripureshwor -- N.A.C -- Jamal",
      "Lainchowr -- Lazimpat -- Panipokhari",
      "Teaching Hospital -- Narayan Gopal Chowk",
      "Gangalal Hospital -- Neuro Hospital -- Golfutar",
      "Telecom Chwok -- Hattigauda -- Chapali -- Deuwa Chwok",
      "Budhanilkantha",
    ],
  },
  {
    main: "Godawari -- Ratnapark",
    sub: [
      "Godawari",
      "Taukhel -- Hadegaun -- Badegaun",
      "Harishidhi -- Hattiban -- Khumaltar",
      "Satdobato -- Lagankhel -- Kumaripati -- Jawalakhel",
      "Pulchowk -- Harihar Bhawan -- Kupondole",
      "Tripureshwor -- N.A.C",
      "Ratnapark",
    ],
  },
  {
    main: "Lamatar -- Ratnapark",
    sub: [
      "Lamatar",
      "Dungin -- Lubhu -- School Chwok -- Sanagaun",
      "Kamalpokhari -- Imadole Krishna Mandir-- Ratamakai Chowk",
      "Kist Hospital -- Gwarko -- Satdobato",
      "Lagankhel -- Jawalakhel -- Pulchowk",
      "Harihar Bhawan -- Kupondole -- Tripureshwor -- N.A.C",
      "Ratnapark",
    ],
  },
  {
    main: "Thankot -- Tribhuvan International Airport",
    sub: [
      "Thankot",
      "Tribhuwan park -- Checkpost -- Satungal",
      "Naikap -- Dua Aadha",
      "Kalanki -- Kalanki Mandir -- Rabibhawan",
      "Solteemode -- Kalimati -- Teku",
      "Vipareshwor -- N.A.C -- Ratnapark",
      "Singhadurbar -- Maitighar -- Bijali Bajar",
      "Naya Baneshwor -- Tinkune -- Sinamangal",
      "Tribhuvan International Airport",
    ],
  },
  {
    main: "Thankot -- Budhanilkantha",
    sub: [
      "Thankot",
      "Tribhuvan Park -- Checkpost -- Satungal",
      "Naikap -- Kalanki -- Bafal",
      "Sitapaila -- Swoyambhu -- Banasthali",
      "Balaju -- Gongabu Bus Park -- Samakhusi",
      "Basundhara- - Narayangopal Chowk -- Gangalal Hospital",
      "Neuro Hospital -- Golfutaar",
      "Hattigauda -- Deuba Chwok",
      "Budhanilkantha",
    ],
  },
];

const NepalYatayatRoutes = [
  {
    main: "Patandhoka",
    sub: [
      "Patandhoka",
      "Kupondole -- Thapathali -- Bhadrakali",
      "Yanyeshi -- Jamal -- Kamaladi",
      "Kamal Pokhari -- Gyaneshwor",
      "Ratopul -- Gaushala -- Jayabageshwori",
      "Mitra Park --Chabahil -- Chuchepati",
      "Tusal -- Boudha",
      "Jorpati -- Narayantar",
      "Dakshindhoka",
    ],
  },
  {
    main: "Lele  -- Jamal",
    sub: [
      "Lele ",
      "Tikabhairab -- Takhel -- Pyang Gaun",
      "Thecho -- Sunakothi -- Dholahiti",
      "Khumaltar -- Chapagaun -- Lagankhel",
      "Kumaripati -- Jawalakhel -- Pulchwok",
      "Hariharbhawan -- Kupondole",
      "Tripureshwor --   N.A.C",
      "Jamal",
    ],
  },
  {
    main: "Godawari -- Ratnapark",
    sub: [
      "Godawari",
      "Taukhel -- Hadegaun -- Badegaun",
      "Harishidhi -- Hattiban -- Khumaltar",
      "Satdobato -- Lagankhel -- Kumaripati -- Jawalakhel",
      "Pulchowk -- Harihar Bhawan -- Kupondole",
      "Tripureshwor -- N.A.C",
      "Ratnapark",
    ],
  },
  {
    main: "Thankot -- Budhanilkantha",
    sub: [
      "Thankot",
      "Tribhuvan Park -- Checkpost -- Satungal",
      "Naikap -- Kalanki -- Bafal",
      "Sitapaila -- Swoyambhu -- Banasthali",
      "Balaju -- Gongabu Bus Park -- Samakhusi",
      "Basundhara- - Narayangopal Chowk -- Gangalal Hospital",
      "Neuro Hospital -- Golfutaar",
      "Hattigauda -- Deuba Chwok",
      "Budhanilkantha",
    ],
  },
];

export { navLinks, SajhaRoutes, NepalYatayatRoutes, SubhakamanaRoutes };
