<template>
    <div class="container" id="contact">
        <div class="container-box">
            <p class="container-box-title">Collaborons !</p>
            <h2>Il n'y a pas de meilleur moment pour me contacter ! </h2>
            <p class="container-box-desc">Nous sommes a un pas de mieux nous connaître. <br> Appuyez simplement sur le bouton « Collaborons ! » et envoyez moi un mail. </p>
            <div class="container-box-button">
                <div class="container-box-button-line"></div>
                <NuxtLink to="mailto:voisin.elyes@hotmail.com">Collaborons !</NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
    .container{
        padding: 200px 120px;
        

        @media screen and (max-width: 950px) {
            padding: 100px 0;
        }

        &-box {
            background-color: #242424;
            display: flex;
            flex-direction: column;
            padding: 120px 200px 120px 120px;

            @media screen and (max-width: 700px) {
                padding: 60px 100px 60px 60px;
            }

            &-title {
                color: #FF9142;
            }

            & > h2 {
                font-size: 56px;
                line-height: 80px;
                font-weight: 500;

                @media screen and (max-width: 700px) {
                    font-size: 26px;
                    line-height: 36px;
                }

                
            }
            
            &-desc{
                font-size: 20px;
                color: #B0B0B0;

                @media screen and (max-width: 9500px) {
                    font-size: 14px;
                }
            }

            &-button {

                display: flex;
                align-items: center;
                width: 200px;
                margin-top: 48px;

                &-line {
                    height: 41px;
                    border: 1px solid #FF9142;
                    transform: rotate(27.5deg);
                    margin: 0 20px 0 10px;
                    
                }

                & > a {
                    text-decoration: none;
                    
                }
            }

            & > * {
                background-color: #242424;
            }
        }
    }
</style>