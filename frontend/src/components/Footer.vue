<template>
  <div class="footer">
    <footer>
      <div class="footer-content">
        <div class="secciones">
          <div class="Domus">
            <h3>Domus</h3>
            <p>
              <br />
              <span> Direccion: </span>Cerro Salto #377 colonia lomalinda <br />
              <span> Correo Electronico: </span>domus@gmail.com <br />
              <span> Telefono de contacto: </span>(+55) 667 611 2352 <br />
              www.Domus.com.mx
            </p>
            <ul class="social">
              <li><i class="fab fa-facebook-square"></i></li>
              <li><i class="fab fa-twitter-square"></i></li>
              <li><i class="fab fa-instagram-square"></i></li>
              <li><i class="fab fa-google-plus-square"></i></li>
              <li><i class="fab fa-linkedin"></i></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p>
          Todos los derechos reservados &copy;2020 SICSA. diseñado por<span>
            Equipo 1</span
          >
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Footer",
  components: {},
};
</script>

<style>
.footer {
  bottom: 0;
  margin-top: 0;
  background: #000;
  height: auto;
  padding-top: 40px;
  color: #fff;
  width: 100%;
}

.secciones {
  display: flex;
}
.footer-content {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
}

.footer-content h3 {
  font-size: 1.8rem;
  font-weight: 400;
  text-transform: capitalize;
  line-height: 0.5rem;
}

.footer-content p {
  max-width: 500px;
  margin: 10px auto;
  line-height: 28px;
  font-size: 16px;
}

.footer-content p span {
  text-transform: uppercase;
  font-weight: 600;
  color: #fff;
}

.social {
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem 0 3rem 0;
}

.social li {
  margin: 0 10px;
}

.social a {
  text-decoration: none;
  color: #fff;
}

.social a i {
  font-size: 1.2rem;
  transition: color 0.4s ease;
}

.social a:hover i {
  color: #ffd700;
}

.footer-bottom {
  background: #ffd700;
  width: 100%;
  padding: 20px 0;
  text-align: center;
}

.footer-bottom p {
  font-size: 14px;
  word-spacing: 2px;
  text-transform: capitalize;
  color: #000;
}

.footer-bottom span {
  text-transform: uppercase;
  font-weight: 600;
  color: #000;
}
</style>
