<template>
    <div class="container">
        <div class="container-box">
            <NuxtLink to="https://www.linkedin.com/in/elyesvoisin/">Linkedin</NuxtLink>
            <div class="container-box-line"></div>
            <NuxtLink to="https://twitter.com/WebDevElyes">Twitter</NuxtLink>
        </div>
        <div class="container-footer">
            <div class="container-footer-nav">
                <ul>
                    <li><NuxtLink to="#propos">A propos</NuxtLink></li>
                    <li><NuxtLink to="#projets">Projets</NuxtLink></li>
                    <li><NuxtLink to="#competence">Compétence</NuxtLink></li>

                </ul>
            </div>
            <div class="container-footer-catch">
                <p>Besoin d'un développeur full stack ?</p>
                <div class="container-footer-catch-line"></div>
                <NuxtLink to="mailto:voisin.elyes@hotmail.com">Collaborons !</NuxtLink>
            </div>
        </div>
        <div class="container-copyright">
            <p>Design & Code 2023 par <span>elyesvoisin.fr</span></p>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
    .container {
        padding: 120px;
        display: flex;
        flex-direction: column;

        @media screen and (max-width: 950px) {
            padding: 0;
        }

        &-box {
            background-color: #242424;
            padding: 80px;
            display: flex;
            justify-content: space-evenly;
            align-items: center;

            @media screen and (max-width: 950px) {
                flex-direction: column;
                gap: 48px;
            }

            & > a {
                font-size: 32px;
                font-weight: 500;
                line-height: 48px;
                text-decoration: none;
            }
            
            &-line {
                width: 48px;
                border: 1px solid #FF9142;
                height: 0;

            }

            & > * {
                background-color: #242424;
            }
        }

        &-footer{
            margin-top: 80px;
            display: flex;
            justify-content: space-between;
            border-top: 1px solid #242424;
            padding: 48px 0;

            @media screen and (max-width: 950px) {
                flex-direction: column;
                align-items: center;
                justify-content: center;
            }

            &-nav > ul{
                list-style: none;
                display: flex;
                gap: 48px;
                padding: 0;

                & > li {

                    font-size: 14px;
                    line-height: 16px;

                    & > a {
                        text-decoration: none;
                    }
                }
                
                
            }

            &-catch {
                display: flex;
                align-items: center;
                gap: 48px;

                @media screen and (max-width: 950px) {
                    gap: 24px;
                    flex-direction: column;
                }

                & > p {
                    font-size: 14px;
                    line-height: 16px;
                    color: #4C4C4C;
                } 

                &-line {
                    width: 48px;
                    height: 0;
                    border: 1px solid #FF9142;
                }

                & > a {
                    font-size: 14px;
                    line-height: 16px;
                    color: #FF9142;
                    text-decoration: none;
                }
            }
        }
        
        &-copyright{
            display: flex;
            justify-content: center;
            align-items: center;

            & > p {
                font-size: 12px;
                line-height: 22px;
                color: #B0B0B0;

                & > span {
                    color: white;
                }
            }
        }
    }
</style>