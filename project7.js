var promptSync = require('prompt-sync');
var Enemy = /** @class */ (function () {
    function Enemy(maxHealth, attackDamage) {
        this.maxHealth = maxHealth;
        this.health = maxHealth;
        this.attackDamage = attackDamage;
    }
    Enemy.prototype.takeDamage = function (damage) {
        this.health -= damage;
        if (this.health < 0) {
            this.health = 0;
        }
    };
    Enemy.prototype.isAlive = function () {
        return this.health > 0;
    };
    Enemy.prototype.attack = function (player) {
        player.takeDamage(this.attackDamage);
        console.log("Enemy attacks! Player health: ".concat(player.health));
    };
    return Enemy;
}());
var Player = /** @class */ (function () {
    function Player(maxHealth, attackDamage) {
        this.maxHealth = maxHealth;
        this.health = maxHealth;
        this.attackDamage = attackDamage;
        this.numHealthPotions = 3;
    }
    Player.prototype.takeDamage = function (damage) {
        this.health -= damage;
        if (this.health < 0) {
            this.health = 0;
        }
    };
    Player.prototype.useHealthPotion = function () {
        if (this.numHealthPotions > 0) {
            this.health += 20; // Restore 20 health points
            if (this.health > this.maxHealth) {
                this.health = this.maxHealth;
            }
            this.numHealthPotions--;
            console.log("Used a health potion. Current health: ".concat(this.health));
        }
        else {
            console.log("No health potions left!");
        }
    };
    Player.prototype.isAlive = function () {
        return this.health > 0;
    };
    Player.prototype.attack = function (enemy) {
        enemy.takeDamage(this.attackDamage);
        console.log("Player attacks! Enemy health: ".concat(enemy.health));
    };
    return Player;
}());
function gameAdventure() {
    var prompt = promptSync();
    var player = new Player(100, 20);
    console.log("You are on an adventure! Explore the world and face enemies.");
    while (player.isAlive()) {
        var encounter = Math.random();
        if (encounter < 0.3) {
            var enemy = new Enemy(Math.floor(Math.random() * 50) + 50, Math.floor(Math.random() * 10) + 10);
            console.log("You encountered an enemy! Enemy health: ".concat(enemy.health));
            while (player.isAlive() && enemy.isAlive()) {
                var action = prompt("Do you want to attack (A) or use a health potion (H)? ");
                if (action.toUpperCase() === 'A') {
                    player.attack(enemy);
                }
                else if (action.toUpperCase() === 'H') {
                    player.useHealthPotion();
                }
                else {
                    console.log("Invalid action. Please choose 'A' to attack or 'H' to use a health potion.");
                }
                if (enemy.isAlive()) {
                    enemy.attack(player);
                }
            }
            if (!player.isAlive()) {
                console.log("You were defeated. Game over!");
                break;
            }
            else {
                console.log("You defeated the enemy! Continue your adventure.");
            }
        }
        else {
            console.log("You explored the area and found nothing. Continue your adventure.");
        }
    }
    console.log("Game Over");
}
// Start the game
gameAdventure();
