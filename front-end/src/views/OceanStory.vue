<template>
  <div class="OceanStory-container">
      <div>
          <img src="@/assets/icons/back-arrow.png" alt="" class="back-to-main-arrow" @click="$router.push({name:'Main'})">
      </div>
      <icons />
      <artboard />
        <router-link :to="{path:'/OceanStory/'+num}" class="nextbtn" @click="numUp, refreshAll">
            다음 장
        </router-link>
      <div class="textarea"></div>
  </div>
</template>

<script>
// import dragula from 'dragula'
import icons from '@/components/instory/OceanStory/icons.vue'
import artboard from '@/components/instory/OceanStory/artboard.vue'

export default {
    data: () => {
    return {
      num: 2,
    }
    },
    components: {
      icons,
      artboard
    },
    // mounted() {
    //     const {right, left} = this.$refs;
    //     dragula([
    //         left, right
    //     ],{
    //         revertOnSpill: true
    //     }
        
    //     )
    // },
    methods: {
      numUp() {
        this.num += 1        
      },
      refreshAll() {
        window.location.reload()
        console.log('되냐?')
      }
    },
}
</script>

<style scoped>
  @import "../components/css/OceanStory.css";
</style>