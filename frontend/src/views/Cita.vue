<template>
  <div class="reserva">
    <h1>Reserva tu Cita</h1>

    <div class="cita">
      <div class="calendario">
        <b-calendar
          :date-format-options="{
            year: 'numeric',
            month: 'long',
            day: '2-digit',
            weekday: 'long',
          }"
          width="600px"
          locale="es"
          label-help="Use las teclas del cursor para navegar por las fechas del calendario"
          label-no-date-selected="Seleccione la fecha"
          label-prev-month="Mes Anterior"
          label-prev-year="Año Anterior"
          label-next-month="Siguiente Mes"
          label-next-year="Siguiente Año"
          :min="fechaMin"
          nav-button-variant="warning"
          selected-variant="warning"
          v-model='fechaCita'
        >
        </b-calendar>
      </div>
      <div class="hora">
        <label for="promotor" class="text-white">Seleccione Promotor</label>
        <select id="promotor" v-model="idpromotor" class="select-form" >
          <option  :value="promotor.id" v-for="promotor of promotores" :key="promotor.id" >{{ `${promotor.nombre} ${promotor.apellido_p} ${promotor.apellido_m}`}}</option>
        </select>
        
        <label for="promotor"  class="text-white">Seleccione hora</label>
        <select name="hora" v-model="hora" id="hora" class="select-form">
          <option value="9:00">
            9:00
          </option>
          <option value="13:00">
            13:00
          </option>
          <option value="15:00">
            15:00
          </option>
        </select>
        
        <h3>Detalle de la cita:</h3>
        <p>
          <br />
          <span> Fecha: </span> {{fechaCita}} <br />
          <span> Hora: </span> {{ hora }}<br />
          <span> Modelo del inmueble: </span>Modelo 1
        </p>
        <div class="botones">
          <button @click="reservarCita()">
               Reservar Cita
          </button>
          <button>
            <router-link to="/Inmuebles" class="link">Regresar</router-link>
          </button>
        </div>
      </div>
    </div>
    <div class="consideraciones">
      <p>
        <br /><span>*Consideraciones a tomar en cuenta:</span> <br />*Se pueden
        crear citas hasta con 2 meses de anticipación <br />*Las vigencia de la
        cita es partir de 15 minutos antes y 15 minutos despues de la hora
        registrada <br />*Al presentarse a la cita será necesario que lleve
        comprobante su cita <br />*Al presentarse a la cita será obligatorio el
        uso de cubrebocas ademas de respetar las medidas sanitarias de covid-19
        <br />*Si por algun motivo desea cancelar o modificar la fecha de la
        cita debe hacerlo con un minimo de dos dias de anticipacion de lo
        contrrio no se podra
      </p>
    </div>
  </div>
</template>

<script>
import data from "../services/citaFunction.js";

export default {
  name: "Cita",
  components: {
  },
  data(){
    return {
      promotores: [],
      idpromotor : 0,
      hora : '',
      fechaCita:'',
      fechaMin :''
    }
  },
  methods:{
    async reservarCita(){
      console.log(this.fechaCita)
      if(this.idpromotor === 0){
        this.$alert(
          '',
          'Seleccione un promotor',
          'warning'
        )
        
        return ;
      }else if (this.hora === '') {
        this.$alert(
          '',
          'Seleccione una hora',
          'warning'
        )
        
        return ;
        
      }else if ( this.fechaCita ==''){
        this.$alert(
          '',
          'Seleccione una fecha',
          'warning'
        )
      }
      
      let usuario = this.$session.get('usuario');
      let respuesta = await data.reservarCita( this.$route.params.idCita,this.fechaCita,this.hora,this.idpromotor,usuario);
      if(!respuesta.data.resultado){
        this.$alert(
          '',
          respuesta.data.msg,
          'warning'
        )
        return ;
      }
      
      this.$alert(
        '',
        respuesta.data.msg,
        'success'
      )
      
      this.$router.push('/Perfil');
      
      
        
        
    }
  },
  async created(){
    let respuesta = await data.cargarPromotores( );
    let currentDate = new Date()
    let cDay = currentDate.getDate()
    let cMonth = currentDate.getMonth() + 1
    let cYear = currentDate.getFullYear()
    this.fechaMin =`${cYear}-${cMonth}-${cDay}`;
    this.promotores = respuesta.data;
    
    if(!this.$session.exists()){
        this.$session.destroy();
        this.$router.push('/');
    }
  }
};
</script>

<style scoped>
  
.select-form{
  display:   flex ;
  width: 100%;
  height: 2.3em;
  background-color:#ffd700; 
  color: rgb(31, 30, 30);
  text-align: center;
  border-radius: .5rem;
  
}

.reserva {
  background-color: rgb(31, 30, 30);
  padding-top: 30px;
}
h1 {
  color: white;
  text-align: center;
}
.cita {
  display: flex;
}
.calendario {
  margin-left: 200px;
  margin-top: 70px;
}
.hora {
  margin-left: 90px;
  margin-top: 70px;
  height: 200px;
  width: 300px;
}
h3 {
  color: white;
  font-size: 25px;
  margin-top: 45px;
}
p {
  color: white;
  font-size: 16px;
  text-align: left;
  margin-top: -25px;
}
span {
  text-transform: uppercase;
  font-weight: 600;
  color: #a5975a;
}
.botones {
  margin-top: 20px;
  display: flex;
}

.botones button {
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
.consideraciones {
  margin-left: 50px;
  margin-top: 50px;
}
.consideraciones p {
  color: white;
  font-size: 12px;
}
.footer {
  margin-top: 60px;
}
</style>
