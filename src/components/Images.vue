<script setup>
import { ref } from 'vue';
import Image from './Image.vue';
import axios from 'axios';

const imgLinks = ref([]);

const url = "http://localhost:5000";

axios.get(`${url}/files`)
.then((response) => {
    imgLinks.value = response.data.map(element => `${url}/image/${element.filename}`);
})
.catch((error) => console.log(error))

</script>

<template>
    <div>
        <div class="flex flex-wrap card-container blue-container" style="max-width: 100%">
            <div 
            class="flex align-items-center justify-content-center m-2" 
            style="min-width: 200px; min-height: 100px"
            v-for="link in imgLinks">
                <Image :imgSrc="link" />
            </div>
        </div>
    </div>
</template>