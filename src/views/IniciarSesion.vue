<template>
  <div class="Registro">
    <div><p>'</p></div>
    <form class="formulario">
      <h1>Iniciar Sesión</h1>
      <div class="input-contenedor">
        <i class="fas fa-envelope icon"></i>
        <input type="text" placeholder="Correo electronico" v-model='user' />
      </div>
      <div class="input-contenedor">
        <i class="fas fa-unlock icon"></i>
        <input type="password" placeholder="Contraseña" v-model='pass' />
      </div>
      <div class="ErrorSession">
        <p>{{ msgError}} </p>
      </div>
      <button id="btn" @click="iniciarSesion()" type="button">
       Iniciar Sesión 
      </button>
      <p>
        ¿No tienes cuenta?

        <router-link to="/registro" class="l">Registrarse</router-link>
      </p>
    </form>
  </div>
</template>
<script>
 import data from "../services/sessionFunction.js";
export default {
  name: "InicioSesion",
  data(){
    return{
      user : '',
      pass : '' ,
      msgError : ''
    } 
  },
  components: {
  },
  methods: {
    async iniciarSesion() {
      let result = await data.IniciarSesion(this.user,this.pass);
      console.log(result.data)
      
      if(result.data.resultado){
        this.$session.start();
        this.$session.set('usuario',result.data.usuario)
        
        this.$router.push('/Perfil');
        
      }else{
        this.msgError = "Hubo un error con su usuario o contraseña, intentelo de nuevo"
      }
        
    },
  },
};
</script>

<style>
  
.ErrorSession {
  color: #8F3A3AE8 ;
  display: flex;
  justify-content: center;
  
}
.Registro {
  background: url(../images/back.jpeg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.contenedor {
  padding: 10px;
}
.formulario {
  background: #fff;
  padding: 3px;
}
h1 {
  text-align: center;
  color: #1a2537;
  font-size: 40px;
}
input[type="text"],
input[type="password"] {
  font-size: 20px;
  width: 80%;
  padding: 10px;
  border: none;
}
.input-contenedor {
  margin-bottom: 15px;
  border: 1px solid #aaa;
}
.icon {
  min-width: 50px;
  text-align: center;
  color: #999;
}

#btn {
  border: none;
  width: 100%;
  height: 50px;
  color: white;
  font-size: 20px;
  background-color: #ffd700;
  border-radius: 5px;
  cursor: pointer;
  margin: 0;
}
#btn:hover {
  background: cadetblue;
}
p {
  text-align: center;
}
.l {
  text-decoration: none;
  color: #ffd700;
  font-weight: 600;
}
.l:hover {
  color: cadetblue;
}

@media (min-width: 78px) {
  .formulario {
    margin: auto;
    width: 500px;
    border-radius: 2%;
    margin-top: 30px;
  }
}
</style>
