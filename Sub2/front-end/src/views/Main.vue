<template>
  <div class="main-screen">
    <!-- <p @click="$router.push({name:'Intro'})">to Intro</p> -->
    <!-- 1) <p @click="$router.push({path:'/Intro'})">to Intro</p> -->
    <!-- 2) <p @click="$router.push('/Intro')">to Intro</p> -->
    <!-- 모두 위와 같은 효과임 -->

    <p class="main-title">어떤 이야기를 만들어 볼까요?</p>
    <div class="backgrounds">
      <div class="img-box">
        <img
          class="bg-img"
          src="../assets/backgrounds-part/ballroom2-part.png"
          alt="무도회장"
        />
      </div>
      <div class="img-box">
        <img
          class="bg-img"
          src="../assets/backgrounds-part/forest-part.png"
          alt="숲 속"
        />
      </div>
      <div class="img-box">
        <img
          class="bg-img"
          src="../assets/backgrounds-part/ocean2-part.png"
          alt="바다"
        />
      </div>
      <div class="img-box">
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
.main-screen {
  display: flex;
  flex-direction: column;
}

.main-title {
  font-size: 5rem;
  margin-top: 2rem;
  margin-top: 2rem;
}

.backgrounds {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}

.img-box {
  border: black solid 1px;
  border-radius: 10px;
  width: 20%;
  max-width: 30rem;
  height: 60rem;
  overflow: hidden;
}

.bg-img {
  height: 60rem;
  object-fit: cover;
  vertical-align: middle;
}
</style>
