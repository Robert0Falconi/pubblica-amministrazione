<template>
  <div class="container-fluid service-cards-section">

    <!-- Header con risultati e ordinamento -->
    <div class="row d-flex mb-4 justify-content-center justify-content-sm-between px-3 align-items-center">

      <!-- Numero Cards e Filtri Attivi -->
      <div class="col-6">
        <p class="mb-0 text-center-mobile">
          <span class="fw-700 h5">{{ sortedCards.length }}</span> risultati
        </p>
        <div v-if="hasActiveFilters" class="mt-2 mx-auto align-items-center justify-content-center d-mobile-flex">
          <span class="badge bg-blu-light me-sm-2 mb-sm-1 px-3 py-sm-1 mb-2 rounded-5 mx-2" v-if="CardStore.selectedEnte">
            Ente: {{ CardStore.selectedEnte }}
            <button type="button" class="btn-close btn-close-black ms-1" aria-label="Rimuovi filtro"
              @click="CardStore.setSelectedEnte('')" style="font-size: 0.7rem;"></button>
          </span>
          <span class="badge bg-blu-light me-sm-2 mb-sm-1 px-3 py-sm-1 mb-2 rounded-5 mx-2" v-if="CardStore.selectedDove">
            Dove: {{ CardStore.selectedDove }}
            <button type="button" class="btn-close btn-close-black ms-1" aria-label="Rimuovi filtro"
              @click="CardStore.setSelectedDove('')" style="font-size: 0.7rem;"></button>
          </span>
        </div>
      </div>

      <!-- Ordinamento Cards -->
      <div class="center-mobile text-sm-start rounded-5 bg-blu-light fit-content me-2">
        <label class="ms-2">Ordina per:</label>
        <select v-model="sortOrder" class="form-select d-inline-block w-auto">
          <option value="asc">A-Z</option>
          <option value="desc">Z-A</option>
        </select>
      </div>
    </div>

    <!-- Messaggio se nessun risultato -->
    <div v-if="sortedCards.length === 0" class="" role="alert">
      <!-- <h4 class="alert-heading">Nessun risultato trovato</h4>
      <p>Non ci sono PA che corrispondono ai criteri di ricerca selezionati.</p>
      <hr>
      <p class="mb-0">
        <button class="btn btn-primary" @click="CardStore.resetFilters()">
          Rimuovi filtri
        </button>
      </p> -->
    </div>

    <!-- Cards -->
    <div v-else class="row justify-content-center">
      <div v-for="card in sortedCards" :key="card.id" class="col-12 col-md-6 col-lg-4">
        <div class="p-3">
          <div class="service-card rounded-4 shadow-light d-flex flex-column justify-space-between overflow-hidden">

            <!-- Info scheda -->
            <div class="d-flex flex-column px-5 pt-5">
              <div class="row align-items-center mb-3 mx-0">
                <div class="col-lg-3 col-2 px-0">
                  <img class="w-100" src="/src/assets/icons/icons8-museo-96.png"></img>
                </div>
                <div class="col-lg-9 col-10">
                  <h6 class="mb-0">{{ card.title }}</h6>
                </div>
              </div>
              <p class="mb-2">
                <svg class="icon icon-sm me-1">
                  <use href="/bootstrap-italia/dist/svg/sprites.svg#it-map-marker-circle"></use>
                </svg>
                {{ card.location }}
              </p>

              <!-- Keyword -->
              <div class="mt-3">
                <span v-for="keyword in card.keywords" :key="keyword"
                  class="badge bg-blu-light me-sm-2 mb-sm-1 px-3 py-sm-1 mb-2 rounded-5 mx-2">
                  {{ keyword }}
                </span>
              </div>

            </div>

            <!-- Posizioni aperte -->
            <div class="d-flex px-5 py-4 fw-700">
              <span class="pe-2 mb-2">{{ card.posizioni }}</span>Posizioni aperte
            </div>

            <!-- Vai alla scheda -->
            <div class="bg-viola d-block px-5 py-4">

              <a class="btn-secondario rounded-5 nav-link no-underline px-3 py-1 text-center" href="#">
                <span class="fw-500">
                  Vai alla scheda
                </span>
              </a>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useCardStore } from '../stores/CardStore'

const CardStore = useCardStore()
const sortOrder = ref('asc')

// Computed per verificare se ci sono filtri attivi
const hasActiveFilters = computed(() => {
  return CardStore.selectedEnte || CardStore.selectedDove
})

// Computed per cards ordinate
const sortedCards = computed(() => {
  const filtered = CardStore.filteredCards
  const sorted = [...filtered].sort((a, b) => {
    if (sortOrder.value === 'asc') {
      return a.title.localeCompare(b.title)
    } else {
      return b.title.localeCompare(a.title)
    }
  })
  return sorted
})
</script>

<style scoped>
select.form-select.d-inline-block.w-auto {
  background-color: transparent !important;
  font-weight: 600;
  cursor: pointer;
}

.service-card {
  transition: transform 0.2s, box-shadow 0.2s;
  height: 100%;
  border: 1px solid #e9ecef;
}

.service-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1) !important;
}

.badge {
  font-size: 0.75rem;
  font-weight: 500;
}

.btn-close {
  padding: 0;
  width: 0.5em;
  height: 0.5em;
}
</style>