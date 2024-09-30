const clickerGame = {


    points : 0,
    clickPower : 1,
    auto : 0,

    // Función para incrementar el contador manualmente
    incrementCounter() {
        console.log(this.points)
        this.points += this.clickPower;
        document.getElementById('counter').innerText = this.points;
    },

    autoCounter(){
        this.points += this.auto;
        document.getElementById('counter').innerText = this.points;
        document.getElementById('pointsPerSecond').innerText = this.auto;
        console.log("entra")
    },

    setUpgrade(){
        this.clickPower++
        document.getElementById('mejoraID').innerText = this.clickPower;
    },

    // Función para incrementar el contador automáticamente cada 1 segundo
    startAutoIncrement() {
        setInterval(() => {
          this.autoCounter();
        }, 1000);
      }

    }

    clickerGame.startAutoIncrement();