<template>
    <TheNavbar/>
</template>

<script setup>

const { find } = useStrapi()
const { data: projects } = await useAsyncData('projects', () => find('projects', { populate: 'deep' }))

</script>

<style lang="scss" scoped>

</style>