<template>
  <div class="acerca">
    <h1 class="encabezado">Domus Plataforma web de venta de inmuebles</h1>
    <div class="c">
      <div class="mision">
        <div class="content">
          <div>
            <img src="../images/render.jpg" alt="mision" class="render" />
          </div>
          <div>
            <h2>Mision</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat
            </p>
          </div>
        </div>
      </div>

      <div class="vision">
        <div class="content">
          <div>
            <h2>Vision</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat
            </p>
          </div>
          <div>
            <img src="../images/render2.jpg" alt="vision" class="render" />
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "AcercaDe",
  components: {
  },
};
</script>

<style>
.acerca {
  align-items: center;
  background-color: rgb(31, 30, 30);
}

.encabezado {
  text-align: center;
  color: white;
  padding-top: 40px;
}

.c {
  margin-left: 400px;
}

.content {
  display: flex;
}

.mision {
  justify-items: center;
}

.vision {
  margin-top: 30px;
  justify-items: center;
}

.vision p {
  color: rgb(112, 112, 112);
  margin-right: 70px;
  font-size: 10px;
  width: 250px;
  text-align: left;
}

.vision h2 {
  text-align: left;
  color: #ffd700;
}

.mision p {
  color: rgb(112, 112, 112);
  margin-left: 70px;
  font-size: 10px;
  width: 250px;
  text-align: left;
}

.mision h2 {
  margin-left: 70px;
  text-align: left;
  color: #ffd700;
}

.render {
  width: 250px;
  height: auto;
}
</style>
