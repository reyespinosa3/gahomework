// 1. light switch = boolean
//      on or off -- true or false -- 0 or 1
// 2. email address = string
//      reynaldo.espinosa.iii@gmail.com
// 3. spaceship parts = array of strings
//      ["hull", "laser blasters", "tractor beam", "warp drive"]
// 4. student names list = array of strings
//      ["Jaime", "Spencer", "VP"]
// 5. student names and locations = object
//      {name: "Jeremy", location: "Austin"}
// 6. student names, location and fav TV show = object
//      {name: "Jeremy", location: "Austin", favTV: "Office"}

//Take it Easy
const rainbow = ["Red", "Orange", "Yellow", "Blue", "Green", "Violet"];
console.log(rainbow[3]);

const rey = {
  favFood: "tacos",
  hobby: "camping",
  town: "Manor",
  favDataType: "boolean"
}
console.log(rey.hobby);

// Crazy Object
const crazyObject = {
  taco: [{meat: 'steak',
         cheese: ['panela', 'queso', 'chihuahua']},
         {meat: 'chicken',
          salsa: ["pico", "hot", "hotter", "really hot", "really really hot", "omg my mouth is burning"]},
        ],
  larry: {
    nicknames: ["LD", "Chicken Teriyaki Boyyyyyy"],
    quotes: ["Pretty pretty prettayyyyy good", "Is that a parkinson's thing?", "women love a self confident bald man", "I'm a walking talking enigma"],
    characters: [{
      name: "Jeff",
      occupation: "manager"
    },
    {
      name: "funkhauser",
      occupation: "tv dude"
    },
    {
      name: "susie",
      occupation: "jeffs wife",
      favourtieHobby: "Swearing at Larry and Jeff"
    },
    ]
  }
}
console.log(crazyObject.taco[0].salsa[5]);
console.log(crazyObject.larry.quotes[0]);
console.log(crazyObject.larry.characters[2].favourtieHobby);
console.log(crazyObject.larry.nicknames[1]);
console.log(crazyObject.larry.characters[1]);

// Object-ception
const inception = {
   reality: {
       dreamLayer1: {
           dreamLayer2: {
               dreamLayer3: {
                   dreamLayer4: {
                       dreamLayer5: {
                           dreamLayer6: {
                               limbo: "Joseph Gordon Levitt"
                          }
                       }
                   }
               }
           }
       }
   }
}
inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6.limbo = null;
