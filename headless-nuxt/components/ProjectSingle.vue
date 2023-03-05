<template>
    <div class="container">
        <div class="container-return">
            <NuxtLink to="/"><Icon name="material-symbols:arrow-back" size="3em"/></NuxtLink>
        </div>
        <img :src=project.image.url >
        <div class="container-info">
            <div class="container-info-title">
                <span>{{ project.name }}</span>
                <div class="container-info-title-line"></div>
            </div>
            <div class="container-info-techno">
                <span>Technologie</span>
                <ul>
                    <li v-for="techno in project.technologies">{{ techno.name }}</li>
                </ul>
            </div>
            <div class="container-info-desc" v-html="$mdRenderer.render(project.description)"></div>

        </div>
    </div>
</template>

<script setup>
defineProps(['project'])
</script>

<style lang="scss" scoped>
    .container {
        padding: 60px 120px 0 120px;

        @media screen and (max-width: 700px) {
            padding: 20px 60px 0 20px;
        }

        &-return {
            margin-bottom: 60px;
        }

        & > img {
            width: 100%;
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

            &-desc {

                @media screen and (max-width: 700px) {
                    font-size: 14px;
                }
            }
        }
    }
</style>