<template>
  <div>
    <h1>Story</h1>
    현재 {{ storyNum }} 페이지 입니다.
  </div>
</template>

<script>
export default {
  computed: {
    storyNum() {
      return this.$route.params.storyNum
    }
  }
}
</script>

<style>

</style>