<template>
    <div class="flex flex-col gap-2">
        <nav :class="navFixed ? 'fixed top-[5.8rem]' : 'bg-transparent'" class=" bg-card-1  w-full h-16 flex justify-center items-center">
            <ul class="nav_li">
                <li>Today</li>
                <li>Tomorrow</li>
                <li>10 days</li>
            </ul>
        </nav>

    </div>
</template>

<script setup>
import { ref, watch } from 'vue';

const navFixed = ref(false);





// Función que maneja el estado del nav (fijo o no)
const handleScroll = (scrollY) => {
    // Cuando el scrollY supera un valor específico (en este caso 179), se activa la clase fija
    if (scrollY >= 179) {
        navFixed.value = true;
    } else {
        navFixed.value = false;
    }
};

// Definición de las propiedades
const props = defineProps({
    scrollY: Number
});

// Usar un watch para observar los cambios en scrollY
watch(
    () => props.scrollY,
    (newScrollY) => {
        handleScroll(newScrollY); // Llamamos a la función cuando cambia el scrollY
    }
);
</script>



<style scoped>
.nav_li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    padding: 10px;
    width: 97%;
}

.nav_li li {
    text-align: center;
    font-weight: bold;
    color: white;
    cursor: pointer;
    background: var(--button-2);
    border-radius: 15px;
    color: var(--color-2);
    padding: 0.5em 1em;
    width: 28vw;
}

/* Estilo para cuando el nav se fija */
.nav_fixed {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    background-color: var(--card-1);
    /* Cambia el fondo si lo necesitas */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>
