module.exports = {
    particles: {
        color: { value: "#ffffff" },
        line_linked: {
          color: "#ffffff",
          distance: 150,
          enable: true,
          opacity: 0.8,
          width: 1
        },
        move: {
          attract: { enable: false, rotateX: 600, rotateY: 1200 },
          bounce: false,
          direction: "none",
          enable: true,
          out_mode: "bounce",
          random: false,
          speed: 8,
          straight: false
        },
        number: { density: { enable: false, value_area: 800 }, value: 30 },
        opacity: {
          anim: { enable: true, opacity_min: 0.5, speed: 1, sync: false },
          random: false,
          value: 1
        },
        shape: {
          character: {
            fill: true,
            font: "Verdana",
            style: "",
            value: ["testo 1", "testo 2", "testo 3", "testo 4", "testo 5"],
            weight: "400"
          },
          image: {
            height: 100,
            replace_color: true,
            src: "images/github.svg",
            width: 100
          },
          polygon: { nb_sides: 5 },
          stroke: { color: "#ffffff", width: 1 },
          type: "char"
        },
        size: {
          anim: { enable: true, size_min: 10, speed: 10, sync: false },
          random: false,
          value: 10
        }
      },
  }
  