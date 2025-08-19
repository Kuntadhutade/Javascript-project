
    let seconds = 0;
    let minutes = 0;
    let hours = 0;
    let timer = null;

   
    if (localStorage.getItem("time")) {
      [hours, minutes, seconds] = localStorage.getItem("time").split(":").map(Number);
      updateDisplay();
    }

    function updateDisplay() {
      document.getElementById("timeDisplay").textContent =
        `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }


    function startTimer() {
      timer = setInterval(() => {
        seconds++;
        if (seconds === 60) {
          seconds = 0;
          minutes++;
        }
        if (minutes === 60) {
          minutes = 0;
          hours++;
        }

        localStorage.setItem("time", `${hours}:${minutes}:${seconds}`);
        updateDisplay();
      }, 1000);
    }

    document.getElementById("startBtn").addEventListener("click", () => {
      startTimer();
      document.getElementById("startBtn").style.display = "none";
      document.getElementById("pauseBtn").style.display = "inline-block";
    });


    document.getElementById("pauseBtn").addEventListener("click", () => {
      clearInterval(timer);
      document.getElementById("startBtn").style.display = "inline-block";
      document.getElementById("pauseBtn").style.display = "none";
    });

    
    document.getElementById("resetBtn").addEventListener("click", () => {
      clearInterval(timer);


      seconds = 0;
      minutes = 0;
      hours = 0;
      
      localStorage.removeItem("time");
      updateDisplay();
      document.getElementById("startBtn").style.display = "inline-block";
      document.getElementById("pauseBtn").style.display = "none";
    });
  