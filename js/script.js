console.log(Vue);

Vue.config.devtools = true;

const app = new Vue({
  el: '#app',
  data: {
    toDos: [
      {
        text: 'Fare la spesa',
        done: false,
      },
      {
        text: 'Pagare assicurazione auto',
        done: false,
      }, 
      {
        text: 'Prenotare visita oculistica',
        done: false,
      }, 
      {
        text: 'Andare dal barbiere',
        done: false,
      }
    ],
    newItem: '',
    showInput: false,
    searchTerm: '',
  },
  methods: {
    removeItem(index) {
      this.toDos.splice(index, 1);
    },
    addItem() {
      if(this.newItem.trim() !== '') {
        const newItem = {
          text: this.newItem,
          done: false
        };
        this.toDos.push(newItem);
        this.toggleInput();
      } 
      else {
        this.newItem = '';
      }
    },
    toggleInput() {
      this.showInput = !this.showInput;
      this.newItem = '';
    },
    showItem(itemText) {
      if(!this.searchTerm || this.searchTerm.trim() === '') {
        return true;
      }
      return itemText.toLowerCase().includes(this.searchTerm.trim().toLowerCase());
    },
    toggleChecked(index) {
      const updatedToDos = this.toDos.map((item, itemIndex) => {
        if(itemIndex === index) {
          item.done = !item.done;
        }
        return item;
      });
      this.toDos = updatedToDos;
    },
    isDone(index) {
      return this.toDos[index].done;
    }
  },
});