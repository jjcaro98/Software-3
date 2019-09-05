<template>
  <div class="mt-4" id="app">
    <nuxt-link :to="'/registrarDeuda'">
      <b-button variant="outline-primary">Agregar Deuda</b-button>
    </nuxt-link>
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
          <b-badge href="#" variant="primary" v-b-modal.modal-1>Agrgar Tarjetas</b-badge>

          <b-modal id="modal-1" ref="my-modal" hide-footer title="APO">
            <div class="d-block text-center">
              <h3>Seleccionar tarjeta</h3>
            </div>
            <div v-for="(tarjeta,index) in tarjetas" :key="index">
              <b-button
                class="mt-3"
                variant="outline-primary"
                block
                @click="$bvModal.hide('modal-1'), addTarjetaInDeuda(deuda._id, tarjeta.numero)"
              >
                {{tarjeta.numero}}
                <b-badge variant="dark">{{tarjeta.franquicia}}</b-badge>
              </b-button>
            </div>
          </b-modal>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  beforeMount() {
    this.getAllRecords();
    this.getAllTarjetas();
  },
  data() {
    return {
      cards: [],
      tarjetas: []
    };
  },
  methods: {
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
    },
    restarMonto(id) {
      let url = `http://localhost:81/deudas/${id}`;
      this.$axios.put(url, id).then(response => {
        console.log(response);
      });
    },
    getAllTarjetas() {
      let url = `http://localhost:81/tarjetas/`;

      this.$axios.get(url).then(response => {
        if (response.data.error) {
          this.errorMessage = reponse.data.message;
        } else {
          app.user = response.data.tarjetas;
          this.tarjetas = response.data.tarjetas;
        }
        console.log(response.data.tarjetas);
        console.log(this.tarjetas);
      });
    },
    addTarjetaInDeuda(id, value) {
      let url = `http://localhost:81/deudas/${id}/${value}`;
      this.$axios.put(url, id, value).then(response => {
        console.log(response);
      });
    }
  }
};
</script>
<style>
@import url("../styles/main.scss");
</style>