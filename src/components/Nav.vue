<script setup>
import TabMenu from 'primevue/tabmenu';

const routes = [
  {label: 'Home', to: '/'},
  {label: 'About', to: '/about'}
]

</script>

<template>
    <TabMenu :model="routes" />
</template>