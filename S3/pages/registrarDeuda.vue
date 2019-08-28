<template>
  <div class="container">
    
    <b-form @submit="addDeuda" v-if="show">
      <b-form-group
        id="input-group-entidad"
        label="Nombre de la entidad:"
        label-for="input-1"
        description="Ingrese el nombre de la entidad a la que le debe."
      >
        <b-form-input
          id="input-entidad"
          v-model="deudas.entidad"
          required
          placeholder="Pepito S.A.S"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="tipoDeuda" label="Tipo de deuda:" label-for="input-3">
        <b-form-select id="input-2" v-model="deudas.tipoDeuda" :options="tipoDeuda" required></b-form-select>
      </b-form-group>

      <b-form-group
        id="input-group-monto"
        label="Monto total:"
        label-for="input-3"
        description="Ingrese el total a pagar"
        v-if="deudas.tipoDeuda == 'a'"
      >
        <b-form-input
          id="input-monto"
          v-model="deudas.montoTotal"
          required
          type="number"
          placeholder="000"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-cuota"
        label="cuota:"
        label-for="input-4"
        description="Ingrese las cuotas mensuales a pagar"
      >
        <b-form-input
          id="input-cuota"
          v-model="deudas.cuota"
          required
          type="number"
          placeholder="000"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-fechaPago"
        label="fecha de pagos:"
        type="number"
        label-for="input-5"
        description="Ingrese el dia del mes a pagar"
      >
        <b-form-input id="input-cuota" v-model="deudas.fechaPago" required placeholder="d"></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="outline-primary">Registrar deuda</b-button>
      
    </b-form>
  </div>
</template>

<script>
export default {
  beforeMount() {},
  data() {
    return {
      deudas: {
        entidad: "",
        tipoDeuda: null,
        montoTotal: "",
        cuota: "",
        fechaPago: ""
      },
      tipoDeuda: [
        { value: null, text: "Please select an option" },
        { value: "a", text: "Deuda con monto definido" },
        { value: "b", text: "Deuda con monto no definido" }
      ],
      show: true,
      deuda: [{}]
    };
  },
  methods: {
    addDeuda() {
      let url = "http://localhost:81/deudas/";
      var data = {
        entidad: this.deudas.entidad,
        tipoDeuda: this.deudas.tipoDeuda,
        montoTotal: this.deudas.montoTotal,
        cuota: this.deudas.cuota,
        fechaPago: this.deudas.fechaPago
      };
      this.$axios
        .post(url, data)
        .then(response => {
          console.log(response);
          console.log("guardas la info");
      this.$router.push("/")
      
        })
        .catch(error => {
          console.log(error);
        });
    },
    ejemplo() {
      console.log("guardas la info");
      this.$router.push("/")
      
    }
  }
};
</script>

<style>
</style>