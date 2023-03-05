<template>
    <div class="container" id="competence" v-if="competences">
        <div class="container-box" v-for="competence in competences.data">
            <p class="container-box-title">{{ competence.Name }}</p>
            <div class="container-box-list">
                <ul>
                    <li v-for=" techno in competence.technologies">
                        <p>{{ techno.name }}</p>
                        <div></div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup>
const { find } = useStrapi()

const competences = ref()

onMounted(async () => {
    competences.value = await find('competences', {populate: 'deep'})
    console.log(competences)
})
</script>

<style lang="scss" scoped>
    .container{
        padding: 120px;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;

        @media screen and (max-width: 1100px) {
            flex-direction: column;
            align-items: center;
        }

        &-box {
            display: flex;
            flex-direction: column;
            
            &-title{
                font-size: 18px;
                line-height: 28px;
                font-weight: 500;
            }

            &-list > ul {
                list-style: none;
                padding: 0;
                margin-top: 32px;

                & > li {

                    display: flex;
                    align-items: center;
                    
                    & > p {
                        color: #B0B0B0;
                        font-size: 14px;
                        line-height: 22px;
                    }

                    & > div {
                        width: 48px;
                        height: 0;
                        border: 1px solid #FF9142;
                        margin-left: 32px;
                    }

                }
            }
        }
    }
</style>