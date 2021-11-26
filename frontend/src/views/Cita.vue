<template>
    <div class="reserva">
        <h1>Reserva tu Cita</h1>

        <div class="cita">
            <div class="calendario">
                <b-calendar  :date-format-options="{ year: 'numeric', month: 'long', day: '2-digit', weekday: 'long' }"
                    width="600px" 
                    locale="es"
                    label-help="Use las teclas del cursor para navegar por las fechas del calendario"
                    label-no-date-selected="Seleccione la fecha"
                    label-prev-month="Mes Anterior"
                    label-prev-year="Año Anterior"
                    label-next-month="Siguiente Mes"
                    label-next-year="Siguiente Año"
                    min="2021-11-01"
                    nav-button-variant="warning"
                    selected-variant="warning">
                </b-calendar>
            </div>
            <div class="hora">
                <b-dropdown text="Selecione la hora" 
                            block 
                            split  
                            split-variant="outline-warning" 
                            variant="warning"
                            class="m-2"
                            menu-class="w-100">
                    <b-dropdown-item>9:00</b-dropdown-item>
                    <b-dropdown-item>13:00</b-dropdown-item>
                    <b-dropdown-item>15:00</b-dropdown-item>
                </b-dropdown>
                <h3>Detalle de la cita:</h3>
                <p>
                    <br /> <span> Fecha: </span>25 de diciembre de 2021
                    <br /> <span> Hora: </span>9:00
                    <br /> <span> Modelo del inmueble: </span>Modelo 1
                </p>
                <div class="botones">
                    <button><router-link to="/Inmuebles" class="link">Reservar Cita</router-link></button>
                    <button><router-link to="/Inmuebles" class="link">Regresar</router-link></button>
                </div>
            </div>
        </div>
        <div class="consideraciones">
            <p>
                <br /><span>*Consideraciones a tomar en cuenta:</span>
                <br />*Se pueden crear citas hasta con 2 meses de anticipación
                <br />*Las vigencia de la cita es partir de 15 minutos antes y 15 minutos despues de la hora registrada
                <br />*Al presentarse a la cita será necesario que lleve comprobante su cita
                <br />*Al presentarse a la cita será obligatorio el uso de cubrebocas ademas de respetar las medidas sanitarias de covid-19
                <br />*Si por algun motivo desea cancelar o modificar la fecha de la cita debe hacerlo con un minimo de dos dias de anticipacion de lo contrrio no se podra
            </p>
        </div>
        <Footer class="footer"/>
    </div>
    
</template>

<script>
import Footer from '../components/Footer.vue'
export default {
    name: "Cita",
    components: {
        Footer,
    },

}
</script>

<style scoped>
.reserva{
    background-color: rgb(31, 30, 30);
    padding-top: 30px;
}
h1{
    color: white;
    text-align: center;
}
.cita{
    display:flex;
    
}
.calendario{
    margin-left: 200px;
    margin-top: 70px;
}
.hora{
    margin-left: 90px;
    margin-top: 70px;
    height: 200px;
    width: 300px;
}
h3{
    color: white;
    font-size: 25px;
    margin-top: 45px 
}
p{
    color: white;
    font-size: 16px;
    text-align: left;
    margin-top:-25px;
}
span{
  text-transform: uppercase;
  font-weight: 600;
  color: #a5975a;
}
.botones{
    margin-top: 20px;
    display: flex;
}
  
.botones button{
    font-weight: 600;
    border: none;
    width: 120px;
    height: 35px;
    color: #000;
    font-size: 14px;
    background:  #ffd700;
    border-radius: 5px;
    cursor: pointer;
    margin-left: 20px;
}
.consideraciones{
    margin-left: 50px;
    margin-top: 50px;
}
.consideraciones p{
    color: white;
    font-size: 12px;
}
.footer{
    margin-top: 60px;
}
</style>