<template>
  <div class="mt-4" id="app">
    

    <nuxt-link :to="'/registrarDeuda'">
      <b-button variant="primary" >Registrar deuda</b-button> 
    </nuxt-link>

     <nuxt-link :to="'/registrarTarjeta'">
      <b-button variant="primary" >Registrar tarjeta</b-button> 
    </nuxt-link>

    <b-button variant="success" @click="addCard">add</b-button>
 
    <b-row class="mt-4" >
      <b-col cols="12" md="2" v-for="(deuda,index) in cards" :key="index">
        <b-card 
          :title="deuda.name"
          img-src="https://picsum.photos/600/300/?image=25"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2"
        >
          <b-card-text>{{deuda.deuda}}</b-card-text>

          <b-button variant="danger" @click="deleteCard(index)">delete</b-button>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>

export default {
  data() {
    return {
      cards: [{name:"Esteban", deuda:"30.000.000"},{name:"coteroski",  deuda:"30.000.000"},{name:"Mauro", deuda:"100.000.000"}]
    };
  },
  methods: {
    addCard() {
      this.cards.push({})
    },
    deleteCard(index){
      this.cards.splice(index, 1);
    }
  }
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  text-align: center;
  padding-top: 40px;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

.cards {
  size: 20px;
}
</style>
