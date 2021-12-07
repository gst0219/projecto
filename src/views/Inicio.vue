<template>
  <div class="inicio">
    <div class="principal">
      <div class="titulo">
      <h1>DOMUS</h1>
      <p>La vida que mereces, ¡Tu nuevo estilo de vida comienza aqui!</p>
      <button id="boton">
        <router-link to="/Inmuebles" class="link">Comprar</router-link>
      </button>
    </div>
    </div>

    <div class="Info">
      <div class="textInfo">
        <h3 class="Titulo1">
          Un estilo de vida unico e innovador en tu ciudad
        </h3>

        <div class="bloques">
          <div class="bloque">
            <i class="fas fa-tree icon"></i>
            <div>
              <h4 class="bloque-titulo">Areas Verdes</h4>
              <p class="bloque-descripcion">
                Un espacio único, rodeado de naturaleza donde la tranquilidad
                fluye.
              </p>
            </div>
          </div>

          <div class="bloque">
            <i class="fas fa-user-shield icon"></i>
            <div>
              <h4 class="bloque-titulo">Seguridad</h4>
              <p class="bloque-descripcion">
                Acceso controlado y vigilancia las 24 horas del dia, los 7 dias
                de la semana, para ti y tu familia.
              </p>
            </div>
          </div>

          <div class="bloque">
            <i class="fas fa-map-marked-alt icon"></i>
            <div>
              <h4 class="bloque-titulo">Ubicacion privilegiada</h4>
              <p class="bloque-titulo">
                Ubicados en zona privilegiada de la ciudad, vías directas a
                diferentes puntos de la ciudad.
              </p>
            </div>
          </div>

          <div class="bloque">
            <i class="fas fa-pencil-alt icon"></i>
            <div>
              <h4 class="bloque-titulo">Diseños Unicos</h4>
              <p class="bloque-descripcion">
                Porque sabemos que cada familia tiene una esencia que los hace
                diferentes.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="image"></div>
    </div>

    <div class="Modelos">
      <div class="titulo2">
            <h2>Modelos Disponibles</h2> 
            <p>¡Un hogar a tu medida! Cada uno equipado para darle a tu familia un espacio ideal</p>
          </div>

          <Catalogo/>
    </div>

    <div class="ubicacion">
      <h3>Una de las mejores ubicaciones de tu ciudad</h3>
      <Map
        :latitude="24.778282"
        :longitude="-107.392545"
        :title="'Titulo Marcador'"
        class="map"
      />
    </div>

    <div class="frase">
      <p>
        Tu nuevo comienzo empieza hoy
        <br />Tu casa es nuestra prioridad, confía en los que saben <br />Te
        acompañamos en este viaje, de principio a fin.
      </p>
    </div>

  </div>
</template>

<script>
import Map from "../components/Map.vue";
import Catalogo from "../components/Catalogo.vue";


export default {
  name: "Inicio",
  
  components: {
    Map,
    Catalogo
  },
  beforeCreate(){
  }
};
</script>

<style>
.inicio {
  align-content: center;
 
}

.principal {
   background: url(../images/back.jpeg);
  background-size: cover;
  background-repeat: no-repeat;
  opacity: 1.1;
  height: 600px;
}

.titulo {
  padding-top: 140px;
  margin-left: 75px;
  width: 40%;
  text-align: center;
}

.titulo h1 {
  font-size: 150px;
  margin-bottom: 0;
  color: white;
}

.titulo p {
  font-size: 20px;
  color: black;
  margin-top: 0;
}

#boton {
  font-weight: 600;
  border: none;
  width: 120px;
  height: 35px;
  color: #000;
  font-size: 14px;
  background: #ffd700;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 20px;
}

.link {
  text-decoration: none;
  color: rgb(0, 0, 0);
}

.Modelos {
  background-color: rgb(31, 30, 30);
  text-align: center;
  margin-bottom: -150px;
}

.titulo2 {
  padding-bottom: -20px;
  padding-top: 30px;
}

.titulo2 h2 {
  color: #ffd700;
  font-size: 32px;
  margin-bottom: 0;
}

.titulo2 p {
  color: white;
  font-size: 14px;
  font-weight: 600;
  margin-top: 0;
}
.catalogo {
  margin-top: -150px;
  display: flex;
  flex-wrap: wrap;
}

.Info {
  display: flex;
}

.textInfo {
  width: 60%;
  background-color: #0a0a0a;
}

.Titulo1 {
  text-align: center;
  font-size: 30px;
  font-weight: 500;
  text-transform: uppercase;
  color: white;
  margin-left: 50px;
  padding-top: 40px;
  width: 700px;
}

.bloques {
  margin-left: 50px;
  margin-top: 75px;
  display: flex;
  flex-wrap: wrap;
  width: 80%;
  justify-content: center;
}

.bloque {
  width: 200px;
  margin-top: 0px;
  margin-left: 50px;
  display: flex;
}

.bloque h4 {
  font-weight: 600;
  color: #f8f6f6;
  margin-bottom: 0;
  width: 75%;
  padding-left: 20px;
  text-align: left;
}

.bloque p {
  margin-top: 0;
  font-size: 12px;
  color: #f8f6f6;
  width: 75%;
  padding-left: 20px;
  text-align: left;
}

.bloque .icon {
  width: 25%;
  padding-top: 20px;
  font-size: 3rem;
  color: #ffff40;
}

.image {
  width: 40%;
  background: url(../images/livingRoom.jpeg);
  background-size: cover;
  background-repeat: no-repeat;
}

.ubicacion {
  margin-top: -25px;
  background-color: #0a0a0a;
  width: 100%;
  margin-bottom: -32px;
  border: 1px solid black;
}

.ubicacion h3 {
  text-align: center;
  font-size: 30px;
  font-weight: 500;
  color: #fff;
  padding-top: 3rem;
}

.map {
  margin-left: 15rem;
  margin-top: 50px;
  margin-bottom: 70px;
}

.frase {
  background: url(../images/back.jpeg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

.frase p {
  text-align: center;
  font-size: 30px;
  font-weight: 600;
  color: #ffd700;
  line-height: 50px;
  margin-bottom: -0;
}
</style>
