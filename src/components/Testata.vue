<template>
    <section id="testata" class="testata px-4">
        <div class="d-flex" style="justify-content: space-between">
            <!-- Logo -->
            <div class="d-flex">
                <img src="/src/assets/loghi/LogoOrientaPA.svg" alt="Logo" class="py-3 d-flex"
                    style="max-width: 250px" />
            </div>

            <!-- Menù di navigazione -->
            <div class="it-header-navbar-wrapper theme-light-desk d-flex">
                <div class="container-xxl d-flex">
                    <div class="row align-content-center">
                        <div class="col-12 px-0">
                            <!--start nav-->
                            <nav class="navbar navbar-expand-lg has-megamenu" aria-label="Navigazione principale">
                                <button class="custom-navbar-toggler" type="button" aria-controls="nav3"
                                    aria-label="Mostra/Nascondi la navigazione" data-bs-toggle="navbarcollapsible"
                                    data-bs-target="#nav3">
                                    <svg class="icon">
                                        <use href="/node_modules/bootstrap-italia/dist/svg/sprites.svg#it-burger"></use>
                                    </svg>
                                </button>
                                <div class="navbar-collapsable" id="nav3" tabindex="-1">
                                    <div class="close-div">
                                        <button class="btn close-menu" type="button">
                                            <span class="visually-hidden">Nascondi la navigazione</span>
                                            <svg class="icon">
                                                <use
                                                    href="/node_modules/bootstrap-italia/dist/svg/sprites.svg#it-close-big">
                                                </use>
                                            </svg>
                                        </button>
                                    </div>
                                    <div class="menu-wrapper d-flex align-items-center justify-content-center">
                                        <ul class="navbar-nav d-flex align-items-center">
                                            <!-- Homepage -->
                                            <li class="nav-item active">
                                                <a class="nav-link active" href="/" aria-current="page"><span
                                                        class="fw-600">Homepage</span></a>
                                            </li>

                                            <!-- Pagina Servizi -->
                                            <li class="nav-item active py-3">
                                                <a class="nav-link active" href="/test" aria-current="page"><span
                                                        class="fw-500">Test</span></a>
                                            </li>

                                            <li class="nav-item btn-primario rounded-5 ms-lg-5 px-2">
                                                <a class="nav-link no-underline" href="/" aria-current="page"><span
                                                        class="fw-500">Accedi</span></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<!-- <script setup></script> -->

<style scoped>
.it-header-navbar-wrapper.theme-light-desk {
  box-shadow: none !important;
}
.nav-link {
  padding: 2px 2px !important;
  margin: 0px 10px !important;
}

li a.nav-link.active:hover {
  border-bottom-color: var(--giallo-primario) !important;
}
.it-header-navbar-wrapper nav {
    background: rgb(1 103 204) !important;
}
.navbar .navbar-collapsable .navbar-nav li a.nav-link.active {
    border-left: 0px solid rgba(0, 102, 204, 0) !important;
}
</style>