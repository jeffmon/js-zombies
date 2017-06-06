function Item(name){
 this.name = name;
}

function Weapon(name, damage){
 this.damage = damage;
 Item.call(this, name);
}


Weapon.prototype  = Object.create(Item.prototype, {
  constructor: Weapon
});

function Food(name, energy){
  this.energy = energy;
  Item.call(this, name);
}

Food.prototype = Object.create(Item.prototype, {
  constructor: Food
});

function Player(name, health, strength, speed){
  this.name = name;
  this.health = health;
  this.strength = strength;
  this.speed = speed;
  this._maxHealth = health;
  this.isAlive = true;
  this.equipped = false;
  this._pack = [];
  this.weaponEquipped = [];
}

Player.prototype.getPack = function(){
  return this._pack;
};

Player.prototype.getMaxHealth = function(){
  return this._maxHealth;
};


Player.prototype.checkPack = function(){
  console.log(this.name + " is carrying the following items in his/her pack: ");
  for(var i = 0; i < this.getPack().length; i++){
    console.log((i + 1) + ". " + this.getPack()[i].name);
  }
};

Player.prototype.takeItem = function(item){
  if (this.getPack().length >= 3){
    console.log(this.name + "'s pack is full, the " + item.name + " could not be picked up.");
    return false;
  } else if (this.getPack().length < 3){
    console.log(this.name + " picks up the " + item.name + " and places it into his/her pack.");
    this.getPack().push(item);
    console.log(this.name + " is carrying the following items in his/her pack: ");
    for(var i = 0; i < this.getPack().length; i++){
        console.log((i + 1) + ". " + this.getPack()[i].name);
      }
    return true;
  }
};

Player.prototype.discardItem = function(item){
  if(this.getPack().indexOf(item) !== -1){
    var itemPosition = this.getPack().indexOf(item);
    this.getPack().splice(itemPosition, 1);
    console.log(this.name + " removes the " + item.name + " and has the following left in his/her pack: ");
    for(var i = 0; i < this.getPack().length; i++){
        console.log((i + 1) + ". " + this.getPack()[i].name);
      }
    return true;
  } else if(this.getPack().indexOf(item) === -1){
    console.log(this.name + " does not have the " + item.name + ".");
    return false;
  }
};

Player.prototype.equip = function(itemToEquip){
  var itemPosition = this.getPack().indexOf(itemToEquip);
  if (this.equipped === false && this.getPack().indexOf(itemToEquip) !== -1 && itemToEquip instanceof Weapon){
    this.getPack().splice(itemPosition, 1);
    this.equipped = itemToEquip;
    console.log(this.name + " wields a " + itemToEquip.name + ".");
    return true;
  } else if (this.equipped !== false && this.getPack().indexOf(itemToEquip) !== -1 && itemToEquip instanceof Weapon){
    console.log(this.name + " puts a " + this.equipped.name + " into his pack and wields a " + itemToEquip.name + ".");
    var equippedWeapon = this.equipped;
    this.equipped = this.getPack()[itemPosition];
    this.getPack().splice(itemPosition, 1, equippedWeapon);
    return true;
  } else if (itemToEquip instanceof Weapon === false && this.getPack().indexOf(itemToEquip !== -1)){
    console.log("That " + itemToEquip.name + " is not a weapon!");
    return false;
  } else if (this.getPack().indexOf(itemToEquip) === -1){
    console.log(this.name + " does not have a " + itemToEquip.name + " in his/her pack!");
    return false;
  }
};

Player.prototype.eat = function(itemToEat){
  if (itemToEat instanceof Food && this.getPack().indexOf(itemToEat) !== -1){
    console.log(this.name + " eats a " + itemToEat.name + " from his/her pack and gains " + itemToEat.energy + " health!");
    var itemPosition = this.getPack().indexOf(itemToEat);
    this.getPack().splice(itemPosition, 1);
    this.health += itemToEat.energy;
    if(this.health > this.getMaxHealth()){
      this.health = this.getMaxHealth();
    }
    return true;
  } else if (itemToEat instanceof Food !== true){
    console.log(this.name + " cannot eat that " + itemToEat.name + "! It's not edible!");
    return false;
  } else if (this.getPack().indexOf(itemToEat) === -1){
    console.log(this.name + " does not have a " + itemToEat.name + " in his/her pack!");
  }
};

Player.prototype.useItem = function(item){
  if (item instanceof Food){
    this.eat(item);
  } else if (item instanceof Weapon){
    this.equip(item);
  } else if (this.getPack().indexOf(item) === -1){
    console.log(this.name + " does not have that " + item.name + "!");
    return false;
  }
};

Player.prototype.equippedWith = function(){
  if(this.equipped !== false){
    console.log(this.name + " is holding a " + this.equipped.name + " in his/her hand!");
    return this.equipped.name;
  } else if(this.equipped === false){
    console.log(this.name + " is currently holding nothing in his/her hand!");
    return false;
  }
};

function Zombie(health, strength, speed){
  this.name = name;
  this.health = health;
  this.strength = strength;
  this.speed = speed;
  this._maxHealth = health;
  this.isAlive = true;
}

function FastZombie(health, strength, speed){
  Zombie.call(this, health, strength, speed);
}

FastZombie.prototype  = Object.create(Zombie.prototype, {
  constructor: FastZombie
});

function StrongZombie(health, strength, speed){
  Zombie.call(this, health, strength, speed);
}

StrongZombie.prototype  = Object.create(Zombie.prototype, {
  constructor: StrongZombie
});

function RangedZombie(health, strength, speed){
  Zombie.call(this, health, strength, speed);
}

RangedZombie.prototype  = Object.create(Zombie.prototype, {
  constructor: RangedZombie
});

function ExplodingZombie(health, strength, speed){
  Zombie.call(this, health, strength, speed);
}

ExplodingZombie.prototype  = Object.create(Zombie.prototype, {
  constructor: ExplodingZombie
});


function runGame() {
  var player = new Player("Joan", 500, 30, 70);
  var zombie = new Zombie(40, 50, 20);
  var charger = new FastZombie(175, 25, 60);
  var tank = new StrongZombie(250, 100, 15);
  var spitter = new RangedZombie(150, 20, 20);
  var boomer = new ExplodingZombie(50, 15, 10);

  var shovel = new Weapon("shovel", 15);
  var sandwich = new Food("sandwich", 30);
  var chainsaw = new Weapon("chainsaw", 25);

  player.takeItem(shovel);
  player.takeItem(sandwich);
  player.takeItem(chainsaw);
  player.discardItem(new Weapon("scythe", 21));
  player.discardItem(shovel);
  player.checkPack();
  player.takeItem(shovel);
  player.checkPack();

  player.equippedWith();
  player.useItem(chainsaw);
  player.equippedWith();
  player.checkPack();

  player.useItem(shovel);
  player.equippedWith();
  player.checkPack();

  player.health = 487;
  console.log("Before health: " + player.health);
  player.useItem(sandwich);
  console.log("After health: " + player.health);
  player.checkPack();
}
