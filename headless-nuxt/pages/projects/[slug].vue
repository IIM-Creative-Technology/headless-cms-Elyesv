<template>
    <ProjectSingle v-if="project" :project="project"/>
</template>

<script setup>  
const { findOne } = useStrapi()
const route = useRoute()
const project = ref()

onMounted( async () => {
    project.value = await findOne(`projects?filters[slug]=${route.params.slug}&populate=deep`)
    project.value = project.value.data[0]
})



</script>

<style lang="scss" scoped>

</style>
