console.log(Vue);

Vue.config.devtools = true;

const app = new Vue({
  el: '#app',
  data: {
    toDos: ['Fare la spesa', 'Pagare assicurazione auto', 'Prenotare visita oculistica', 'Andare dal barbiere'],

  },
  methods: {
    removeItem(index) {
      this.toDos.splice(index, 1);
    }
  },
});