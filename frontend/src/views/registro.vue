<template>
    <div class="Registro">
        <div><p>'</p></div>
        <form class="formulario">
            <h1>Registrarse</h1>
            <div class="input-contenedor">
                <i class="fas fa-envelope icon"></i>
                <input type="text" placeholder="Nombre(s)"/>
            </div>
            <div class="input-contenedor">
                <i class="fas fa-unlock icon"></i>
                <input type="text" placeholder="Apellido Paterno"/>
            </div>
            <div class="input-contenedor">
                <i class="fas fa-unlock icon"></i>
                <input type="text" placeholder="Apellido Materno"/>
            </div>
            <div class="input-contenedor">
                <i class="fas fa-unlock icon"></i>
                <input type="text" placeholder="Genero"/>
            </div>
            <div class="input-contenedor">
                <i class="fas fa-unlock icon"></i>
                <input type="text" placeholder="Estado Civil"/>
            </div>
            <div class="input-contenedor">
                <i class="fas fa-unlock icon"></i>
                <input type="text" placeholder="NSS"/>
            </div>
            <div class="input-contenedor">
                <i class="fas fa-unlock icon"></i>
                <input type="text" placeholder="CURP"/>
            </div>
            <div class="input-contenedor">
                <i class="fas fa-unlock icon"></i>
                <input type="text" placeholder="Tipo de credito inmobiliario"/>
            </div>
            <div class="input-contenedor">
                <i class="fas fa-unlock icon"></i>
                <input type="text" placeholder="Fecha de nacimiento"/>
            </div>
            <div class="input-contenedor">
                <i class="fas fa-unlock icon"></i>
                <input type="text" placeholder="Numero de Telefono"/>
            </div>
            <button id="btn"><router-link to="/" class="link">Registrarse</router-link></button>
            <p>¿Ya tienes cuenta? <router-link to="/InicioSesion" class="l">Inicia sesion</router-link></p>
        </form>
        <Footer class="footer"/>
    </div>
</template>

<script>
import Footer from '../components/Footer.vue'
export default {
    name: "registro",
    components: {
        Footer,
    },
}
</script>

<style>
.Registro{
    background: url(../images/pexels-photo-731082.jpeg);
    background-size: cover;
    background-position: bottom; 
    background-repeat: no-repeat;
}

.contenedor{
    padding: 10px;
    
}
.formulario{
    background: #fff;
    padding: 3px;
}
h1{
    text-align: center;
    color: #1a2537;
    font-size: 40px;
}
input[type="text"],
input[type="password"]{
    font-size: 20px;
    width: 80%;
    padding: 10px;
    border: none;
}
.input-contenedor{
    margin-bottom: 15px;
    border: 1px solid #aaa;
}
.icon{
    min-width: 50px;
    text-align: center;
    color: #999;
}

#btn{
    border: none;
    width: 100%;
    height: 50px;
    color: white;
    font-size: 20px;
    background-color:#ffd700;
    border-radius: 5px;
    cursor: pointer;
    margin: 0;
}
#btn:hover{
    background: cadetblue;
}
p{
    text-align: center;
}
.l{
    text-decoration: none;
      color: #ffd700;
    font-weight: 600;
}
.l:hover{
     color: cadetblue;
}

@media(min-width:78px)
{
    .formulario{
        margin: auto;
        width: 500px;
        border-radius: 2%;
        margin-top: 30px;
    }
}

</style>