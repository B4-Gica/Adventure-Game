class Planet {
    constructor(name) {
      this._name = name;
      this._description = "";
      this._portalPlanets = {};
      this._character = "";
      this._planetItem = "";
    }

    set name(value) {
      this._name = value;
    }
  
    set description(value) {
      this._description = value;
    }
  
    set character(value) {
      this._character = value;
    }
    
    set planetItem(value) {
        this._planetItem = value;
    }

    get name() {
        return this._name;
      }
    
    get description() {
        return this._description;
      }
    
    get character() {
        return this._character;
      }

    get planetItem() {
          return this._planetItem;
      }

    describe() {
      return "Looking around the " + this._name + " you can see " + this._description;
    }
  
    travelPlanet(direction, planetToTravel) {
      this._portalPlanets[direction] = planetToTravel;
    }
  
    getDetails() {
      const entries = Object.entries(this._portalPlanets);
      let details = []
      for (const [direction, planet] of entries) {
        let text = " The " + planet._name + " is to the " + direction;
        details.push(text);
      }
      return details;
    }
  
    //method to move to a new Planet
    move(direction) {
      if (direction in this._portalPlanets) {
        return this._portalPlanets[direction];
      } else {
        alert("You can't go that way",);
        alert(this._name)
        return this;
      }
    }
  }
  
  class Item {
    constructor(name) {
      this._name = name,
      this._description = ""
    }
  
    get name() {
      return this._name;
    }
  
    get description() {
      return this._description;
    }
    
    set name(value) {
        this._name = value;
    }
    set description(value) {
        this._description = value;
    }

    describe() {
      return "The " + this._name + " is " + this._description;
    }
  }
  
  
  class Character {
    constructor(name) {
      this._name = name,
      this._description = ""
      this._conversation = ""
    }
    set name(value) {
      this._name = value;
    }
  
    set description(value) {
      this._description = value;
    }
  
    set conversation(value) {
      this._conversation = value;
    }
    get name() {
      return this._name;
    }
  
    get description() {
      return this._description;
    }
  
    get conversation() {
      return this._conversation;
    }
 
    describe() {
      return "You have met " + this._name + ", " + this._name + " is " + this._description;
    }
  

    converse() {
      return this._name + " says " + "'" + this._conversation + "'";
    }
  }
  
  class Alien extends Character {
    constructor(name) {
      super(name);
      this._weakness = "";
    }
  
    get weakness() {
        this._weakness;
    }

    set weakness(value) {
      this._weakness = value;
    }

  
    fight(item) {
      if (item === this_weakness) {
        return true;
      } else {
        return false;
      }
    }
  
  }

  class Player {
      constructor() {
          this.backpack = []
      }

     set backpack(value) {
           this.backpack = value;
       }

     get backpack() {
         return this.backpack
     }

     addToBackPack(item) {
         this._backpack.push(item);
     }

    checkBackPack(item) {
        for (let i = 0; i < this._backpack.length; i++) {
            if (list[i] === item) {
                return true;
            }
        }
        return false; // comanda asta trebuie in interiorul for loop?
    }
  }
  
  //create the indiviual room objects and add their descriptions
  const Marte = new Planet("Marte");
  Marte.description = `Mars is a terrestrial planet with a thin atmosphere, and with no signs of life , but something is seen in the distance . What could it be? You need to have the Helmet to ask George help`;
  const Mercur = new Planet("Mercur");
  Mercur.description = "Mercury is a planet in our solar system. It is the smallest of the eight planets. It is also the closest to the sun! You need a Cub Ice to help Matt";
  const Jupiter = new Planet("Jupiter");
  Jupiter.description = `It is a gas giant with a mass more than two and a half times that of all the other planets in the Solar System combined! Here you can Look for Helmet`;
  const Earth = new Planet("Earth");
  Earth.description = "a teleportation device";
  
  //link the rooms together
  Marte.travelPlanet("south", Mercur);
  Marte.travelPlanet("east", Earth);
  Mercur.travelPlanet("north", Marte);
  Mercur.travelPlanet("east", Jupiter);
  Jupiter.travelPlanet("west", Mercur);
  Jupiter.travelPlanet("north", Earth);
  Earth.travelPlanet("south", Jupiter);
  Earth.travelPlanet("west", Marte);
  
  //add characters
  const George = new Alien("George");
  George.conversation = "Hy i`m George the alien";
  George.description = "a very friendly Martian with a big head, one eye and 2 antennae and i can`t read you`r mined";
  George.pronoun = "I read you mined";
  George.weakness = Helmet;

  const Matt = new Alien("Matt");
  Matt.conversation = "Fire ... Fire fire";
  Matt.description = "Matt is a fiery alien with crisp skin";
  Matt.pronoun = "Need Ice";
  Matt.weakness = IceCube;

  //  add items
  // const Helmet = new item("Helmet", "Use Helmet to take the Ice cube from George");
  // const IceCube = new item("Ice Cube", "Use this to cool down Matt");

 // add items
  const Helmet = new Item("Helmet");
  Helmet.description = "Protect you from George powers";
  const IceCube = new Item("Ice Cube");
  IceCube.description = "This help Matt to cool down";

  
  
  // add characters & items to planets
  Marte.character = George;
  Marte.planetItem = IceCube;
  Mercur.character = Matt;
  Jupiter.planetItem = Helmet;

 // creat Player
  const thisPlayer = new Player();
  
  function displayPlanetInfo(planet) {
    let occupantMsg = ""
    if (planet.character === "") {
      occupantMsg = ""
    } else {
      occupantMsg = planet.character.describe() + ". " + planet.character.converse()
    }
    
    textContent = "<p>" + planet.describe() + "</p>" + "<p>" + occupantMsg + "</p>" + "<p>" + planet.getDetails() + "</p>";
  
    document.getElementById("textarea").innerHTML = textContent;
    document.getElementById("buttonarea").innerHTML = '><input type="text" id="usertext" />';
    document.getElementById("usertext").focus();
  }
  

  function startGame() {
    //set and display start room
    currentPlanet = Earth
    displayPlanetInfo(currentPlanet);
  
    //
  
    //handle commands
    document.addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        command = document.getElementById("usertext").value.toLowerCase();
        const directions = ["north", "south", "east", "west"]
        if (directions.includes(command)) {
          currentPlanet = currentPlanet.move(command)
          displayPlanetInfo(currentPlanet);
        } else {
          document.getElementById("usertext").value = ""
          alert("that is not a valid command please try again")
        }
      }
    });
  }
  
  