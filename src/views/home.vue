<script setup>
import cardStyleHot from '@/components/popularcardComponent.vue'
</script>

<template>
  <div class="Titel_div">
    <table>
      <tr>
        <td class="Title">
          <h1>Rockin' it <br>with these rocks!</h1>
        </td>
        <td class="Title_Image">
          <a href="#"><img src="../assets/Amethyst.jpg" alt="Logo"></a>
        </td>
      </tr>
    </table>
  </div>
  <div id="IntroTekst">
    <p>
      Opvultekst is tekst die bepaalde kenmerken van een echte geschreven tekst deelt,<br>
      maar die willekeurig is of op een andere manier is gegenereerd.<br><br>
      Het kan worden gebruikt om een voorbeeld van lettertypen weer te geven,<br>
      tekst te genereren om te testen of om een spamfilter voor e-mail te vervalsen.
    </p>
  </div>
  <main>
    <h2>What are the rockin' rocks today?</h2>
    <card-style-hot></card-style-hot>
  </main>

</template>

<style scoped>

.Titel_div {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin-top: 100px;
  text-align: Left;
  font-size: 35px;
}

.Titel_div h1 {
  color: white;
  padding-left: 250px;
}

.Titel_div img {
  width: 70%;
  padding-left: 250px;
  padding-top: 50px;
}

#IntroTekst{
  padding-left: 19%;
  color: white;
}

h2 {
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  font-weight: bold;
}

</style>