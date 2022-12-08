const vm = Vue.createApp({
  data() {
    return {
      firstName: "Risman",
      middleName: "",
      lastName: "Hidayatulloh",
      url: "https://www.google.com",
      raw_url:
        '<a href="https://www.google.com" target="_blank" rel="noopener noreferrer">Google</a>',
      age: "20",
    };
  },
  methods: {
    incrementAge() {
      this.age++;
    },
    decrementAge() {
      this.age--;
    },
    updateLastName(msg, event) {
      //console.log(msg);
      this.lastName = event.target.value;
    },
    updateMiddleName(event) {
      this.middleName = event.target.value;
    },
  },
  computed: {
    fullName() {
      console.log("Full name computed property methid was called!");

      return `${this.firstName} ${this.lastName.toUpperCase()}`;
    },
  },
  watch: {
    age(newValue, oldValue) {
      setTimeout(() => {
        this.age = 20;
      }, 3000);
    },
  },
}).mount("#app");

// setTimeout(() => {
//   vm.lastName = "Hidayatulloh, S.Kom";
// }, 2000);

// Vue.createApp({
//   data() {
//     return {
//       firstName: "R",
//       lastName: "H, S.Kom",
//     };
//   },
// }).mount("#app2");
