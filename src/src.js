const clickerGame = {
  points: 0,
  clickPower: 1,
  auto: 0,
  autoUpgrades: [
      { baseCost: 20, increment: 1, purchased: 0 },  // Primera mejora automática
      { baseCost: 50, increment: 2, purchased: 0 },  // Segunda mejora automática
      { baseCost: 100, increment: 5, purchased: 0 }, // Tercera mejora automática
      { baseCost: 200, increment: 10, purchased: 0 }, // Cuarta mejora automática
      { baseCost: 500, increment: 20, purchased: 0 }  // Quinta mejora automática
  ],
  clickUpgradeCost: 10, // Costo inicial de la mejora de clic

  // Función para incrementar el contador manualmente
  incrementCounter() {
      this.points += this.clickPower;
      document.getElementById('counter').innerText = this.points;
  },

  // Aumenta el poder de clic
  setClickUpgrade() {
      if (this.points >= this.clickUpgradeCost) {
          this.clickPower++;
          this.points -= this.clickUpgradeCost; // Deduce puntos
          this.clickUpgradeCost = Math.floor(this.clickUpgradeCost * 1.5); // Aumenta el costo de la mejora de clic
          
          // Actualiza el texto en pantalla
          document.getElementById('mejoraID').innerText = this.clickPower;
          document.getElementById('counter').innerText = this.points; // Actualiza los puntos
          document.getElementById('clickUpgradeCost').innerText = this.clickUpgradeCost; // Actualiza el costo de la mejora de clic
      } else {
          console.log("No tienes suficientes puntos para mejorar el poder de clic.");
      }
  },

  autoCounter() {
      this.points += this.auto;
      document.getElementById('counter').innerText = this.points;
      document.getElementById('pointsPerSecond').innerText = this.auto;
  },

  // Mejora de generación automática
  setAutoUpgrade(index) {
      const upgrade = this.autoUpgrades[index];
      const currentCost = Math.floor(upgrade.baseCost * Math.pow(1.5, upgrade.purchased));

      if (this.points >= currentCost) {
          this.auto += upgrade.increment;
          this.points -= currentCost;

          // Incrementar el número de mejoras compradas
          upgrade.purchased++;

          // Actualiza el texto en pantalla
          document.getElementById('pointsPerSecond').innerText = this.auto;
          document.getElementById('counter').innerText = this.points; // Actualiza los puntos

          // Actualiza el costo para la próxima mejora
          document.getElementById(`autoUpgradeCost${index}`).innerText = Math.floor(upgrade.baseCost * Math.pow(1.5, upgrade.purchased));
      } else {
          console.log("No tienes suficientes puntos para mejorar la generación automática.");
      }
  },

  // Función para incrementar el contador automáticamente cada 1 segundo
  startAutoIncrement() {
      setInterval(() => {
          this.autoCounter();
      }, 1000);
  }
};

clickerGame.startAutoIncrement();
