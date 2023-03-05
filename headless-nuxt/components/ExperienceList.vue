<template>
    <div class="container" id="propos" v-for="experience in experiences">
        <div class="container-box">
            <div class="container-box-title">
                <h2>{{ experience.name }}</h2>
                <div class="container-box-title-line"></div>
            </div>
            <div class="container-box-info">
                <p>{{ experience.localisation }}</p>
                <p>{{ experience.duration }}</p>
            </div>
        </div>
        <div class="container-description" v-html="$mdRenderer.render(experience.description)"></div>
    </div>
</template>

<script setup>
defineProps(['experiences'])
</script>

<style lang="scss" scoped>
    .container{
        display: flex;
        justify-content: space-between;
        margin: 120px;

        @media screen and (max-width: 1200px) {
            flex-direction: column;
            align-items: center;
            margin: 60px;
        }

        &-box{
            display: flex;
            flex-direction: column;

            &-title{
                
                display: flex;
                align-items: center;

                &-line{
                    width: 48px;
                    border-top: 1px solid #FF9142;
                    margin-left: 32px;
                }
            }

            &-info > p{
                font-size: 14px;
                line-height: 22px;
                margin: 8px 0 0 0;
                color: #606060;
            }
        }

        &-description{
            
            width: 420px;

            @media screen and (max-width: 550px) {
                width: auto;
            }

        }
    }
</style>