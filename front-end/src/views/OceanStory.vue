<template>
  <div class="OceanStory-container">
      <div>
          <img src="@/assets/icons/back-arrow.png" alt="" class="back-to-main-arrow" @click="$router.push({name:'Main'})">
      </div>
      <div class="leftside" ref="left" id="drag-elements">
          <div><img class="img-1" src="@/assets/icons/OceanStory/fish.png" alt=""></div>
          <div><img class="img-2" src="@/assets/icons/OceanStory/clam.png" alt=""></div>
          <div><img class="img-3" src="@/assets/icons/OceanStory/butterflyfish.png" alt=""></div>
          <movable><img class="img-4" src="@/assets/icons/OceanStory/butterflyfish2.png" alt=""></movable>
      </div>
      <div class="rightside" ref="right" id="drop-target">
      </div>
        <router-link :to="{path:'/OceanStory/'+num}" class="nextbtn" @click="numUp, refreshAll">
            다음으로 넘어가기
        </router-link>
      <div class="textarea"></div>
  </div>
</template>

<script>
import dragula from 'dragula'

export default {
    data: () => {
    return {
      num: 2,
    }
    },
    components: {
    },
    mounted() {
        const {right, left} = this.$refs;
        dragula([
            left, right
        ],{
            revertOnSpill: true
        }
        
        )
    },
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

<style>
  @import "../components/css/OceanStory.css";
</style>