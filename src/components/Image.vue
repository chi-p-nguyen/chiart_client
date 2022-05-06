<script setup>
import Image from 'primevue/image';
import Button from 'primevue/button';

const props = defineProps({
    imgSrc: String
})

</script>

<template>
    <div>
        <div class="block">
            <Image :src=imgSrc alt="Image" width="250" />
        </div>
        <div class="block">
            <!-- <a href="https://www.google.com/"><Button label="Link" class="p-button-link" /></a> -->
        </div>
    </div>
</template>