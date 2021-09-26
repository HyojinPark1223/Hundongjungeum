<template>
  <div class="icons" ref="left" id="drag-elements">
    <div class="icon">
      <movable><img class="img-1" src="@/assets/icons/OceanStory/fish.png" alt="" @click="rotation"></movable>
      <movable><img class="img-2" src="@/assets/icons/OceanStory/clam.png" alt=""></movable>
      <movable><img class="img-3" src="@/assets/icons/OceanStory/butterflyfish.png" alt=""></movable>
      <movable><img class="img-4" src="@/assets/icons/OceanStory/butterflyfish2.png" alt=""></movable>
    </div>
  </div>
</template>

<script>
export default {
  name : 'OceanStory-icons',
  method : {
    rotation() {

    },
  }
}
</script>

<style scoped>
@charset "utf-8";

  img:hover {
    transform: rotate(3deg);
  }

  .icons {
      height: 80vh;
      width: 20vw;
      border: 1px solid black;
      position: absolute;
      left: 70px;
      background-color: #f5f5f5;
      border-radius: 4px;
      overflow-y: inherit;
      white-space: nowrap;
      }

.icons::-webkit-scrollbar{
    width: 5px;
    height: 5px;
}

.icons::-webkit-scrollbar-thumb{
    height: 5px;
    background-color: rgb(50, 50, 192);
    border-radius: 10px;  
}

  .img-1 {
      max-width: 100px;
      max-height: 100px;
      position: absolute;
      margin: 20px;
      display: block;
      z-index: 9999;
  }

  .img-2 {
      max-width: 100px;
      max-height: 100px;
      position: absolute;
      left: 150px;
      margin: 20px;
      top: 0px;
      z-index: 9999;
  }

  .img-3 {
      max-width: 100px;
      max-height: 100px;
      position: absolute;
      left: 1px;
      margin: 20px;
      top: 150px;
      z-index: 9999;
  }

  .img-4 {
      max-width: 100px;
      max-height: 100px;
      display: block;
      position: absolute;
      left: 150px;
      margin: 20px;
      top: 150px;
      z-index: 9999;
  }
  
  .empty {
    height: 1200px;
  }

  .OceanStory-container{
      margin-top: 50px;
      /* width: 100vw;
      height: 100vh;
      z-index: 9999; */
  }
</style>