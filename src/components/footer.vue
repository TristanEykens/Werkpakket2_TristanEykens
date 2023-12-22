<script setup>
</script>
<template>
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous">
  <footer>
    <div class="footer-content">
      <h3>Rock'it!</h3>
      <p>rockit@info.be</p>
      <p>+32 471 58 09 23</p>
      <p>Ziegelsmeer 8, 3700 Tongeren</p>
      <ul class="socials">
        <li><a href="#"><i class="fa-brands fa-facebook"></i></a></li>
        <li><a href="#"><i class="fa-brands fa-twitter"></i></a></li>
        <li><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
        <li><a href="#"><i class="fa-brands fa-linkedin"></i></a></li>
      </ul>
    </div>
  </footer>
</template>

<style scoped>
footer {
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #372C2E;
  height: auto;
  width: 100%;
  padding-top: 40px;
  color: #fff;
}

footer .footer-content {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
}

footer .footer-content h3 {
  font-size: 2.1rem;
  font-weight: 500;
  text-transform: capitalize;
  line-height: 3rem;
}

footer .footer-content p {
  max-width: 500px;
  margin: 10px auto;
  line-height: 28px;
  font-size: 14px;
  color: #cacdd2;
}

footer .socials {
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem 0 3rem 0;
}

footer .socials li {
  margin: 0 10px;
}

footer .socials a {
  text-decoration: none;
  color: #fff;
}

footer .socials a i {
  font-size: 1.1rem;
  width: 20px;
  transition: color 0.4s ease;
}

footer .socials a:hover i {
  color: #ff8c00;
}

@media (max-width: 500px) {
  footer .footer-menu ul {
    display: flex;
    margin-top: 10px;
    margin-bottom: 20px;
  }
}
</style>