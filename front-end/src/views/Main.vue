<template>
  <div class="main-screen">
    <!-- <p @click="$router.push({name:'Intro'})">to Intro</p> -->
    <!-- 1) <p @click="$router.push({path:'/Intro'})">to Intro</p> -->
    <!-- 2) <p @click="$router.push('/Intro')">to Intro</p> -->
    <!-- 모두 위와 같은 효과임 -->

    <p class="main-title">"어떤 이야기를 만들어 볼까요?"</p>
    <div class="backgrounds">
      <div class="img-box" @click="$router.push({ name: 'Intro' })">
        <p class="bg-text-ballroom">무도회장</p>
        <img
          class="bg-img"
          src="../assets/backgrounds-part/ballroom2-part.png"
          alt="무도회장"
        />
      </div>
      <div class="img-box">
        <p class="bg-text-forest">숲 속</p>
        <img
          class="bg-img"
          src="../assets/backgrounds-part/forest-part.png"
          alt="숲 속"
        />
      </div>
      <div class="img-box" @click="$router.push({ path:'/OceanStory/1'})">
        <p class="bg-text-ocean">바다</p>
        <img
          class="bg-img"
          src="../assets/backgrounds-part/ocean2-part.png"
          alt="바다"
        />
      </div>
      <div class="img-box">
        <p class="bg-text-village">마을</p>
        <img
          class="bg-img"
          src="../assets/backgrounds-part/town-part.png"
          alt="마을"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
@import "../components/css/Main.css";
</style>
