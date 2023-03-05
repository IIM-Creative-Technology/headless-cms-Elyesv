<template >
    <div class="container" id="projets" v-if="projects">
        <div class="container-filter">
            <p class="container-filter-title">Catégories</p>
            <div class="container-filter-title-box" v-for="type in types">
                <div class="container-filter-title-box-line"></div>
                <button class="container-filter-title-box-title" @click="filterProjects(type)" :class="{'text-orange' : activeFilter === type}">{{ type }}</button>
            </div>
        </div>
        <div class="container-project">
            <div class="container-project-box"  v-for="project in filteredProject">
                <NuxtLink :to="`/projects/${project.slug}`" >
                    <img :src="project.image.url">
                </NuxtLink>
                <div class="container-project-box-info">
                    <div class="container-project-box-info-title">
                        <span>{{ project.name }}</span>
                        <div class="container-project-box-info-title-line"></div>
                    </div>
                    <div class="container-project-box-info-techno">
                        <span>Technologie</span>
                        <ul>
                            <li v-for="techno in project.technologies">{{ techno.name }}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const { find } = useStrapi()
const projects = ref()
const types = ref(['Tous', 'Professionnel', 'Scolaire', 'Personnel'])
const activeFilter = ref('Tous')

const filterProjects = (type) => {
    activeFilter.value = type
    console.log(activeFilter.value)
}

const filteredProject = computed(() => {
    if (activeFilter.value === 'Tous') return projects.value.data
    return projects.value.data.filter(project => project.type === activeFilter.value)
})

onMounted( async () => {
    projects.value = await find('projects', {populate: 'deep'})
})

</script>

<style lang="scss" scoped>
    .container{
        display: flex;
        margin: 0 120px;
        flex-direction: column;

        &-filter{
            background-color: #242424;
            display: flex;
            justify-content: space-between;
            padding: 48px 125px;

            @media screen and (max-width: 1010px) {
                display: none;
            }

            &-title{

                color: #4C4C4C;
                background-color: #242424;

                &-box{
                    display: flex;
                    align-items: center;
                    background-color: #242424;

                    &-line{
                        width: 48px;
                        height: 0;
                        border: 1px solid #606060;

                        @media screen and (max-width: 1275px) {
                            display: none;
                        }
                    }

                    &-title{
                        margin-left: 32px;
                        border: none;
                        background-color: #242424;
                        cursor: pointer;
                    }
                }
            }
        }

        &-project{
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 50px;
            padding: 120px 0;
            flex-wrap: wrap;
            justify-content: center;

            
            &-box{
                width: 600px;

                @media screen and (max-width: 700px) {
                    width: 350px;
                }
                
                & > a > img {
                    width: 600px;
                    height: 337.5px;
                    object-fit: cover;

                    @media screen and (max-width: 700px) {
                        width: 350px;
                        height: 196px;
                    }
                }

                &-info{
                    
                    display: flex;
                    flex-direction: column;

                    &-title{
                        display: flex;
                        align-items: center;
                        margin-top: 32px;

                        &-line{
                            width: 48px;
                            height: 0;
                            border: 1px solid #FF9142;
                            margin-left: 32px;
                        }

                        & > span {
                            font-size: 24px;
                            font-weight: 500;
                        }
                    }

                    &-techno{
                        display: flex;
                        align-items: center;

                        & > span {
                            font-size: 14px;
                            line-height: 22px;
                            color: #606060;
                        }

                        & > ul {
                            display: flex;
                            align-items: center;
                            list-style: none;
                            gap: 10px;

                            & > li{
                                font-size: 14px;
                                line-height: 22px;
                            }
                        }
                    }
                }
            
            }
        }
    }

    p {
        background-color: #242424;
    }

    .text-orange{
        color: #FF9142;
    }
</style>