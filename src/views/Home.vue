<script setup>
// Componente TestataNew da '/src/components/TestataNew.vue'
import TestataNew from '../components/TestataNew.vue'
import Hero from '../components/Hero.vue'
import Cards0 from '../components/ServiceCards0.vue'
import FooterComponents from '../components/Footer.vue'
</script>

<template>
  <div>
    <!-- Importo il componente TestataNew -->
    <TestataNew />

    <!-- Importo il componente Hero -->
    <Hero />

    <section class="container mx-auto py-5 overflow-hidden">
      <div class="row py-5">
        <!-- Importo il componente Cards0 -->
        <Cards0 />
      </div>
    </section>
  </div>
  <footer>
    <!-- Importo il componente FooterComponents -->
    <FooterComponents />
  </footer>
</template>