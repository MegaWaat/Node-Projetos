<template>
  <div>
       <b-button v-b-toggle.sigeac-menu>Abrir Menu</b-button>

       
    <b-sidebar id="sigeac-menu" title="Sidebar" bg-variant="dark" text-variant="light" shadow>
      <div class="px-3 py-2">
         <b-nvabar id=sigeac-menu></b-nvabar>
        <b-nav-item to="/">Home</b-nav-item>
        <b-nav-item to="/eventos-inscritos">Eventos Inscritos</b-nav-item>
      </div>
    </b-sidebar>

       
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>