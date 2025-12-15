

<p align="center">
  <a href="#"><img src="https://github.com/Robert0Falconi/pubblica-amministrazione/blob/main/src/assets/loghi/LogoOrientaPA.svg" alt="Orienta PA" width="200">
  </a>
</p>
<p align="center">
    <em>Orienta PA</em>
</p>
<p align="center">
<a href="#"><img src="https://img.shields.io/badge/version-1.0-blue" alt="Version"></a>
<a href="#"><img src="https://img.shields.io/badge/license-CC%20BY%204.0-green" alt="License"></a>
<a href="#"><img src="https://img.shields.io/badge/last_update-2025-red" alt="Last update"></a>
</p>

---

FAC-SIMILE di un'applicazione web per la ricerca e l'esplorazione delle opportunità di lavoro nella Pubblica Amministrazione italiana, realizzata a fini didattici.

**Nota**: Questo progetto è un esempio dimostrativo e non rappresenta un'applicazione ufficiale della Pubblica Amministrazione italiana. Il progetto è anche online su https://www.falconigrafica.it/vue/

## 📋 Descrizione

**Orienta PA** è una piattaforma che permette agli utenti di:
- Cercare enti della PA per nome o parola chiave
- Filtrare le opportunità per area geografica
- Visualizzare le posizioni aperte in ogni ente
- Esplorare ministeri, agenzie, comuni e altre istituzioni pubbliche

## 🚀 Tecnologie Utilizzate

- **Vue 3** - Framework JavaScript progressivo
- **Vite** - Build tool veloce e moderno
- **Pinia** - State management per Vue 3
- **Vue Router** - Routing ufficiale per Vue.js
- **Bootstrap Italia** - Design system per la PA italiana
- **Docker** - Containerizzazione dell'applicazione
- **Nginx** - Web server per il deployment

## 📦 Requisiti

- Node.js 20 o superiore
- npm
- Docker (opzionale, per deployment)

## 🛠️ Installazione

1. Clona il repository:
```bash
git clone https://github.com/Robert0Falconi/pubblica-amministrazione.git
cd pubblica-amministrazione
```

2. Installa le dipendenze:
```bash
npm install
```

3. Avvia il server di sviluppo:
```bash
npm run dev
```

L'applicazione sarà disponibile su `http://localhost:5173`

## 📜 Script Disponibili

- `npm run dev` - Avvia il server di sviluppo con hot-reload
- `npm run build` - Crea la build di produzione
- `npm run preview` - Anteprima della build di produzione
- `npm run copy-assets` - Copia gli asset di Bootstrap Italia

## 🏗️ Struttura del Progetto

```
pubblica-amministrazione/
├── public/                 # Asset statici
│   └── bootstrap-italia/   # Design system PA
├── src/
│   ├── assets/            # Immagini, loghi, icone
│   ├── components/        # Componenti Vue
│   │   ├── TestataNew.vue    # Header dell'applicazione
│   │   ├── Hero.vue          # Sezione hero con form di ricerca
│   │   ├── ServiceCards0.vue # Lista delle card PA
│   │   └── Footer.vue        # Footer dell'applicazione
│   ├── stores/            # Store Pinia
│   │   └── CardStore.js      # Gestione stato cards e filtri
│   ├── views/             # Pagine dell'applicazione
│   │   └── HomeView.vue      # Pagina principale
│   ├── router/            # Configurazione routing
│   ├── App.vue            # Componente root
│   ├── main.js            # Entry point
│   └── style.css          # Stili globali
├── scripts/               # Script di utilità
│   └── copy-assets.js     # Copia asset Bootstrap Italia
├── Dockerfile             # Configurazione Docker
├── docker-compose.yml     # Orchestrazione container
├── nginx.conf             # Configurazione Nginx
├── vite.config.js         # Configurazione Vite
└── package.json           # Dipendenze e script
```

## 🎨 Funzionalità Principali

### Ricerca e Filtri
- **Autocomplete intelligente** per ente e località
- **Filtri dinamici** con rimozione rapida
- **Ordinamento A-Z/Z-A** dei risultati
- **Contatore risultati** in tempo reale

### Visualizzazione
- **Card responsive** per ogni ente PA
- **Badge** per keywords e categorie
- **Indicatore posizioni aperte** per ente
- **Animazioni hover** per migliore UX

### State Management
Lo store Pinia gestisce:
- Lista completa degli enti PA
- Filtri attivi (ente e località)
- Opzioni autocomplete dinamiche
- Logica di filtering e ordinamento

## 🐳 Deploy con Docker

### Build dell'immagine
```bash
docker build -t pubblica-amministrazione .
```

### Avvio del container
```bash
docker run -p 80:80 pubblica-amministrazione
```

### Utilizzo di Docker Compose
```bash
docker compose up -d
```

L'applicazione sarà disponibile su `http://localhost`

## 🔧 Configurazione

### Vite Configuration
Il progetto utilizza Vite come build tool con configurazione personalizzata per:
- Plugin Vue 3
- Alias per import semplificati
- Ottimizzazione build per Bootstrap Italia

### Nginx Configuration
Il server Nginx è configurato per:
- Servire l'applicazione SPA
- Gestire il routing client-side
- Cache ottimizzata per asset statici

## 📊 Dati

I dati degli enti PA sono gestiti tramite lo store Pinia (`CardStore.js`). Attualmente include:
- 9 enti PA di esempio
- Informazioni su ministeri, agenzie, comuni e regioni
- Location e keywords per ogni ente
- Numero di posizioni aperte

## 🎯 Roadmap

- [ ] Integrazione con API backend per dati reali
- [ ] Sistema di autenticazione utenti
- [ ] Funzionalità di candidatura
- [ ] Dashboard personalizzata
- [ ] Notifiche per nuove posizioni
- [ ] Filtri avanzati (tipologia contratto, area professionale)

## 🤝 Contribuire

I contributi sono benvenuti! Per contribuire:

1. Fai un fork del progetto
2. Crea un branch per la tua feature (`git checkout -b feature/AmazingFeature`)
3. Commit le tue modifiche (`git commit -m 'Add some AmazingFeature'`)
4. Push al branch (`git push origin feature/AmazingFeature`)
5. Apri una Pull Request

## 📝 Licenza

Questo progetto è distribuito sotto licenza MIT. Vedi il file `LICENSE` per maggiori dettagli.

## 👥 Autori

- **Robert0Falconi** - [GitHub](https://github.com/Robert0Falconi)

## 🙏 Riconoscimenti

- [Bootstrap Italia](https://italia.github.io/bootstrap-italia/) - Design system per la PA italiana
- [Vue.js](https://vuejs.org/) - Framework JavaScript
- [Vite](https://vitejs.dev/) - Build tool