<template>
  <div id="app" style="display: flex; flex-direction: column;">
    <div class="nav"  >
      <img class="img" src="./images/logo3.png" />

      <div class="menu">
        <router-link to="/" class="li">Inicio</router-link>
        <router-link to="/Inmuebles" class="li">Inmuebles</router-link>
    
        <router-link to="/Perfil" class="li" v-if='this.$session.exists()'>Mis Citas</router-link>
        <router-link to="/AcercaDe" class="li">Acerca de</router-link>
      </div>
      <div class="botones">
          <router-link   v-show='!this.$session.exists()' to="/InicioSesion"  class="link">
            <button > 
              Iniciar sesión
            </button>
              
          </router-link>
      
          <router-link to="/registro" class="link">
                <button  v-if='!this.$session.exists()'>
                    Registrarse
                </button>
            </router-link>
        <button @click="cerrarSesion()"   v-show='this.$session.exists()'>
            Cerrar Sesión 
        </button>
      </div>
    </div>
    <router-view />
      
    <Footer class="footer2" ></Footer>
      
  </div>
  
  
</template>

<script>
  
  import Footer from "./components/Footer.vue";

  export default {
    name: "appVue",
    methods:{
      cerrarSesion() {
        this.$session.destroy()
        this.$router.push('/')
      }
    },
    components: {
      Footer
    },
  };
  </script>
  
<style>
#app {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  
}

.nav {
  width: 100%;
  z-index: 101;
  top: 0;
  justify-content: space-between;
  display: flex;
  align-items: center;
  align-self: start;
  margin-top: -10px;
  background-color: #000;
}

.nav .img {
  height: 60px;
  margin-left: 2rem;
}

.nav .menu {
  display: inline-block;
  text-align: center;
}

.nav .menu .li {
  display: inline-block;
  text-transform: uppercase;
  color: rgb(238, 220, 220);
  font-size: 10px;
  letter-spacing: 2px;
  font-weight: 300;
  padding: 10px;
  transition: all ease 0.5s;
  padding-top: 0px;
  text-decoration: none;
}

.nav .li:hover {
  background-color: #d2d43b;
  color: black;
}

.nav .botones {
  margin-right: 3rem;
}

.nav .botones button {
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

.footer2{
  align-self: flex-end ;
}
</style>
