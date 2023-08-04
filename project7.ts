var promptSync= require ('prompt-sync');

class Enemy {
  maxHealth: number;
  health: number;
  attackDamage: number;

  constructor(maxHealth: number, attackDamage: number) {
    this.maxHealth = maxHealth;
    this.health = maxHealth;
    this.attackDamage = attackDamage;
  }

  takeDamage(damage: number): void {
    this.health -= damage;
    if (this.health < 0) {
      this.health = 0;
    }
  }

  isAlive(): boolean {
    return this.health > 0;
  }

  attack(player: Player): void {
    player.takeDamage(this.attackDamage);
    console.log(`Enemy attacks! Player health: ${player.health}`);
  }
}

class Player {
  maxHealth: number;
  health: number;
  attackDamage: number;
  numHealthPotions: number;

  constructor(maxHealth: number, attackDamage: number) {
    this.maxHealth = maxHealth;
    this.health = maxHealth;
    this.attackDamage = attackDamage;
    this.numHealthPotions = 3;
  }

  takeDamage(damage: number): void {
    this.health -= damage;
    if (this.health < 0) {
      this.health = 0;
    }
  }

  useHealthPotion(): void {
    if (this.numHealthPotions > 0) {
      this.health += 20; // Restore 20 health points
      if (this.health > this.maxHealth) {
        this.health = this.maxHealth;
      }
      this.numHealthPotions--;
      console.log(`Used a health potion. Current health: ${this.health}`);
    } else {
      console.log("No health potions left!");
    }
  }

  isAlive(): boolean {
    return this.health > 0;
  }

  attack(enemy: Enemy): void {
    enemy.takeDamage(this.attackDamage);
    console.log(`Player attacks! Enemy health: ${enemy.health}`);
  }
}

function gameAdventure(): void {
  const prompt = promptSync();
  const player = new Player(100, 20);

  console.log("You are on an adventure! Explore the world and face enemies.");

  while (player.isAlive()) {
    const encounter = Math.random();

    if (encounter < 0.3) {
      const enemy = new Enemy(Math.floor(Math.random() * 50) + 50, Math.floor(Math.random() * 10) + 10);
      console.log(`You encountered an enemy! Enemy health: ${enemy.health}`);

      while (player.isAlive() && enemy.isAlive()) {
        const action = prompt("Do you want to attack (A) or use a health potion (H)? ");
        if (action.toUpperCase() === 'A') {
          player.attack(enemy);
        } else if (action.toUpperCase() === 'H') {
          player.useHealthPotion();
        } else {
          console.log("Invalid action. Please choose 'A' to attack or 'H' to use a health potion.");
        }

        if (enemy.isAlive()) {
          enemy.attack(player);
        }
      }

      if (!player.isAlive()) {
        console.log("You were defeated. Game over!");
        break;
      } else {
        console.log("You defeated the enemy! Continue your adventure.");
      }
    } else {
      console.log("You explored the area and found nothing. Continue your adventure.");
    }
  }

  console.log("Game Over");
}

gameAdventure();