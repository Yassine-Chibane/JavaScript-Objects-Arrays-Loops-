// e.g. A computer that can be either on or off. 
// => datatype: boolean 
// => data structure example: const computer = true; 

// A light switch that can be either on or off.
// ==> datatype: boolean
// => data structure example: 
//switch = (true)

// A user's email address.
// ==> datatype: string
// => data structure example: 
var emailAddress = 'chibanefr2002@hotmail.com'; 

// A spaceship with a hull, laser blasters, tractor beam, and warp drive.
// ==> datatype: array
// => data structure example: 
var spaceship = ['hull','laser blasters','tractor beam', 'wrap drive']

// A list of student names from our class.
// ==> datatype: array
// => data structure example: 
var studentNames = ['name1','name2','name3']

// A list of student names from our class, each with a location.
// ==> datatype: object
// => data structure example:
var studentNamesAndLocation = {
    name1: "Eric",
    location1: "Atlanta",
    name2: "Young",
    location2: "Japan"
}

// A list of student names from our class, each with a location and each with a list of favorite tv shows.
// ==> datatype: object
// => data structure example:
var studentNamesAndLocation = {
    name1: "Eric",
    location1: "Atlanta",
    favShow1: "Blacklist",
    name2: "Young",
    location2: "Japan",
    favShow2: "Dexter"
}


// Take it Easy
// Make an array that holds all of the colors of the rainbow.

var rainbow = ['Red','Orange','Yellow','Green','Blue','Indigo','Violet']
// Write code that will access "blue" from the rainbow array.
console.log(rainbow[4])
// Make an object that is called your name and holds the information about your favorite food, a hobby, the name of the town that you live in currently, and your favorite datatype.
var yassine = {
    favFood: "Couscous",
    hobby: "Soccer",
    currentTown: "Columbus",
    favDatatype: "Boolean"
}
// Write code that will access your hobby from the object that you just created.
console.log(yassine.hobby)

//Crazy Object!

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
// Use crazy Object to log the following.
// "omg my mouth is burning"
console.log(crazyObject.taco[1].salsa[5])
// "Pretty pretty prettayyyyy good"
console.log(crazyObject.larry.quotes[0])
// "Swearing at Larry and Jeff"
console.log(crazyObject.larry.characters[2].favourtieHobby)
// "Chicken Teriyaki Boyyyyyy"
console.log(crazyObject.larry.nicknames[1])
// The object the contains the name funkhauser
console.log(crazyObject.larry.characters[1])
// Add the quote "I'm trying to elevate small talk to medium talk" to Larry's quote array. Confirm that it was added.
crazyObject.larry.quotes[4] = "I'm trying to elevate small talk to medium talk"
console.log(crazyObject.larry.quotes)


//Object-ception with the following object:

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
//Change the value of limbo to null.
inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6.limbo = null
console.log(inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6.limbo)


// Bond Films
// Array of objects:
const bondFilms = [
  { "title" : "Skyfall", "year" : 2012, "actor" : "Daniel Craig", "gross" : "$1,108,561,008" },
  { "title" : "Thunderball", "year" : 1965, "actor" : "Sean Connery", "gross" : "$1,014,941,117" },
  { "title" : "Goldfinger", "year" : 1964, "actor" : "Sean Connery", "gross" : "$912,257,512" },
  { "title" : "Live and Let Die", "year" : 1973, "actor" : "Roger Moore", "gross" : "$825,110,761" },
  { "title" : "You Only Live Twice", "year" : 1967, "actor" : "Sean Connery", "gross" : "$756,544,419" },
  { "title" : "The Spy Who Loved Me", "year" : 1977, "actor" : "Roger Moore", "gross" : "$692,713,752" },
  { "title" : "Casino Royale", "year" : 2006, "actor" : "Daniel Craig", "gross" : "$669,789,482" },
  { "title" : "Moonraker", "year" : 1979, "actor" : "Roger Moore", "gross" : "$655,872,400" },
  { "title" : "Diamonds Are Forever", "year" : 1971, "actor" : "Sean Connery", "gross" : "$648,514,469" },
  { "title" : "Quantum of Solace", "year" : 2008, "actor" : "Daniel Craig", "gross" : "$622,246,378" },
  { "title" : "From Russia with Love", "year" : 1963, "actor" : "Sean Connery", "gross" : "$576,277,964" },
  { "title" : "Die Another Day", "year" : 2002, "actor" : "Pierce Brosnan", "gross" : "$543,639,638" },
  { "title" : "Goldeneye", "year" : 1995, "actor" : "Pierce Brosnan", "gross" : "$529,548,711" },
  { "title" : "On Her Majesty's Secret Service", "year" : 1969, "actor" : "George Lazenby", "gross" : "$505,899,782" },
  { "title" : "The World is Not Enough", "year" : 1999, "actor" : "Pierce Brosnan", "gross" : "$491,617,153" },
  { "title" : "For Your Eyes Only", "year" : 1981, "actor" : "Roger Moore", "gross" : "$486,468,881" },
  { "title" : "Tomorrow Never Dies", "year" : 1997, "actor" : "Pierce Brosnan", "gross" : "$478,946,402" },
  { "title" : "The Man with the Golden Gun", "year" : 1974, "actor" : "Roger Moore", "gross" : "$448,249,281" },
  { "title" : "Dr. No", "year" : 1962, "actor" : "Sean Connery", "gross" : "$440,759,072" },
  { "title" : "Octopussy", "year" : 1983, "actor" : "Roger Moore", "gross" : "$426,244,352" },
  { "title" : "The Living Daylights", "year" : 1987, "actor" : "Timothy Dalton", "gross" : "$381,088,866" },
  { "title" : "A View to a Kill", "year" : 1985, "actor" : "Roger Moore", "gross" : "$321,172,633" },
  { "title" : "License to Kill", "year" : 1989, "actor" : "Timothy Dalton", "gross" : "$285,157,191" }
];

// Create a new array called `bondTitles` with only the titles of the Bond films, and console.log the new array.

var bondTitles = []; 		// Start an array to collect the titles.
for (var i = 0; i < bondFilms.length; i++) {	
	bondTitles.push(bondFilms[i].title)		
}
console.log(bondTitles);

// Create a new array `oddBonds`, of only the Bond films released on odd-numbered years.
var oddBonds = [];
for (var i = 0; i < bondFilms.length; i++) {
	if (bondFilms[i].year % 2 != 0) {
		oddBonds.push(bondFilms[i]);	
	}	
}
console.log(oddBonds);

// Determine the total cumulative gross of the Bond franchise, and console.log the result. _hint_ To make the grosses into usable numbers, look into the `.replace` Javascript method (there are many ways to do this, however). Look into `parseInt` also.
var totalGross = 0;
for (var i = 0; i < bondFilms.length; i++) {
	totalGross += Number(bondFilms[i].gross.replace(/[,$]/g,""));	// Use regex global search for commas and question marks, and remove them. Each term has to be converted to number for summation.	
}

console.log("Total gross: $" + totalGross.toString().split('').reverse().join('').replace(/(\d{3})/g,"$1,").split('').reverse().join(''));


// Construct an object that logs the number of appearances by each actor.
var actorFreq = {};
for (var i = 0; i < bondFilms.length; i++) {
	if (!actorFreq[bondFilms[i].actor]) {
		actorFreq[bondFilms[i].actor] = 0;
	} 
	actorFreq[bondFilms[i].actor]++;	
};

// Sort the object 'actorFreq' by first converting it to an array.
var actorSorted = [];
for (var actor in actorFreq ) {
    actorSorted.push([actor, actorFreq[actor]]);
}

// Then sort in the ascending order of appearances.
actorSorted.sort(function(a, b) {
    return a[1] - b[1]
});

// See the result.
console.log(actorSorted)

// Using this sorted list, find the movie info.
for (var i = 0; i < bondFilms.length; i++) {
	if (bondFilms[i].actor === actorSorted[0][0]) {
		console.log(bondFilms[i])
	}
}