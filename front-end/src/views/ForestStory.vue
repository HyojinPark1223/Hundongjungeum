<template>
  <div>
    <h1>Story</h1>
    현재 {{ storyNum }} 페이지 입니다.
    <p v-for="(num, index) in nums" :key="index">
      <ol v-if="num!=1">
        <router-link :to="{path:'/ForestStory/'+num}">
          {{num}}페이지로 이동
        </router-link>
      </ol>
    </p>
    <router-link :to="{path:'/Main'}">
      <h3>홈으로 이동</h3>
    </router-link>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      nums : 5,
    }
  },
  computed: {
    storyNum() {
      return this.$route.params.storyNum
    }
  }
}
</script>

<style>

</style>