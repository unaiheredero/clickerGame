const clickerGame = {
  points: 200000,
  clickPower: 1,
  auto: 0,
  autoUpgrades: [
    { ammount: 0, baseCost: 20, increment: 1, pointsPerSecond: 0 }, // Primera mejora automática
    { ammount: 0, baseCost: 50, increment: 2, pointsPerSecond: 0 }, // Segunda mejora automática
    { ammount: 0, baseCost: 100, increment: 5, pointsPerSecond: 0 }, // Tercera mejora automática
    { ammount: 0, baseCost: 200, increment: 10, pointsPerSecond: 0 }, // Cuarta mejora automática
    { ammount: 0, baseCost: 500, increment: 20, pointsPerSecond: 0 }, // Quinta mejora automática
  ],
  clickUpgradeCost: 10, // Costo inicial de la mejora de clic

  // Función para incrementar el contador manualmente
  incrementCounter() {
    this.points += this.clickPower;
    document.getElementById("counter").innerText = this.points;
    // Añadir clase de animación
    const clickButton = document.querySelector('.click-button');
    clickButton.classList.add('animate');

    // Quitar la clase después de la animación
    setTimeout(() => {
        clickButton.classList.remove('animate');
    }, 300); // Duración de la animación
  },

  // Aumenta el poder de clic
  setClickUpgrade() {
    if (this.points >= this.clickUpgradeCost) {
      this.clickPower++;
      this.points -= this.clickUpgradeCost;
      this.clickUpgradeCost = Math.floor(this.clickUpgradeCost * 1.15); // Aumenta el costo de la mejora de clic

      // Actualiza el texto en pantalla
      document.getElementById("mejoraID").innerText = this.clickPower;
      document.getElementById("counter").innerText = this.points; // Actualiza los puntos
      document.getElementById("clickUpgradeCost").innerText =
        this.clickUpgradeCost; // Actualiza el costo de la mejora de clic
    } else {
      console.log(
        "No tienes suficientes puntos para mejorar el poder de clic."
      );
    }
  },

  autoCounter() {
    this.points += this.auto;
    document.getElementById("counter").innerText = this.points;
    document.getElementById("pointsPerSecond").innerText = this.auto;
  },

  // Mejora de generación automática
  setAutoUpgrade(index) {
    const upgrade = this.autoUpgrades[index];

    function mostrarMejora(index) {
      const elemento = document.getElementById("mejora" + (index + 2));
      if (elemento) {
        elemento.style.display = "block";
      }
    }
    const currentCost = Math.floor(
      upgrade.baseCost * Math.pow(1.15, upgrade.pointsPerSecond)
    );

    if (this.points >= currentCost) {
      this.autoUpgrades[index].ammount++;
      document.getElementById("upgradeAmount"+(index+1)).innerHTML = this.autoUpgrades[index].ammount
      console.log(this.autoUpgrades[index].ammount)
      mostrarMejora(index);

      this.auto += upgrade.increment;
      this.points -= currentCost;

      // Incrementar el número de mejoras compradas
      upgrade.pointsPerSecond++;

      // Actualiza el texto en pantalla
      document.getElementById("pointsPerSecond").innerText = this.auto;
      document.getElementById("counter").innerText = this.points; // Actualiza los puntos

      // Actualiza el costo para la próxima mejora
      document.getElementById(`autoUpgradeCost${index}`).innerText = Math.floor(
        upgrade.baseCost * Math.pow(1.15, upgrade.pointsPerSecond)
      );
    } else {
    }
  },

  // Función para incrementar el contador automáticamente cada 1 segundo
  startAutoIncrement() {
    setInterval(() => {
      this.autoCounter();
    }, 1000);
  },
};

clickerGame.startAutoIncrement();
