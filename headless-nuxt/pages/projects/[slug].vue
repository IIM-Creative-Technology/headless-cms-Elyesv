<template>
    <div>
        <h1>Mon projet</h1>
        {{ $route.params.slug }}
        <img :src=project.image.url >
        <pre>
            {{ project }}
        </pre>
    </div>
</template>

<script setup>  
const { findOne } = useStrapi()
const route = useRoute()
const project = ref()

onMounted( async () => {
    project.value = await findOne(`projects?filter[slug]=${route.params.slug}&populate=deep`)
    project.value = project.value.data[0]
})

</script>

<style lang="scss" scoped>

</style>
