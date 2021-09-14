<template>
  <div>
    <h2>this is Main</h2>
    <p @click="$router.push({name:'Intro'})">to Intro</p>
    <!-- 1) <p @click="$router.push({path:'/Intro'})">to Intro</p> -->
    <!-- 2) <p @click="$router.push('/Intro')">to Intro</p> -->
    <!-- 모두 위와 같은 효과임 -->
  </div>
</template>

<script>
export default {
}
</script>

<style>

</style>