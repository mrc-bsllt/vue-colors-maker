var app = new Vue(
  {
    el: "#app",
    data: {
      items: [
        {
          red: null,
          green: null,
          blue: null,
          opacity: null,
          hexColor: null,
          active: false,
        },
        {
          red: null,
          green: null,
          blue: null,
          opacity: null,
          hexColor: null,
          active: false,
        },
        {
          red: null,
          green: null,
          blue: null,
          opacity: null,
          hexColor: null,
          active: false,
        },
        {
          red: null,
          green: null,
          blue: null,
          opacity: null,
          hexColor: null,
          active: false,
        }
      ]
    },
    methods: {
      randomNumber: function (min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
      },
      rgbToHex: function(index, r, g, b) {
        const hexColor = "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
        this.items[index].hexColor = hexColor;
      },
      toggleActiveClass: function(index) {
        this.items.forEach(
          (element) => {
            if (element != this.items[index]) {
              element.active = false;
            }
          }
        );

        this.items[index].active = !this.items[index].active;
      }
    },
    mounted() {

      // assegno ad ogni item un colore casuale
      this.items.forEach(
        (element) => {
          element.red = this.randomNumber(0, 255);
          element.green = this.randomNumber(0, 255);
          element.blue = this.randomNumber(0, 255);
          element.opacity = this.randomNumber(0, 100);
        }
      );
    } // fine mounted
  }
);
