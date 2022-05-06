<script setup>
import TabMenu from 'primevue/tabmenu';

const routes = [
  {label: 'Home', to: '/'}
]

</script>

<template>
    <TabMenu :model="routes" />
</template>