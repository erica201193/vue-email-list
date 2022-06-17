
const appVue = new Vue({
  el: "#app",

  data: {
      listaEmail: [],
  },

methods: {
  generate10Emails() {
    this.listaEmail = [];

    for (let i = 0; i < 10; i++) {
      axios
      .get("https://flynn.boolean.careers/exercises/api/random/mail")
      .then((axioResp) => {

        this.listaEmail.push(axioResp.data.response);
      });
    }
    console.log(listaEmail)
  }

}
});

