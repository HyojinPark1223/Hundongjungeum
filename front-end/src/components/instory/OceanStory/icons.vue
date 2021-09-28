<template>
  <div class="icons" ref="left" id="drag-elements">
    <div class="icon-container">
      <movable posTop="0" posLeft="0"
        ><img
          class="img-1 ocean-icon"
          src="@/assets/icons/OceanStory/fish.png"
          alt=""
          @click="rotation"
      /></movable>
      <movable posTop="0"
        ><img
          class="img-2 ocean-icon"
          src="@/assets/icons/OceanStory/clam.png"
          alt=""
      /></movable>
      <movable posTop="0"
        ><img
          class="img-3 ocean-icon"
          src="@/assets/icons/OceanStory/butterflyfish.png"
          alt=""
      /></movable>
      <movable posTop="0"
        ><img
          class="img-4 ocean-icon"
          src="@/assets/icons/OceanStory/butterflyfish2.png"
          alt=""
      /></movable>
      <movable posTop="0"
        ><img
          class="img-5 ocean-icon"
          src="@/assets/icons/OceanStory/crab.png"
          alt=""
      /></movable>
      <movable posTop="0"
        ><img
          class="img-6 ocean-icon"
          src="@/assets/icons/OceanStory/dolphin.png"
          alt=""
      /></movable>
      <movable posTop="0"
        ><img
          class="img-7 ocean-icon"
          src="@/assets/icons/OceanStory/starfish.png"
          alt=""
      /></movable>
      <!-- <movable posTop="-698" posLeft="160"><img class="img-8 ocean-icon" src="@/assets/icons/OceanStory/jellyfish.png" alt=""></movable> -->
      <movable posTop="-698" posLeft="160"
        ><img
          class="img-8 ocean-icon"
          src="@/assets/icons/OceanStory/jellyfish.png"
          alt=""
      /></movable>
      <movable posTop="-698" posLeft="160"
        ><img
          class="img-9 ocean-icon"
          src="@/assets/icons/OceanStory/shipwreck.png"
          alt=""
      /></movable>
      <movable posTop="-698" posLeft="160"
        ><img
          class="img-10 ocean-icon"
          src="@/assets/icons/OceanStory/shrimp.png"
          alt=""
      /></movable>
      <!-- <movable><img class="img-6 ocean-icon" src="@/assets/icons/OceanStory/.png" alt=""></movable> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "OceanStory-icons",
  method: {
    rotation() {},
  },
};
</script>

<style scoped>
@charset "utf-8";

img:hover {
  transform: rotate(3deg);
}

.icons {
  height: 80vh;
  width: 300px;
  border: 1px solid black;
  position: absolute;
  left: 5%;
  background-color: #f5f5f5;
  border-radius: 4px;
  overflow-y: visible;
  /* overflow-x:auto; */
  /* white-space: nowrap; */
  /* z-index: -999; */
}

.icons::-webkit-scrollbar {
  width: 5px;
  height: 5px;
}

.icons::-webkit-scrollbar-thumb {
  height: 5px;
  background-color: rgb(50, 50, 192);
  border-radius: 10px;
}

icon-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.--movable-base[data-v-1a80d1f0] {
  display: block;
  position: relative;
  cursor: pointer;
  max-width: 100px;
  max-height: 100px;
  margin: 0px;
  top: 0px;
}

.ocean-icon {
  max-width: 100px;
  max-height: 100px;
  margin: 20px;
  z-index: 9999;
}

.empty {
  height: 1200px;
}

.OceanStory-container {
  margin-top: 50px;
  /* width: 100vw;
      height: 100vh;
      z-index: 9999; */
}
</style>
