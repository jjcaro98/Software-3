<template>
  <div class="container">
    <b-form @submit="addTarjeta" v-if="show">
      <b-form-group
        id="input-group-numTarjeta"
        label="Numero:"
        label-for="input-1"
        >
        <b-form-input
          id="input-numTarjeta"
          type="number"
          v-model="tarjetas.numero"
          required
          placeholder="XXXX-XXXX-XXXX-XXXX"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-franquicia" label="franquicia" label-for="input-2">
        <b-form-select id="input-franquicia" v-model="tarjetas.franquicia" :options="franquicias" required></b-form-select>
      </b-form-group>

      <b-form-group
        id="input-group-fechaExp"
        label="Fecha de expiracion:"
        label-for="input-3"
      >
        <b-form-input
          id="input-fechaExp"
          v-model="tarjetas.fechaExp"
          required
          type="number"
          placeholder="mm/aa"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-codigoSeguridad"
        label="Codigo de seguridad:"
        label-for="input-4"
        description="Ingrese el codigo de seguridad que se encuntra en la aprte de atras de la tarjeta"
      >
        <b-form-input
          id="input-codigoSeguridad"
          v-model="tarjetas.codigoSeguridad"
          required
          type="number"
          placeholder="000"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tarjetas: {
        numero: "",
        franquicias: null,
        fechaExp: "",
        codigoSeguridad: "",
      },
      franquicias: [
        { value: "v", text: "Visa" },
        { value: "m", text: "MasterCard" }
      ],
      show: true,
      tarjetas: [{}]
    };
  },
  methods: {
    addDeuda() {
      this.tarjetas.push({
        numTarjeta: this.tarjetas.numero,
        franquicias: this.tarjetas.franquicias,
        fechaExp: this.tarjetas.fechaExp,
        codigoSeguridad: this.tarjetas.codigoSeguridad
      });
    }
  }
};
</script>

<style>
</style>