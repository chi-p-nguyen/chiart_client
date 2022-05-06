<script setup>
import TabMenu from 'primevue/tabmenu';

const routes = [
  {label: 'Home', to: '/'},
  {label: 'Upload', to: '/upload'} 
]

</script>

<template>
    <TabMenu :model="routes" />
</template>