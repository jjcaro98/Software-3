<template>
  <div class="mt-4" id="app">
    <nuxt-link :to="'/registrarDeuda'"><b-button variant="outline-primary">Agregar Deuda</b-button></nuxt-link>
    <b-row class="mt-3">
      <b-col cols="10" md="3" v-for="(deuda,index) in cards" :key="index">
        <b-card
          :header="deuda.entidad"
          border-variant="info"
          header-bg-variant="info"
          header-text-variant="white"

        >
          <b-card-text>Monto total: {{deuda.montoTotal}}</b-card-text>
          <b-card-text>Cuota: {{deuda.cuota}}</b-card-text>
          <b-card-text>Proximo pago: {{deuda.fechaPago}}</b-card-text>
          <b-badge href="#" variant="danger" @click="deleteCard(index, deuda._id)">delete</b-badge>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  beforeMount() {
    this.getAllRecords();
  },
  data() {
    return {
      cards: [],
    };
  },
  methods: {
    addCard() {
      this.cards.push({});
    },
    deleteCard(index, id) {
      let url = `http://localhost:81/deudas/${id}`;

      this.$axios
        .delete(url, id)
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        });
      this.cards.splice(index, 1);
    },
    // getEndidad() {
    //   let url = `http://localhost:81/deudas/${this.entidad}`

    //   this.$axios
    //     .get(url)
    //     .then(response => {
    //       console.log(response.data);
    //       this.entidad = ""
    //       if (response.data.error) {
    //         this.errorMessage = reponse.data.message;
    //       } else {
    //         app.user = response.data.deudas
    //       }
    //     });
    // },
    getAllRecords() {
      let url = "http://localhost:81/deudas/";

      this.$axios.get(url).then(response => {
        // console.log(response.data.deudas);

        if (response.data.error) {
          this.errorMessage = reponse.data.message;
        } else {
          app.user = response.data.deudas;
          this.cards = response.data.deudas;
        }
      });
    }
  }
};
</script>
