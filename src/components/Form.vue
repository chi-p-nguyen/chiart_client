<script setup>
import axios from 'axios';
import { ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import InputText from 'primevue/inputtext';
import Calendar from 'primevue/calendar';
import Button from 'primevue/button';
import Textarea from 'primevue/textarea';
import FileUpload from 'primevue/fileupload';

const router = useRouter();
const route = useRoute()

const title = ref(null);
const description = ref(null);
const dateCompleted = ref(null);
const image = ref(null);

function myUploader(event) {
  image.value = event.files[0];
}

const url = "http://localhost:5000";

function process() {
  const formData = new FormData();
  formData.append('title', title.value);
  formData.append('description', description.value);
  formData.append('dateCompleted', dateCompleted.value);
  formData.append('myfile', image.value, image.value.name);

  axios.post(`${url}/upload`, formData)
  .then(() => {
    router.push({
        name: 'Home'
      })
  })
  .catch((error) => {
    console.log(error);
  })
}

</script>

<template>
  <div class="greetings">
    <div class="grid p-fluid">
      <div class="col-12">
        <div class="p-inputgroup">
          <span class="p-float-label">
            <InputText id="title" type="text" v-model="title" />
            <label for="title">Title</label>
          </span>
        </div>
      </div>
      <div class="col-12">
        <div class="p-inputgroup">
          <span class="p-float-label">
            <Textarea v-model="description" rows="5" cols="30" />
            <label for="description">Description</label>
          </span>
        </div>
      </div>
      <div class="col-12">
        <div class="p-inputgroup">
          <span class="p-float-label">
            <Calendar v-model="dateCompleted" />
            <label>Date completed</label>
          </span>
        </div>
      </div>
      <div class="col-12">
        <div class="p-inputgroup">
          <FileUpload mode="basic" accept="image/*" name="myimage" :customUpload="true" @select="myUploader" />
        </div>
      </div>
      <div class="col-12">
        <div class="p-inputgroup">
          <Button label="Submit" class="p-button-secondary" @click.prevent="process"/>
        </div>
      </div>
    </div>   
  </div>

  
</template>

<style scoped>

</style>
