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
  if (this.equipped === false && this.getPack().indexOf(itemToEquip) !== -1 && itemToEquip instanceof Weapon){
    var itemPosition = this.getPack().indexOf(itemToEquip);
    this.getPack().splice(itemPosition, 1);
    this.equipped = itemToEquip
    this.equipped = itemToEquip;
    console.log(this.name + " wields a " + itemToEquip.name + ".");
    return true;
  } else if (this.equipped !== false && this.getPack().indexOf(itemToEquip) !== -1 && itemToEquip instanceof Weapon){
    console.log(this.name + " puts a " + this.equipped.name + " into his pack and wields a " + itemToEquip.name + ".");
    var itemPosition = this.getPack().indexOf(itemToEquip);
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

/**
 * Player Class Method => eat(itemToEat)
 * -----------------------------
 * Player eats a food item, restoring their health.
 *
 * Player can only eat Food instances.
 * Player can only eat food items from their pack.
 *
 * Remove itemToEat from the pack.
 * Increase the player's health by the food's energy amount, but do not
 *   exceed the player's max health.  If exceeded, simply set player's health
 *   to max health instead.
 * To access the player's max health, be sure to use Player's getMaxHealth method.
 * You should be able to invoke this function on a Player instance.
 *
 * @name eat
 * @param {Food} itemToEat  The food item to eat.
 */


/**
 * Player Class Method => useItem(item)
 * -----------------------------
 * Player uses an item from the pack.
 *
 * If the item is a weapon, the player should equip the item.
 * If the item is food, the player should eat the item.
 * You should be able to invoke this function on a Player instance.
 *
 * @name useItem
 * @param {Item/Weapon/Food} item   The item to use.
 */


/**
 * Player Class Method => equippedWith()
 * -----------------------------
 * Player checks their equipment.
 *
 * Prints the player's name and equipped weapon's name.
 * If nothing is equipped, prints a message saying so.
 * Also returns the equipped weapon's name or false if nothing is equipped.
 * You should be able to invoke this function on a Player instance.
 *
 * @name equippedWith
 * @return {string/boolean}   Weapon name or false if nothing is equipped.
 */


/**
 * Class => Zombie(health, strength, speed)
 * -----------------------------
 * Creates a normal zombie.
 *
 * @name Zombie
 * @param {number} health           The zombie's health.
 * @param {number} strength         The zombie's strength.
 * @param {number} speed            The zombie's speed.
 * @private {number} maxHealth      Default value should be set to `health`.
 * @property {number} health
 * @property {number} strength
 * @property {number} speed
 * @property {boolean} isAlive      Default value should be `true`.
 */


/**
 * Class => FastZombie(health, strength, speed)
 * -----------------------------
 * Creates a fast zombie.
 *
 * The FastZombie class constructor will call
 *   the super class (Zombie) constructor
 *   while passing in the 3 Zombie constructor params
 *
 * @name FastZombie
 * @param {number} health           The zombie's health.
 * @param {number} strength         The zombie's strength.
 * @param {number} speed            The zombie's speed.
 */


/**
 * FastZombie Extends Zombie Class
 * -----------------------------
 */



/**
 * Class => StrongZombie(health, strength, speed)
 * -----------------------------
 * Creates a strong zombie.
 *
 * The StrongZombie class constructor will call
 *   the super class (Zombie) constructor
 *   while passing in the 3 Zombie constructor params
 *
 * @name StrongZombie
 * @param {number} health           The zombie's health.
 * @param {number} strength         The zombie's strength.
 * @param {number} speed            The zombie's speed.
 */


/**
 * StrongZombie Extends Zombie Class
 * -----------------------------
 */



/**
 * Class => RangedZombie(health, strength, speed)
 * -----------------------------
 * Creates a ranged zombie.
 *
 * The RangedZombie class constructor will call
 *   the super class (Zombie) constructor
 *   while passing in the 3 Zombie constructor params
 *
 * @name RangedZombie
 * @param {number} health           The zombie's health.
 * @param {number} strength         The zombie's strength.
 * @param {number} speed            The zombie's speed.
 */


/**
 * RangedZombie Extends Zombie Class
 * -----------------------------
 */



/**
 * Class => ExplodingZombie(health, strength, speed)
 * -----------------------------
 * Creates an exploding zombie.
 *
 * The ExplodingZombie class constructor will call
 *   the super class (Zombie) constructor
 *   while passing in the 3 Zombie constructor params
 *
 * @name ExplodingZombie
 * @param {number} health           The zombie's health.
 * @param {number} strength         The zombie's strength.
 * @param {number} speed            The zombie's speed.
 */


/**
 * ExplodingZombie Extends Zombie Class
 * -----------------------------
 */




/**
 * Sample run.
 * Feel free to edit this and check your game logic.
 */
function runGame() {
  // var player = new Player("Joan", 500, 30, 70);
  // var zombie = new Zombie(40, 50, 20);
  // var charger = new FastZombie(175, 25, 60);
  // var tank = new StrongZombie(250, 100, 15);
  // var spitter = new RangedZombie(150, 20, 20);
  // var boomer = new ExplodingZombie(50, 15, 10);

  // var shovel = new Weapon("shovel", 15);
  // var sandwich = new Food("sandwich", 30);
  // var chainsaw = new Weapon("chainsaw", 25);

  // player.takeItem(shovel);
  // player.takeItem(sandwich);
  // player.takeItem(chainsaw);
  // player.discardItem(new Weapon("scythe", 21));
  // player.discardItem(shovel);
  // player.checkPack();
  // player.takeItem(shovel);
  // player.checkPack();

  // player.equippedWith();
  // player.useItem(chainsaw);
  // player.equippedWith();
  // player.checkPack();

  // player.useItem(shovel);
  // player.equippedWith();
  // player.checkPack();

  // player.health = 487;
  // console.log("Before health: " + player.health);
  // player.useItem(sandwich);
  // console.log("After health: " + player.health);
  // player.checkPack();
}
