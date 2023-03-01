<template>
    <nav class="container">
        <div class="container-logo">
            <h3>Elyes Voisin</h3>
            <div class="container-logo-line"></div>
        </div>
        <div class="container-navbar">
            <ul>
                <li><NuxtLink to="#">A propos</NuxtLink></li>
                <li><NuxtLink to="#">Projets</NuxtLink></li>
                <li><NuxtLink to="#" class="text-orange">Collaborons !</NuxtLink></li>
            </ul>
        </div>
    </nav>
</template>

<script setup> 

</script>

<style lang="scss" scoped>
    .container{
        width: 90vw;
        margin: 0 48px;
        display: flex;
        justify-content: space-between;

        &-logo{
            display: flex;
            align-items: center;
            & > h3{
                font-size: 32px;
                font-weight: 500;
                margin-right: 30px;
            }

            &-line{
                height: 72px;
                border-left: 1px solid #FF9142;
                margin-top: 10px;
                transform: rotate(45deg);
            }
        }

        &-navbar{

            display: flex;
            align-items: center;
            justify-content: center;

            & > ul{
                list-style: none;
                display: flex;
                gap: 24px;

                & > li {
                    font-weight: 500;

                    & > a {
                        text-decoration: none;
                    }
                }
            }

        }
        
        
        .text-orange{
            color: #FF9142;
        }
    }
</style>