<template>
    <div class="inmuebles">
        <h1 class="encabezado">Catalogo de Inmuebles</h1>
        <div class="filtrar">
            <nav class="navegacion">
                <ul id="menu">
                    <li><a>Dimensión
                        <ul class="submenu">
                            <li><a>40 m2</a></li>
                            <li><a>80 m2</a></li>
                            <li><a>120 m2</a></li>
                            <li><a>150 m2</a></li>
                            </ul>
                    </a></li>
                    <li><a>Precio
                        <ul class="submenu precio">
                            <li><a>menos de $400,000</a></li>
                            <li><a>$400,000- $600,000</a></li>
                            <li><a>$600,000 - $800,000</a></li>
                            <li><a>$800,000 - $1,000,000</a></li>
                            <li><a>mas de $1,000,00</a></li>
                        </ul>
                    </a></li>
                    <li><a>Zona
                        <ul class="submenu">
                            <li><a>Norte</a></li>
                            <li><a>Centro</a></li>
                            <li><a>Sur</a></li>
                        </ul>
                    </a></li>
                    <li><a>Habitaciones
                        <ul class="submenu">
                            <li><a>Dos</a></li>
                            <li><a>Tres</a></li>
                            <li><a>Cuatro</a></li>
                        </ul>
                    </a></li>
                    <li><a>Esquina
                        <ul class="submenu">
                            <li><a>Si</a></li>
                            <li><a>No</a></li>
                        </ul>
                    </a></li>
                </ul>
            </nav>
        </div>
        <div class="catalogo">
            <Casa/>
            <Casa/>
            <Casa/>
            <Casa/>
            <Casa/>
            <Casa/>
            <Casa/>
            <Casa/>
        </div>
        
        <Footer class="footer"/>
    </div>
</template>

<script>
import Footer from '../components/Footer.vue'
import Casa from '../components/Casa.vue'
export default {
    name: "Inmuebles",
    components: {
        Footer,
        Casa
    },
}
</script>

<style>
.inmuebles{
    background-color: rgb(31, 30, 30);
}

.encabezado{
    color: white;
    text-align: center;
}

.filtrar{
    margin-top:50px;
}

.navegacion{
    width: 600px;
	margin: 15px auto;
    background: #000;
    border-radius: 5px;
}

.navegacion ul{
	list-style: none;
}

#menu  li{
	position: relative;
	display: inline-block;
}

#menu  li  a{
	display: block;
	padding: 15px 20px;
	color: #fff;
	text-decoration: none;
}

#menu li a:hover{
	color: #ffd700;
	transition: all .3s;
}

/* Submenu*/

.submenu{
	position: absolute;
	background: #333333;
	visibility: hidden;
	opacity: 0;
    transition: opacity 1.5s;
}

.precio{
	position: absolute;
	background: #333333;
	width: 250%;
	visibility: hidden;
	opacity: 0;
    transition: opacity 1.5s;
}

.submenu li a{
	display: block;
	color: #fff;
  text-decoration: none;
  text-align: center;
}

#menu li:hover .submenu{
	visibility: visible;
	opacity: 1;
}

.catalogo{
    padding: 0;
    margin-top: 80px;
    display: flex;
    flex-wrap: wrap;
}

.footer{
    margin-top: 60px;
}
</style>