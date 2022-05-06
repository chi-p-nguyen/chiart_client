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
            <Image :src=imgSrc alt="Image" height="360" imageClass="shadow-8" />
        </div>
    </div>
</template>