<template>
   <base-layout pageTitle="All Memories">
   <ion-list>
        <ion-item v-for="memory in memories" :key="memory.id" :router-link="`/memories/${memory.id}`">
        <ion-thumbnail slot="start">
            <ion-img :src="memory.image" :alt="memory.title"></ion-img>
        </ion-thumbnail>
        <ion-label>{{ memory.title }}</ion-label>  
    </ion-item>
    </ion-list>
   </base-layout>
</template>

<script>
import { IonList, IonItem, IonImg, IonThumbnail, IonLabel} from '@ionic/vue'; 

export default {
    components: {
        IonList,
        IonItem,
        IonImg,
        IonThumbnail,
        IonLabel
    },
    computed: {
        memories() {
            return this.$store.state.memories;
        }
    }
};
</script>

<style scoped>
</style>
