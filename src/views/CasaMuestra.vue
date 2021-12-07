<template>
  <div class="CasaMuestra">
    <div class="container">
      <h1>Modelo {{ inmueble.modelo}}</h1>
    </div>

    <div>
      <ul class="galeria">
        <li>
          <a href="#img1"><img :src="require(`../images/${inmueble.id}.jpeg`)" alt="img" /></a>
        </li>
        <li>
          <a href="#img2"><img :src="require(`../images/salacasa${inmueble.id}.jpg`)" alt="img" /></a>
        </li>
        <li>
          <a href="#img3"><img :src="require(`../images/cocinacasa${inmueble.id}.jpg`)" alt="img" /></a>
        </li>
        <li>
          <a href="#img4"><img :src="require(`../images/room1casa${inmueble.id}.jpg`)" alt="img" /></a>
        </li>
        <li>
          <a href="#img5"><img src="../images/bano1casa1.jpg" alt="img" /></a>
        </li>
        <li>
          <a href="#img6"><img :src="require(`../images/room2casa${inmueble.id}.jpg`)" alt="img" /></a>
        </li>
        <li>
          <a href="#img7"><img :src="require(`../images/room3casa${inmueble.id}.jpg`)" alt="img" /></a>
        </li>
        <li>
          <a href="#img8"><img src="../images/bano2casa1.jpg" alt="img" /></a>
        </li>
        <li>
          <a href="#img9"><img :src="require(`../images/escaleracasa${inmueble.id}.jpg`)" alt="img" /></a>
        </li>
        <li>
          <a href="#img10"><img :src="require(`../images/patiocasa${inmueble.id}.jpg`)" alt="img" /></a>
        </li>
      </ul>
    </div>

    <div class="contenido">
      <hr />
      <h2>Caracteristicas</h2>
      <p>
        - Superficie amplia de {{ inmueble.superficieplana}} m2  
        <br />
        - Acabados Modernos
        <br />
        - 1 planta 
        <br />- Sala/Comedor 
        <br />
        - Concina integral 
        <br />
        - {{ inmueble.habitaciones}} recamaras 
        <br />- {{ inmueble.banos }} baños 
        <br />- Patio/Area de lavado 
        <br />
        - Cochera sin techo para {{ inmueble.cochera}} autos
      </p>
      <hr />
      <h2>Amenidades</h2>
      <div class="iconos">
        <div class="icon">
          <i class="fas fa-shield-alt" id="i"></i>
          <h4>Seguridad</h4>
        </div>
        <div class="icon">
          <i class="fas fa-lock" id="i"></i>
          <h4>Circuito cerrado</h4>
        </div>
        <div class="icon">
          <i class="fas fa-tree" id="i"></i>
          <h4>Jardines</h4>
        </div>
        <div class="icon">
          <i class="fas fa-dumbbell" id="i"></i>
          <h4>Gimnasio</h4>
        </div>
        <div class="icon">
          <i class="fas fa-wifi" id="i"></i>
          <h4>Wifi/internet</h4>
        </div>
        <div class="icon">
          <i class="fas fa-dog" id="i"></i>
          <h4>Mascotas</h4>
        </div>
        <div class="icon">
          <i class="fas fa-child" id="i"></i>
          <h4>Area infantil</h4>
        </div>
        <div class="icon">
          <i class="fas fa-school" id="i"></i>
          <h4>Escuelas cercanas</h4>
        </div>
        <div class="icon">
          <i class="fas fa-utensils" id="i"></i>
          <h4>Restaurantes cercanos</h4>
        </div>
        <div class="icon">
          <i class="fas fa-shopping-cart" id="i"></i>
          <h4>Centros comerciales cercanos</h4>
        </div>
      </div>
      <hr />
      <h2>Descripcion</h2>
      <p>
        Tu nuevo Hogar Genera plusvalía Conoce tu nuevo Hogar, Fraccionamiento
        Vista Real lo tenemos todo a tan solo 10 min del centro de la ciudad y
        20 min de la salida norte. Una comunidad diseñada para ti y tu familia.
        Aquí encontraras: Áreas infantiles, Cancha de Futbol, Cancha de
        Basquetbol, Diamante de Béisbol, Ciclopista, Pet Park, Zona Comercial,
        Un Hogar sustentable que genera plusvalía…
      </p>
      <hr />
      <h2>Requisitos</h2>
      <p class="requisitos">
        <br />
        <span> Precio: </span> ${{ inmueble.valor }} pesos <br />
        <span> Forma de pago: </span>Efectivo/Credito infonavit/Credito bacario
        <br />
        <span> Estado del inmueble: </span>Terminado, listo para entregar <br />
        <span> Entrega disponible: </span>Entrega inmediata
      </p>
    </div>

    <div class="botones2">
      <button v-if='this.$session.exists()' >
        <router-link :to="'/Cita/' + this.$route.params.id" class="link">Reservar Cita</router-link>
      </button>
      <button  v-else  class="btn-disabled"  >
       Reservar Cita 
      </button>
      
      <button>
        <router-link to="/Inmuebles" class="link">Regresar</router-link>
      </button>
      <br>
      <p v-if='!this.$session.exists()' class="msgSession">Inicie sesión para activar esta opcion</p>
      
    </div>

    <div class="modal" id="img1">
      <h3>Exterior</h3>
      <div class="imagen">
        <a href="#img10">&#60;</a>
        <a href=""><img :src="require(`../images/${inmueble.id}.jpeg`)" alt="img" /></a>
        <a href="#img2"> > </a>
      </div>
      <a href="" class="cerrar">X</a>
    </div>

    <div class="modal" id="img2">
      <h3>Sala</h3>
      <div class="imagen">
        <a href="#img1">&#60;</a>
        <a href=""><img :src="require(`../images/salacasa${inmueble.id}.jpg`)" alt="img" /></a>
        <a href="#img3">></a>
      </div>
      <a href="" class="cerrar">X</a>
    </div>

    <div class="modal" id="img3">
      <h3>Cocina</h3>
      <div class="imagen">
        <a href="#img2">&#60;</a>
        <a href=""><img :src="require(`../images/cocinacasa${inmueble.id}.jpg`)" alt="img" /></a>
        <a href="#img4">></a>
      </div>
      <a href="" class="cerrar">X</a>
    </div>

    <div class="modal" id="img4">
      <h3>Recamara</h3>
      <div class="imagen">
        <a href="#img3">&#60;</a>
        <a href=""><img :src="require(`../images/room1casa${inmueble.id}.jpg`)" alt="img" /></a>
        <a href="#img5">></a>
      </div>
      <a href="" class="cerrar">X</a>
    </div>

    <div class="modal" id="img5">
      <h3>Baño</h3>
      <div class="imagen">
        <a href="#img4">&#60;</a>
        <a href=""><img src="../images/bano1casa1.jpg" alt="img" /></a>
        <a href="#img6">></a>
      </div>
      <a href="" class="cerrar">X</a>
    </div>

    <div class="modal" id="img6">
      <h3>Recamara</h3>
      <div class="imagen">
        <a href="#img5">&#60;</a>
        <a href=""><img :src="require(`../images/room2casa${inmueble.id}.jpg`)" alt="img" /></a>
        <a href="#img7">></a>
      </div>
      <a href="" class="cerrar">X</a>
    </div>

    <div class="modal" id="img7">
      <h3>Recamara</h3>
      <div class="imagen">
        <a href="#img6">&#60;</a>
        <a href=""><img :src="require(`../images/room3casa${inmueble.id}.jpg`)" alt="img" /></a>
        <a href="#img8">></a>
      </div>
      <a href="" class="cerrar">X</a>
    </div>

    <div class="modal" id="img8">
      <h3>Baño</h3>
      <div class="imagen">
        <a href="#img7">&#60;</a>
        <a href=""><img src="../images/bano2casa1.jpg" alt="img" /></a>
        <a href="#img9">></a>
      </div>
      <a href="" class="cerrar">X</a>
    </div>

    <div class="modal" id="img9">
      <h3>Escalera</h3>
      <div class="imagen">
        <a href="#img8">&#60;</a>
        <a href=""><img :src="require(`../images/escaleracasa${inmueble.id}.jpg`)" alt="img" /></a>
        <a href="#img10">></a>
      </div>
      <a href="" class="cerrar">X</a>
    </div>

    <div class="modal" id="img10">
      <h3>Patio</h3>
      <div class="imagen">
        <a href="#img9">&#60;</a>
        <a href=""><img :src="require(`../images/patiocasa${inmueble.id}.jpg`)" alt="img" /></a>
        <a href="#img1">></a>
      </div>
      <a href="" class="cerrar">X</a>
    </div>

  </div>
</template>

<script>
import data from "../services/inmueblesFunction.js"
 
 

export default {
  name: "CasaMuestra",
  data(){
    return {
      inmueble : {},
    }
  },
  components: {
  },
 
  
  async created(){
    let inmueble = await data.getInmueble( this.$route.params.id);
  
    this.inmueble = inmueble.data;
    
    console.log(this.inmueble)
   
  }
};
</script>

<style>
  
  
.CasaMuestra {
  background-color: rgb(31, 30, 30);
}

.container h1 {
  text-align: center;
  font-size: 36px;
  font-weight: 500;
  text-transform: uppercase;
  color: white;
  padding-top: 20px;
}

.contenido h2 {
  color: #ffd700;
  font-size: 30px;
  text-align: left;
  margin: 15px 60px;
}

.contenido p {
  color: white;
  font-size: 16px;
  text-align: left;
  margin: 15px 20px;
}

.contenido .iconos {
  width: 80%;
  margin: auto;
  list-style: none;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
}

.contenido .icon {
  width: 200px;
  height: 100px;
  text-align: center;
  transition: all 0.25s;
}

.contenido .icon h4 {
  font-weight: 600;
  color: white;
}

#i {
  font-size: 2rem;
  transition: color 0.4s ease;
  color: #ffd700;
}

.contenido .requisitos span {
  text-transform: uppercase;
  font-weight: 600;
  color: #a5975a;
}

.botones2 {
  margin-left: 3rem;
  margin-top: 3rem;
  margin-bottom: 5rem;
}

.botones2 button {
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

.galeria {
  width: 70%;
  margin: auto;
  list-style: none;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.galeria img {
  width: 150px;
  height: 100px;
}

.galeria li {
  margin: 5px;
}

.modal {
  display: none;
}

.modal:target {
  display: block;
  position: fixed;
  background: rgba(0, 0, 0, 0.8);
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.modal h3 {
  color: #fff;
  font-size: 30px;
  text-align: center;
  margin: 15px 0;
}

.imagen {
  width: 100%;
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.imagen a {
  color: #ffd700;
  font-size: 40px;
  text-decoration: none;
  margin: 0 10px;
}

.imagen a:nth-child(2) {
  margin: 0;
  height: 100%;
  flex-shrink: 2;
}

.imagen img {
  width: 650px;
  height: 90%;
  max-width: 100%;
  border: 7px solid;
  box-sizing: border-box;
}

.cerrar {
  display: block;
  background: #ffd700;
  width: 25px;
  height: 25px;
  margin: -50px auto;
  text-align: center;
  text-decoration: none;
  font-size: 25px;
  color: #000;
  padding: 5px;
  border-radius: 50%;
  line-height: 25px;
}

.btn-disabled{
  background-color: #878787 !important;
}
.msgSession{
  float: left ; color:#C4C4C4 ; margin-left: 1em;
}
</style>
