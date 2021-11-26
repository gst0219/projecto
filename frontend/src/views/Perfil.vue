<template>
    <div class="perfil">
        <div class="citas">
            <h2>Mis Citas</h2>
            <div class="tabla">
                <b-table 
                bordered="bordered"
                borderless="borderless"
                :items="items"
                :fields="fields"
                head-variant="dark"
                table-variant="warning"></b-table>
            </div>
            
        </div>

        <div class="compras">
            <h2>Mis Compras</h2>
            <div class="tabla">
                <b-table 
                bordered="bordered"
                borderless="borderless"
                :items="items"
                :fields="fields"
                head-variant="dark"
                table-variant="warning"></b-table>
            </div>
        </div>

        
        <Footer/>
    </div>
    
</template>

<script>
import Footer from "../components/Footer.vue"
//import Tabla from '../components/Tabla.vue'
export default {
    name: "Perfil",
    components:{
        Footer,
        //Tabla
    },
    data() {
      return {
        items: [
          { Modelo: 1, Dia: '1 de noviembre de 2021', Hora: '9:00' },
          { Modelo: 4, Dia: '1 de noviembre de 2021', Hora: '13:00' },
          { Modelo: 2, Dia: '1 de noviembre de 2021', Hora: '9:00' },
          { Modelo: 1, Dia: '1 de noviembre de 2021 ', Hora: '17:00' }
        ]
      }
    }
}
</script>

<style>
.perfil {
    background-color: rgb(31, 30, 30);
}

h2{
    text-align: center;
    font-size: 30px;
    color: white;
    padding-top: 20px;
}
.tabla{
    margin-top: 30px;
    margin-left: 15%;
    width: 900px;
}
</style>
