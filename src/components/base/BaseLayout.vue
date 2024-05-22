<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-back-button  :default-href="pageDefaultBackLink"></ion-back-button>
                </ion-buttons>
                <ion-title>{{ pageTitle }}</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <slot></slot>
        </ion-content>
    </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonButtons, IonTitle, IonContent, IonBackButton } from '@ionic/vue'; 

export default {
    props: ['pageTitle', 'pageDefaultBackLink'],
    components: {
        IonToolbar,
        IonPage,
        IonHeader,
        IonTitle,
        IonContent,
        IonBackButton,
        IonButtons
    }
}
</script>