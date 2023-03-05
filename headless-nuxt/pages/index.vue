<template>
    
    <HeroBanner v-if="homepage" :catch_phrase=homepage.data.catch_phrase :description=homepage.data.description :avatar_url=homepage.data.avatar.url />
    <ExperienceList v-if="experiences" :experiences=experiences.data />
    <ProjectList />
    <CompetenceList />
    
</template>

<script setup>
const { find, findOne } = useStrapi()
const { data: homepage } = await useAsyncData('homepage', () => findOne('homepage', '', { populate: 'deep' }))
const { data: experiences } = await useAsyncData('experiences', () => find('experiences', { populate: 'deep' }))

</script>

<style lang="scss" scoped>

</style>