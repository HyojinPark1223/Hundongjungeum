<template>
  <div class="loading-container">
    <div class="wrapper fadeInDown">
      <div class="fadeIn first" style="margin-top: 50px; margin-bottom: 50px;">
        <router-link :to="{name:'Main'}" exact>
          <img src="@/assets/images/hundong.png" alt="" id="icon" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style>
  @import '../components/css/Loading.css';
</style>