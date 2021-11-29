<template>
  <div class="perfil">
    <div class="citas">
      <h2>Mis Citas</h2>
      <div class="tabla">
        <table class="table colorTable" >
          <thead>
            <tr>
              <th> Modelo</th>
              <th> Fecha</th>
              <th> Hora</th>
              <th> Promotor</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="cita of citas" :key="cita.id">
              <td> {{ cita.inmueble.modelo}}</td>
              <td> {{ cita.fecha_solicitada}}</td>
              <td> {{ cita.hora}}</td>
              <td> {{ `${cita.promotor.nombre} ${cita.promotor.apellido_p} ${cita.promotor.apellido_m}  `}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    
  </div>
  
</template>

<script>
import data from "../services/citaFunction.js";

//import Tabla from '../components/Tabla.vue'
export default {
  name: "Perfil",
  components: {
    //Tabla
  },
  data() {
    return {
      citas : [
        
      ],
     
    };
  },
  async created(){
    
    let usuario = this.$session.get('usuario');
    
    let citas = await data.getCitas(usuario);
    
    this.citas = citas.data;
    if(!this.$session.exists()){
        this.$session.destroy();
        this.$router.push('/');
    }
  }
};
</script>

<style>
.perfil {
  background-color: rgb(31, 30, 30);
}

h2 {
  text-align: center;
  font-size: 30px;
  color: white;
  padding-top: 20px;
}
.tabla {
  display: flex;
  align-self: center;
  margin-top: 30px;
  width: 900px;
}

.citas{
  display: flex;
  align-content: center;
  justify-content: center;
  flex-direction: column;
}

.colorTable{
  background-color:#f3f3a6e8;
}

table td {
  border: solid 2px  #1c1d1ce5;;
  width: 50px; 
  height: 50px;}
  
  table th {
  border: solid #1c1d1ce5;
  width: 50px; 
  height: 50px;}

</style>
