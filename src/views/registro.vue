<template>
  <div class="Registro">
    <div><p>'</p></div>
    <form class="formulario">
      <h1>Registrarse</h1>
      <div class="input-contenedor">
        <i class="fas fa-envelope icon"></i>
        <input type="text" v-model="body.usuario" placeholder="Usuario" />
      </div>
      <div class="input-contenedor">
        <i class="fas fa-unlock icon"></i>
        <input type="password" v-model="body.password"  placeholder="Password" />
      </div>
      <div class="input-contenedor">
        <i class="fas fa-user icon"></i>
        <input type="text" v-model="body.nombre"  placeholder="Nombre(s)" />
      </div>
      <div class="input-contenedor">
        <i class="fas fa-user icon"></i>
        <input type="text" v-model="body.apellido_p"  placeholder="Apellido Paterno" />
      </div>
      <div class="input-contenedor">
        <i class="fas fa-user icon"></i>
        <input type="text" v-model="body.apellido_m"  placeholder="Apellido Materno" />
      </div>
      <div class="input-contenedor">
        <i class="fas fa-couch icon"></i>
        <input type="text" v-model="body.estadoCivil"  placeholder="Estado Civil" />
      </div>
      <div class="input-contenedor">
        <i class="fas fa-id-card icon"></i>
        <input type="text" v-model="body.nss"  placeholder="NSS" />
      </div>
      <div class="input-contenedor">
        <i class="fas fa-id-card icon"></i>
        <input type="text" v-model="body.curp"  placeholder="CURP" />
      </div>
      <div class="input-contenedor">
        <i class="fas fa-credit-card icon"></i>
        <input type="text" v-model="body.tipoCredito"  placeholder="Tipo de credito inmobiliario" />
      </div>
      <div class="input-contenedor">
        <i class="fas fa-calendar icon"></i>
        <input type="date" v-model="body.fecha_nacimiento"  placeholder="Fecha de nacimiento" />
      </div>
      <div class="input-contenedor">
        <i class="fas fa-phone icon"></i>
        <input type="text" v-model="body.num_telefono"  placeholder="Numero de Telefono" />
      </div>
      <button id="btn" @click="registrarse()" type="button">
          Registrarse 
      </button>
      <p>
        ¿Ya tienes cuenta?
        <router-link to="/InicioSesion" class="l">Inicia sesion</router-link>
      </p>
    </form>
  </div>
</template>

<script>
  
import data from "../services/sessionFunction.js"
  

export default {
  name: "registro",
  data(){
    return {
      body:{
        nombre:'',
        apellido_p:'',
        apellido_m:'',
        usuario:'',
        password:'',
        estadoCivil:'',
        nss:'',
        curp:'',
        tipoCredito:'',
        fecha_nacimiento:'',
        num_telefono:'',
      }
      
    }
  },
  components: {
  },
  methods:{
    async registrarse(){
      let respuesta = await data.registrarse(this.body);
      
      if(!respuesta.data.resultado){
        this.$alert(
          '',
          this.mostrarErrores(respuesta.data.msg),
          'warning'
        )
        return ;
        
        
      }
      
      this.$fire({
        title: "",
        text: "Se ha registrado",
        type: "success",
        timer: 3000
      }).then(r => {
        this.$router.push('/InicioSesion')

      });
      
      
      
    },
    mostrarErrores( obj ){
      let data = Object.keys(obj)
      
      let strings = data.map(
        function(x){
          
          return obj[x][0];
        }        
      )
      let string = '<p> ';
      for(let i=0 ; i < strings.length ; i++){
        string+=`${strings[i]} <br>`;
      }
      strings +='</p>'
      
      
      console.log(string)
     return string;
      
      
    }
  }
};
</script>

<style>
.Registro {
  background: url(../images/back.jpeg);
  background-size: cover;
  background-position: bottom;
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
input[type="date"],
input[type="password"] {
  font-size: 20px;
  width: 80%;
  padding: 10px;
  border: none;
  border-radius: 10px;
  
}
.input-contenedor {
  margin: 10px;
  margin-bottom: 15px;
  border: 1px solid #aaa;
  border-radius: 10px;
  
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
