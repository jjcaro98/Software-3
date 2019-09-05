<template>

  <div id="app" class="nose">
    
    <nuxt-link :to="'/Tarjetas/registrarTarjeta'"><b-button variant="outline-primary">Agregar tarjeta</b-button></nuxt-link>

    <b-card no-body class="overflow-hidden" style="max-width: 540px;" v-for="(tarjeta,index) in card" :key="index">
      <b-row no-gutters >
        <b-col cols="10" md="6"  v-if="tarjeta.franquicia == 'visa'">
          <b-card-img
            src="https://upload.wikimedia.org/wikipedia/commons/a/ac/Old_Visa_Logo.svg"
            class="rounded-0"
            
          ></b-card-img>
        </b-col>
        <b-col cols="10" md="6"  v-else>
          <b-card-img
            src="https://media.wired.com/photos/5926dea77034dc5f91bece36/master/w_582,c_limit/Mastercard3-1.jpg"
            class="rounded-0"
            
          ></b-card-img>
        </b-col>
        <b-col cols="10" md="6">
          <b-card-body :title="tarjeta.numero">
            
            <b-card-text>{{tarjeta.fechaExpedicion  }}</b-card-text>
            <b-card-text>{{tarjeta._id}}</b-card-text>
            <b-badge href="#" variant="danger" @click="deleteCard(index, tarjeta._id)">delete</b-badge>
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
export default {
  beforeMount() {
    this.getAllRecords();
    
  },
  data() {
    return {
      card: []
    };
  },
  methods: {
    getAllRecords() {
      this.$axios.get("http://localhost:81/tarjetas/").then(response => {
        console.log(response);
        //v-for="(tarjeta,index) in card" :key="index"
        //https://media.wired.com/photos/5926dea77034dc5f91bece36/master/w_582,c_limit/Mastercard3-1.jpg
        if (response.data.error) {
          this.errorMessage = reponse.data.message;
        } else {
          app.user = response.data.tarjetas;
          this.card = response.data.tarjetas;
        }
      });
    },
    deleteCard(index, id) {
      let url = `http://localhost:81/tarjetas/${id}`;

      this.$axios
        .delete(url, id)
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        });
      this.card.splice(index, 1);
    }
  }
};
</script>

<style>
  @import url("../../styles/main.scss");
</style>