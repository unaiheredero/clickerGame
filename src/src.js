const clickerGame = {
    points: 0,
    clickPower: 1,
    auto: 0,
    upgradeCost: 10, // Costo inicial de la mejora
    autoUpgradeCost: 20, // Costo para aumentar la generación automática

    // Función para incrementar el contador manualmente
    incrementCounter() {
        this.points += this.clickPower;
        document.getElementById('counter').innerText = this.points;
    },

    autoCounter() {
        this.points += this.auto;
        document.getElementById('counter').innerText = this.points;
        document.getElementById('pointsPerSecond').innerText = this.auto;
    },

    setUpgrade() {
        if (this.points >= this.upgradeCost) {
            this.clickPower++;
            this.points -= this.upgradeCost; // Deduce puntos
            this.upgradeCost *= 1.5; // Aumenta el costo de la mejora
            
            // Actualiza el texto en pantalla
            document.getElementById('mejoraID').innerText = this.clickPower;
            document.getElementById('upgradeCost').innerText = Math.floor(this.upgradeCost);
            document.getElementById('counter').innerText = this.points; // Actualiza los puntos
        } else {
            console.log("No tienes suficientes puntos para mejorar.");
        }
    },

    // Función para incrementar el contador automáticamente cada 1 segundo
    startAutoIncrement() {
        setInterval(() => {
            this.autoCounter();
        }, 1000);
    },

    // Método para mejorar la generación automática
    setAutoUpgrade() {
        if (this.points >= this.autoUpgradeCost) {
            this.auto++;
            this.points -= this.autoUpgradeCost;
            this.autoUpgradeCost *= 1.5; // Aumenta el costo de la mejora
            
            // Actualiza el texto en pantalla
            document.getElementById('pointsPerSecond').innerText = this.auto;
            document.getElementById('counter').innerText = this.points; // Actualiza los puntos
            document.getElementById('autoUpgradeCost').innerText = Math.floor(this.autoUpgradeCost);
        } else {
            console.log("No tienes suficientes puntos para mejorar la generación automática.");
        }
    }
};

clickerGame.startAutoIncrement();
