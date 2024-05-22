<template>
    <base-layout pageTitle="The Details" page-default-bac-link="/memories">
    <h2>The details page</h2>
    </base-layout>
 </template>

<script>

export default {
    data() {
        return {
            memoryId: null
        }
    },
    watch: {
        '$route'(currentRoute) {
            this.memoryId = currentRoute.params.id;
        }
    }
}
</script>
