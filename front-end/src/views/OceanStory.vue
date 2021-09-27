<template>
  <div class="OceanStory-container">
      <div>
          <img src="@/assets/icons/back-arrow.png" alt="" class="back-to-main-arrow" @click="$router.push({name:'Main'})">
      </div>
      <div class="OceanStory-top-container">
        <icons />
        <artboard />
      </div>
        <router-link @click="[normal,numUp,refreshAll]" :to="{path:'/OceanStory/'+num}" class="nextbtn">
            다음 장
        </router-link>
      <storyTextarea />
  </div>
</template>

<script>
// import dragula from 'dragula'
import icons from '@/components/instory/OceanStory/icons.vue'
import artboard from '@/components/instory/OceanStory/artboard.vue'
import storyTextarea from '@/components/instory/storyTextarea.vue'

export default {
    data: () => {
    return {
      num: 2,
    }
    },
    components: {
      icons,
      artboard,
      storyTextarea,
    },
    // mounted() {
    //     const {icons, artboard} = this.$refs;
    //     dragula([
    //         icons, artboard
    //     ],{
    //         revertOnSpill: true
    //     }
        
    //     )
    // },
    methods: {
      normal() {
        console.log('이건돼?')
      },
      numUp() {
        this.num += 1        
        console.log('num 되냐?')
      },
      refreshAll() {
        window.location.reload()
        console.log('새로고침 되냐?')
      }
    },
}
</script>

<style scoped>
  @import "../components/css/OceanStory.css";
</style>