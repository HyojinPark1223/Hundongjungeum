<template>
  <div class="OceanStory-container">
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
        this.$router.go();
      }
    },
}
</script>

<style scoped>
    .leftside {
        height: 550px;
        width: 300px;
        border: 1px solid black;
        position: absolute;
        left: 70px;
        background-color: #f5f5f5;
        border-radius: 4px;
    }
    .rightside {
        height: 550px;
        width: 1000px;
        border: 1px solid black;
        position: absolute;
        right: 100px;
        background-image: url("../assets/background/seawater.jpg");
    }
    .textarea {
        height: 50px;
        width: 1365px;
        border: 1px solid black;
        position: absolute;
        left: 70px;
        bottom: 25px;
        margin: auto 0;
        background-color: #f5f5f5;
        border-radius: 12px;
    }
    .nextbtn {
        height: 25px;
        width: 150px;
        border: 1px solid black;
        position: absolute;
        right: 100px;
        bottom: 85px;
        margin: auto 0;
        background-color: #f48fb1;
        border-radius: 12px;

    }

    .img-1 {
        max-width: 100px;
        max-height: 100px;
        position: absolute;
        margin: 20px;
        display: block;

    }
    .img-2 {
        max-width: 100px;
        max-height: 100px;
        position: absolute;
        right: 1px;
        margin: 20px;
        top: 0px;

    }
    .img-3 {
        max-width: 100px;
        max-height: 100px;
        position: absolute;
        left: 1px;
        margin: 20px;
        top: 150px;
    }
    .img-4 {
        max-width: 100px;
        max-height: 100px;
        display: block;
        position: absolute;
        right: 1px;
        margin: 20px;
        top: 150px;
        z-index: 9999;
    }
    
    .OceanStory-container{
        margin-top: 50px;
        /* width: 100vw;
        height: 100vh;
        z-index: 9999; */
    }

</style>