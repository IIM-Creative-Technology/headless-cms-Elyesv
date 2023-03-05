<template>
    <div class="container">
        <div class="container-info">
            <h2 class="container-info-welcome text-orange">Hello, je m’apelle Elyes. </h2>
            <p class="container-info-catch">{{ catch_phrase }}</p>
            <p class="container-info-description">{{ description }}</p>
            <div class="container-info-cta">
                
                <div class="container-info-cta-line"></div>
                <p><NuxtLink to="#">En savoir plus</NuxtLink></p>
            </div>
        </div>
        <div class="container-avatar">
            <img :src=avatar_url alt="memoji apple">
        </div>
    </div>
</template>

<script setup>
defineProps(['catch_phrase', 'description', 'avatar_url'])
</script>

<style lang="scss" scoped>
    .text-orange{
        color: #FF9142;
    }

    .container{
        display: flex;
        align-items: center;
        margin: 0 120px;

        @media screen and (max-width: 1300px) {
            flex-direction: column;
            margin-top: 20px;
        }

        

        &-info{

            &-catch{
                font-weight: 500;
                font-size: 56px;
                line-height: 80px;
                margin: 0;
            }

            &-description{
                margin-top: 48px;
                color: #B0B0B0;
                font-size: 20px;
                line-height: 32px;
                font-family: 'Montserrat';
            }

            &-cta{
                display: flex;
                align-items: center;

                &-line{
                    height: 41px;
                    border: 1px solid #FF9142;
                    transform: rotate(27.5deg);
                    margin-left: 10px;
                }

                & > p > a {
                    margin-left: 20px;
                    text-decoration: none;
                }
            }
        }

        &-avatar{
            @media screen and (max-width: 600px) {
                display: none;
            }
        }
    }
</style>