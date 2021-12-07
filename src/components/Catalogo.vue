<template>
  <div class="catalogo">
      <Casa  v-for="inmueble,index of data" :index="index+1 " :title="inmueble.modelo" :key="inmueble.id" :id='inmueble.id'/>    
    </div>
</template>

<script>
import data from "../services/inmueblesFunction.js"
import Casa from "./Casa.vue";
export default {
  name: "Catalogo",
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
.catalogo {
  padding: 10em;
  display: flex;
  align-content: flex-end;
}
</style>