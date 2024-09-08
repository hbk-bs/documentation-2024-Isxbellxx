document.addEventListener("DOMContentLoaded", () => {
  let dark = false;  // Variable, um den Zustand zu speichern

  setInterval(() => {
      document.body.style.backgroundColor = dark
          ? "black"
          : Math.random() > 0.4
          ? "#ff6347"
          : "white";

      dark = !dark;

      document.querySelector("h1").style.color = dark
          ? Math.random() > 0.6
          ? "white"
          : "black"
          : "#ff6347";

      document.title = dark
          ? Math.random() > 0.5
          ? "huh?"
          : ":)"
          : Math.random() < 0.6
          ? "hihihihoi"
          : "hahahaha";
  }, 1000);
});

