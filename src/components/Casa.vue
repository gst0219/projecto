<template>
  <div class="casa">
    <img src="../images/casa4.jpeg" alt="casa" class="imagen" />
    <div class="text">
      <h3>{{ index }}</h3>
      <h4>{{ title }}</h4>
      <button>
        <router-link :to="'/CasaMuestra/'+id" class="link">Leer Mas...</router-link>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Casa",
  data(){
    return {
      url  :''
    }
  },
  props:[
    'title',
    'index',
    'id'
    
  ],
  computed(){
    
  }
   
  
};
</script>

<style>
.casa {
  width: 24.83%;
  height: auto;
  opacity: 1;
  transition: 0.5s ease;
  backface-visibility: hidden;
}

.imagen {
  width: 100%;
  height: auto;
}

.text {
  opacity: 0;
  text-align: left;
  position: absolute;
  transform: translate(10%, -110%);
}

.text h3 {
  color: #ffd700;
  font-size: 40px;
  margin-bottom: 0;
}

.text h4 {
  color: white;
  font-size: 20px;
  margin-top: 0;
}

.text button {
  font-weight: 600;
  border: 1px solid black;
  width: 120px;
  height: 35px;
  color: #000;
  font-size: 14px;
  background: #ffd700;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 30px;
}

.casa:hover img {
  opacity: 0.5;
}

.casa:hover .text {
  opacity: 1;
}

.link {
  text-decoration: none;
  color: rgb(0, 0, 0);
}
</style>
