<template>
    <section class="testata py-2">
        <div class="it-header-slim-wrapper theme-light">
            <div class="container-xxl">
                <div class="row">
                    <div class="col-12">

                        <!-- Navbar -->
                        <div class="it-header-slim-wrapper-content">

                            <!-- Navbar Parte sinistra (Logo) -->
                            <a class="d-none d-lg-block navbar-brand" href="#">
                                <img src="/src/assets/loghi/LogoOrientaPA.svg" alt="Logo" class="py-3 d-flex"
                                    style="max-width: 250px" />
                            </a>

                            <!-- Mobile view -->
                            <div class="nav-mobile">
                                <nav aria-label="Navigazione accessoria">

                                    <!-- Logo -->
                                    <a class="it-opener d-lg-none d-flex align-items-center justify-content-start py-0"
                                        data-bs-toggle="collapse" href="#menu1b" role="button" aria-expanded="false"
                                        aria-controls="menu4">
                                        <span>
                                            <img src="/src/assets/loghi/LogoOrientaPA.svg" alt="Logo" class="d-flex"
                                                style="max-width: 140px" />
                                        </span>
                                        <svg class="icon" aria-hidden="true">
                                            <use href="/bootstrap-italia/dist/svg/sprites.svg#it-expand"></use>
                                        </svg>
                                    </a>

                                    <!-- Menu -->
                                    <div class="link-list-wrapper collapse" id="menu1b">
                                        <ul class="link-list">
                                            <li>
                                                <router-link to="/" class="list-item fw-600 no-underline">
                                                    Conosci&nbsp;la&nbsp;PA
                                                </router-link>
                                            </li>
                                            <li>
                                                <router-link to="/preparati-per-la-pa" class="list-item fw-600 no-underline">
                                                    Preparati&nbsp;per&nbsp;la&nbsp;PA
                                                </router-link>
                                            </li>
                                            <li>
                                                <router-link to="/immaginati-nella-pa" class="list-item fw-600 no-underline">
                                                    Immaginati&nbsp;nella&nbsp;PA
                                                </router-link>
                                            </li>




                                        </ul>
                                    </div>
                                </nav>
                            </div>

                            <!-- Bottone -->
                            <div class="it-header-slim-right-zone">
                                <div class="it-access-top-wrapper">
                                    <a class="btn btn-primario btn-sm no-underline rounded-5 px-4" href="/accedi">Accedi</a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>


<style scoped>
section.testata {
    background: white;
    box-shadow: 0px 0px 14px 8px #00000008;
}

.link-list-wrapper ul li a {
    font-size: 1.1rem;
    line-height: 1rem;
    display: block;
    padding: 0px;
    margin: 0px 25px;
}

.it-header-slim-wrapper.theme-light {
    background: #fff;
    border-bottom: 0px solid rgba(0, 102, 204, .2);
}

.link-list-wrapper ul li a:hover {
    color: var(--viola-accent) !important;
}

.link-list-wrapper ul li a.active:hover {
    color: inherit !important;
}

@media (min-width: 992px) {
    .it-header-slim-wrapper.theme-light .it-header-slim-wrapper-content .nav-mobile ul.link-list {
        border-left: 0px solid rgba(0, 102, 204, .2);
        border-right: 0px solid rgba(0, 102, 204, .2);
        padding-top: 10px !important;
    }

    .it-header-slim-wrapper.theme-light .it-header-slim-wrapper-content .nav-mobile ul.link-list a.list-item.active {
        color: var(--giallo-primario);
        border-bottom: 4px solid var(--giallo-primario) !important;
    }
}


@media (max-width: 992px) {
    .link-list-wrapper ul li a {
        padding: 10px 0px;
    }

    .link-list-wrapper ul li a.active {
        color: var(--blu-secondario) !important;
    }

}
</style>