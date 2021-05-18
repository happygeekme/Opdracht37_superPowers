const SuperHeroes = [
    {
    name: "Batman",
    publisher: "DC Comics",
    alter_ego: "Bruce Wayne",
    first_appearance: "Detective Comics #27",
    weight: "210"
    },
    {
    name: "Superman",
    publisher: "DC Comics",
    alter_ego: "Kal-El",
    first_appearance: "Action Comics #1",
    weight: "220"
    },
    {
    name: "Flash",
    publisher: "DC Comics",
    alter_ego: "Jay Garrick",
    first_appearance: "Flash Comics #1",
    weight: "195"
    },
    {
    name: "Green Lantern",
    publisher: "DC Comics",
    alter_ego: "Alan Scott",
    first_appearance: "All-American Comics #16",
    weight: "186"
    },
    {
    name: "Green Arrow",
    publisher: "DC Comics",
    alter_ego: "Oliver Queen",
    first_appearance: "All-American Comics #16",
    weight: "195"
    },
    {
    name: "Wonder Woman",
    publisher: "DC Comics",
    alter_ego: "Princess Diana",
    first_appearance: "The Incredible Hulk #180",
    weight: "165"
    },
    {
    name: "Blue Beetle",
    publisher: "DC Comics",
    alter_ego: "Dan Garret",
    first_appearance: "Mystery Men Comics #1",
    weight: "145"
    },
    {
    name: "Spider Man",
    publisher: "Marvel Comics",
    alter_ego: "Peter Parker",
    first_appearance: "Amazing Fantasy #15",
    weight: "167"
    },
    {
    name: "Captain America",
    publisher: "Marvel Comics",
    alter_ego: "Steve Rogers",
    first_appearance: "Captain America Comics #1",
    weight: "220"
    },
    {
    name: "Iron Man",
    publisher: "Marvel Comics",
    alter_ego: "Tony Stark",
    first_appearance: "Tales of Suspense #39",
    weight: "250"
    },
    {
    name: "Thor",
    publisher: "Marvel Comics",
    alter_ego: "Thor Odinson",
    first_appearance: "Journey into Myster #83",
    weight: "200"
    },
    {
    name: "Hulk",
    publisher: "Marvel Comics",
    alter_ego: "Bruce Banner",
    first_appearance: "The Incredible Hulk #1",
    weight: "1400"
    },
    {
    name: "Wolverine",
    publisher: "Marvel Comics",
    alter_ego: "James Howlett",
    first_appearance: "The Incredible Hulk #180",
    weight: "200"
    },
    {
    name: "Daredevil",
    publisher: "Marvel Comics",
    alter_ego: "Matthew Michael Murdock",
    first_appearance: "Daredevil #1",
    weight: "200"
    },
    {
    name: "Silver Surfer",
    publisher: "Marvel Comics",
    alter_ego: "Norrin Radd",
    first_appearance: "The Fantastic Four #48",
    weight: "unknown"
    }
    ]

// 1
// SuperHeroes.map(hero => console.log("These are the superheroes: " + (hero.name));

// 2

// const lightWeights = SuperHeroes.filter(hero => hero.weight < 190);

// console.log("These heroes weigh less than 190 pounds: " + (lightWeights));

// 3

// const weighs200Pound = SuperHeroes.filter(hero => {
//           return (hero.weight === "200");
//   }).map(hero => {
//     return hero.name;
//   });

//   console.log("These heroes weigh 200 pounds: "  + (weighs200Pound))
//   console.log("***");

// // 4 

// firstAppearances = SuperHeroes.map(hero => {
//   return "\n" + hero.name + " -> " + hero.first_appearance;
// });

// console.log("Here these heroes appeared first: " + (firstAppearances));
// console.log("***");

// // 5


// const dcComicsHeroes = SuperHeroes.filter(hero => {
//   return hero.publisher === "DC Comics";
// })

// const weightInc = dcComicsHeroes.map(hero => {
//   const weight = parseInt(hero.weight);
//   return weight;  
// }).reduce((acc, cur) => {
//   return acc + cur;
// });

// console.log("The total weight of the DC Comics heroes is " + (weightInc) + " pound");
// console.log("***");

// const MarvelComicsHeroes = SuperHeroes.filter(hero => {
//   return hero.publisher === "Marvel Comics";
// })
// // console.log(MarvelComicsHeroes)

// const weight = MarvelComicsHeroes.map(hero => {
//   const weight = parseInt(hero.weight);
//  if (hero.weight < 0 || hero.weight >= 0) {
//      return parseInt(hero.weight);
//  } else {
//    return hero.weight = parseInt("0");
//  }
// }).reduce((acc, cur) => {
//   return (acc + cur);
// });

// console.log(weight)

// 8 --- ik kom er niet uit bij deze bonusvraag

const heaviestHero = SuperHeroes.filter(hero => {
  for (i = 0; i < (SuperHeroes.lenght - 1); i++) {

    let current = parseInt(SuperHeroes[i].weight);
    let next = parseInt(SuperHeroes[i++].weight);
    
    console.log(current);

    if (current <= next) {
    let current = [(current + 1)];
    let next = [(next + 1)];
    }else {
      return current.name;
    }
  };
})


// console.log("The heavies hero is " + heaviestHero);
