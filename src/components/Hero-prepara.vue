<template>
    <section class="hero py-5 min-h-300px">
        <div class="py-lg-5 px-3">
            <div class="container text-center text-lg-start fit-content">

                <!-- Titolo -->
                <div class="fit-content user-select-none">
                    <h1 class="text-white">Preparati per la PA</h1>
                    <p class="fw-200 text-white mb-5">Un'occasione per prepararsi alla PA</p>
                </div>

                <!-- Form -->
                <div class="bg-white py-3 px-3 rounded-5 d-flex flex-column flex-lg-row fit-content d-block mx-auto">

                    <!-- Blocco 1 -->
                    <div class="d-flex px-5 my-3 my-lg-0">
                        <div class="d-flex">
                            <img class="d-block m-auto" src="/src/assets/icons/cerca-ente.svg" />
                        </div>
                        <div class="d-flex centra-10px">
                            <div class="form-group user-select-none">
                                <label for="formMainInput1">Ente</label>
                                <div id="autocompleteEnteWrapper" class="autocomplete-wrapper" ref="enteWrapper"></div>
                            </div>
                        </div>
                    </div>

                    <div class="linea mx-5 mx-lg-0"></div>

                    <!-- Blocco 2 -->
                    <div class="d-flex px-5 py-3 py-lg-0">
                        <div class="d-flex">
                            <img class="d-block m-auto" src="/src/assets/icons/cerca-dove.svg" />
                        </div>
                        <div class="d-flex centra-10px">
                            <div class="form-group user-select-none">
                                <label for="formMainInput2">Dove</label>
                                <div id="autocompleteDoveWrapper" class="autocomplete-wrapper" ref="doveWrapper"></div>
                            </div>
                        </div>
                    </div>

                    <div class="it-access-top-wrapper pt-2 pb-3 pt-lg-0 pb-lg-0">
                        <button
                            class="btn btn-primario btn-sm no-underline rounded-5 px-4 d-block d-lg-flex w-100 justify-content-center"
                            @click="handleSearch">
                            <svg class="icon icon icon-sm">
                                <use href="/bootstrap-italia/dist/svg/sprites.svg#it-search"></use>
                            </svg>
                            Cerca
                        </button>
                    </div>

                </div>

            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useCardStore } from '../stores/CardStore'

const CardStore = useCardStore()

const enteWrapper = ref(null)
const doveWrapper = ref(null)

let autocompleteEnteInstance = null
let autocompleteDoveInstance = null

onMounted(() => {
    // Inizializza autocomplete per Ente
    if (enteWrapper.value && window.bootstrap && window.bootstrap.SelectAutocomplete) {
        autocompleteEnteInstance = new window.bootstrap.SelectAutocomplete(enteWrapper.value, {
            id: 'formMainInput1',
            name: 'ente',
            source: CardStore.enteOptions,
            placeholder: 'Cerca per parola chiave'
        })

        // Listener per cambiamenti
        const enteInput = enteWrapper.value.querySelector('input')
        if (enteInput) {
            enteInput.addEventListener('input', (e) => {
                CardStore.setSelectedEnte(e.target.value)
            })
        }
    }

    // Inizializza autocomplete per Dove
    if (doveWrapper.value && window.bootstrap && window.bootstrap.SelectAutocomplete) {
        autocompleteDoveInstance = new window.bootstrap.SelectAutocomplete(doveWrapper.value, {
            id: 'formMainInput2',
            name: 'dove',
            source: CardStore.doveOptions,
            placeholder: 'Cerca per area geografica'
        })

        // Listener per cambiamenti
        const doveInput = doveWrapper.value.querySelector('input')
        if (doveInput) {
            doveInput.addEventListener('input', (e) => {
                CardStore.setSelectedDove(e.target.value)
            })
        }
    }
})

function handleSearch() {
    // La ricerca è già gestita automaticamente dallo store
    // Puoi aggiungere uno scroll verso i risultati
    const cardsSection = document.querySelector('.service-cards-section')
    if (cardsSection) {
        cardsSection.scrollIntoView({ behavior: 'smooth' })
    }
}

// Cambia placeholder per responsive
function updatePlaceholder() {
    const input1 = document.querySelector('#formMainInput1');
    const input2 = document.querySelector('#formMainInput2');

    if (!input1 || !input2) return;

    if (window.innerWidth <= 450) {
        input1.placeholder = 'Cerca..';
        input2.placeholder = 'Cerca..';
    } else {
        input1.placeholder = 'Cerca per area geografica';
        input2.placeholder = 'Cerca per parola chiave';
    }
}

// Esegui al load
updatePlaceholder();

// Esegui al resize
window.addEventListener('resize', updatePlaceholder);

</script>

<style scoped>
section.hero {
    background-image: url('/src/assets/img/banner-conosci-pa.svg');
    background-size: cover;
    background-repeat: no-repeat;
    box-shadow: 0px 0px 14px 8px #00000008;
}

.centra-10px {
    margin-top: 10px;
    margin-bottom: -10px;
}

.form-group {
    margin-bottom: 0rem;
    min-width: 210px;
}

.form-group label {
    margin-top: 18px;
}

.autocomplete-wrapper :deep(input) {
    border: solid 0px white !important;
    background-color: transparent;
    color: #6c757d;
}

.autocomplete-wrapper :deep(.form-control) {
    border: solid 0px white !important;
    background-color: transparent;
}

ul#formMainInput1__listbox {
    border: 1px solid hsl(0deg 0% 100%) !important;
}

.autocomplete__wrapper .autocomplete__menu {
    border: 1px solid hsl(0deg 0% 100%) !important;
}

button.btn {
    border: none;
    cursor: pointer;
}
</style>