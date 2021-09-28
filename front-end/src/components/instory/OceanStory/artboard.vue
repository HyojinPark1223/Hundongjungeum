<template>
    <div class="rightside" ref="right" id="drop-target">
    </div>
</template>

<script>
export default {
    name:'OceanStory-artboard'
}
</script>

<style>
    .rightside {
      height: 80vh;
      width: 65vw;
      border: 1px solid black;
      position: absolute;
      right: 4%;
      background-image: url("../../../assets/background/seawater.jpg");
      z-index: -9999;
  }
</style>