<template>
  <div class="inmuebles">
    <div>
      <h1 class="encabezado">Catalogo de Inmuebles</h1>
    </div>
    <br><br>
    <div class="catalogo">
      <Casa  v-for="inmueble,index of data" :index="index+1 " :title="inmueble.modelo" :key="inmueble.id" :id='inmueble.id'/>    
    </div>

  </div>
</template>

<script>
import data from "../services/inmueblesFunction.js"
import Casa from "../components/Casa.vue";
export default {
  name: "Inmuebles",
  data(){
    return {
      data :[
       
      ],
      persist:[
        
      ]
    }
  },
  components: {
    Casa
  },
  methods:{
    filterPrice(limiteInf,limiteSup){
      this.data= this.persist;
      console.log("entra")
      this.data = this.data.filter(
        (inmueble)=>{
          console.log(limiteInf +' ' + limiteSup + ' ' + inmueble.valor)
          
          return 
           
            
        }
      )
      
    }
  },
  async beforeCreate(){
    let inmuebles = await data.getInmuebles();
  
    this.data = inmuebles.data;
    this.persist = this.data
    
  }
};
</script>

<style>
.inmuebles {
  background-color: rgb(31, 30, 30);
}

.encabezado {
  color: white;
  text-align: center;
}

.filtrar {
  margin-top: 50px;
}

.navegacion {
  width: 600px;
  margin: 15px auto;
  background: #000;
  border-radius: 5px;
}

.navegacion ul {
  list-style: none;
}

#menu li {
  position: relative;
  display: inline-block;
}

#menu li a {
  display: block;
  padding: 15px 20px;
  color: #fff;
  text-decoration: none;
}

#menu li a:hover {
  color: #ffd700;
  transition: all 0.3s;
}

/* Submenu*/

.submenu {
  position: absolute;
  background: #333333;
  visibility: hidden;
  opacity: 0;
  transition: opacity 1.5s;
}

.precio {
  position: absolute;
  background: #333333;
  width: 250%;
  visibility: hidden;
  opacity: 0;
  transition: opacity 1.5s;
}

.submenu li a {
  display: block;
  color: #fff;
  text-decoration: none;
  text-align: center;
}

#menu li:hover .submenu {
  visibility: visible;
  opacity: 1;
}

.catalogo {
  padding: 10em;
  display: flex;
  align-content: flex-end;
}

.footer {
  margin-top: 60px;
}
</style>
