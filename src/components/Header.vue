<template>
    <div :class="headerClass">
        <div :class="headerContainerClass">
            <div :class="headerHeadClass">
                <p>city</p>
                <input type="text" placeholder="Search">
            </div>
            <div :class="headerBodyClass">
                <div>
                    <h1>3°</h1>
                    <p>free</p>
                </div>
                <div>
                    <img src="" alt="">
                </div>
            </div>
            <div :class="headerFooterClass">
                <p>january</p>
                <h4>day 3</h4>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue';

// Definición de las propiedades
const props = defineProps({
    isScrolled: Boolean
});

// Usar computed para determinar las clases del header
const headerClass = computed(() => {
    return props.isScrolled ? 'header scrolled' : 'header';
});
const headerContainerClass = computed(() => {
    return props.isScrolled ? 'header_container scrolled' : 'header_container';
});

// Clases para cada sección del header
const headerHeadClass = computed(() => {
    return props.isScrolled ? 'header-head scrolled' : 'header-head';
});

const headerBodyClass = computed(() => {
    return props.isScrolled ? 'header-body scrolled' : 'header-body';
});

const headerFooterClass = computed(() => {
    return props.isScrolled ? 'header-footer scrolled' : 'header-footer';
});


</script>

<style scoped>
.header {
    background: url('./img/background.jpg') no-repeat;
    background-size: cover;
    background-position: bottom;
    height: 40vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-bottom-left-radius: 8%;
    border-bottom-right-radius: 8%;
    transition: all 0.6s ease-in-out !important;

}

.header.scrolled {
    background: none;
    transition: all 0.6s ease-in-out !important;
}

.header_container {
    height: 95%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    transition: all 0.6s ease-in-out !important;
    width: 95%;
    top: 0%;
    transition: all 0.6s ease-in-out !important;
    justify-content: space-between;
    border-radius: 10%;
}

.header_container.scrolled {
    position: fixed;
    display: flex;
    width: 100%;
    height: 15%;
    top: 0%;
    color: var(--color-2) !important;
    transition: all 0s ease-in-out !important;
    justify-content: space-around;
    background: var(--card-1);
    padding-bottom: 1emm;
    border-radius: 0%;
}

.header-head {
    transition: all 0.6s ease-in-out !important;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 95%;
    height: 2.8vh;
}

.header-head p {
    font-size: 1.2em;
    color: var(--color-1);
    text-transform: capitalize;
    letter-spacing: 0.1em;
    font-weight: 500;
}

.header-head.scrolled p {
    color: var(--color-2);
}

.header-head input {
    width: 5vw;
    padding: 0.5em;
    border: none;
    background: transparent;
    outline: none;
    color: var(--color-2);
    font-size: 1em;
    transition: all 0.6s ease-in-out !important;
}

.header-head.scrolled {
    /* Estilos para el header head cuando está scrolled */

}

.header-body {
    transition: all 0.6s ease-in-out !important;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 95%;
}

.header-body.scrolled {
    justify-content: baseline;
}

.header-body :first-child {
    display: flex;
    transition: all 0.6s ease-in-out !important;
    flex-direction: row;
    justify-content: center;
    align-items: baseline;
}

.header-body :first-child h1 {
    font-size: 6em;
    color: var(--color-1);
    margin: 0;
    text-transform: capitalize;
    letter-spacing: 0.1em;
    font-weight: 500;
}

.header-body :first-child p {
    font-size: 1.4em;
    color: var(--color-1);
    margin-left: -30px;
    text-transform: capitalize;
    letter-spacing: 0.1em;
    font-weight: 500;
}


.header-body.scrolled :first-child h1 {
    font-size: 4em;
    color: var(--color-1);
    margin: 0;
    text-transform: capitalize;
    letter-spacing: 0.1em;
    font-weight: 500;
}

.header-body.scrolled :first-child p {
    font-size: 1em;
    color: var(--color-1);
    margin-left: -30px;
    text-transform: capitalize;
    letter-spacing: 0.1em;
    font-weight: 500;
}


.header-body>:last-child {
    background: red;
    width: 40vw;
    height: 18vh;
    overflow: hidden;
}

.header-body.scrolled>:last-child {
    background: red;
    width: 20vw;
    height: 9vh;
    overflow: hidden;
}

.header-body>:last-child img {
    width: 100%;
    height: 100%;
    object-fit: contain;
}

.header-body.scrolled {
    /* Estilos para el body del header cuando está scrolled */
    opacity: 0.7;
    /* Ejemplo: cambiar opacidad */
}

.header-footer {
    transition: all 0.6s ease-in-out !important;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 95%;
    padding-bottom: 0.8em;
}
.header-footer p{
    color: var(--card-1);
    text-transform: capitalize;
}
.header-footer h4{
    color: var(--card-1);
    text-transform: capitalize;
    width: 20vw;
    height: 5vh;
    text-wrap: wrap;
    text-align: right;
    font-weight: 600;
}

.header-footer.scrolled {
    /* Estilos para el footer del header cuando está scrolled */
    display: none;
    /* Ejemplo: cambiar peso de fuente */
}
</style>