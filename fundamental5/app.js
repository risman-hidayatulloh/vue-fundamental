let vm = Vue.createApp({
  data() {
    return {
      people: [
        { name: "John", message: "Hello" },
        { name: "Jane", message: "Hi" },
        { name: "Joe", message: "How are you?" },
      ],
    };
  },
  methods: {
    move() {
      const first = this.people.shift();

      this.people.push(first);
    },
  },
}).mount("#app");
