<script setup>
// Componente TestataNew da '/src/components/TestataNew.vue'
import TestataNew from '../components/TestataNew.vue'
import FooterComponents from '../components/Footer.vue'
</script>

<template>
    <div>
        <!-- Importo il componente TestataNew -->
        <TestataNew />

        <section class="container mx-auto py-5 overflow-hidden">
            <div class="py-5">
                <!-- Contenuto della pagina -->
                <div class="page404 px-3">
                    <h1 class="display-1">404</h1>
                    <p>Ops! Sembra che questa pagina sia in coda per l’approvazione…<br>(o forse non è mai esistita.)</p>
                    <router-link class="btn btn-primario btn-sm no-underline rounded-5 px-4" to="/">Torna alla Home</router-link>

                </div>
            </div>
        </section>
    </div>
    <footer class="w-100 absolute-mobile-relative">
        <!-- Importo il componente FooterComponents -->
        <FooterComponents />
    </footer>
</template>
<script setup>
</script>

<style scoped>
.page404 {
    text-align: center;
    margin-top: 50px;
}
</style>