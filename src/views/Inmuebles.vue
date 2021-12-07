<template>
  <div class="inmuebles">
    <div>
      <h1 class="encabezado">Catalogo de Inmuebles</h1>
    </div>
    <br><br>
    <Catalogo/>
  </div>
</template>

<script>
import Catalogo from "../components/Catalogo.vue";
export default {
  name: "Inmuebles",
  components: {
    Catalogo
  },
};
</script>

<style>
.inmuebles {
  background-color: rgb(31, 30, 30);
}

.encabezado {
  color: white;
  text-align: center;
}

.footer {
  margin-top: 60px;
}
</style>
