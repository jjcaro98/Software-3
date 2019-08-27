<template>
  <div>
    <b-container>
      <b-form @submit="addTarjeta" v-if="show">
        <b-form-group id="input-group-numTarjeta" label="Numero:" label-for="input-1">
          <b-form-input
            id="input-numTarjeta"
            type="number"
            v-model="tarjetas.numero"
            required
            placeholder="XXXX-XXXX-XXXX-XXXX"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-franquicia" label="franquicia" label-for="input-2">
          <b-form-select
            id="input-franquicia"
            v-model="tarjetas.franquicias"
            :options="franquicias"
            required
          ></b-form-select>
        </b-form-group>

        <b-form-group id="input-group-fechaExp" label="Fecha de expiracion:" label-for="input-3">
          <b-form-input
            id="input-fechaExp"
            v-model="tarjetas.fechaExp"
            required
            type="text"
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

        <b-button type="submit" variant="success">Submit</b-button>
      </b-form>
    </b-container>
  </div>
</template>

<script>
export default {
  beforeMount() {},
  data() {
    return {
      tarjetas: {
        numero: "",
        franquicias: null,
        fechaExp: "",
        codigoSeguridad: ""
      },
      franquicias: [
        { value: "visa", text: "Visa" },
        { value: "masterCard", text: "MasterCard" }
      ],
      show: true,
      tarjetas: [{}]
    };
  },
  methods: {
    addTarjeta() {
      var data = {
        numero: this.tarjetas.numero,
        franquicia: this.tarjetas.franquicias,
        fechaExpedicion: this.tarjetas.fechaExp,
        codigoSeguridad: this.tarjetas.codigoSeguridad
      };

      this.$axios
        .post("http://localhost:81/tarjetas/", data)
        .then(Response => {
          console.log(Response);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

