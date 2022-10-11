(function () {
    const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;
  
    const countDown = new Date("Sat, 22 Oct 2022 17:15:00 GMT").getTime(),
      x = setInterval(function () {
        const now = new Date().getTime(),
          distance = countDown - now;
          (document.getElementById("days").innerText = "En " + Math.floor(distance / day) + " días "),
          (document.getElementById("hours").innerText = Math.floor((distance % day) / hour) + " horas "),
          (document.getElementById("minutes").innerText = Math.floor((distance % hour) / minute) + " minutos "),
          (document.getElementById("seconds").innerText = "y " + Math.floor((distance % minute) / second) + " segundos");
      }, 1000);
  })();
  