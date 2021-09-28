<template>
  <div>
    <div class="textarea">
      <div class="storyTextarea-icon-box">
        <img class="listening-icon" src="@/assets/icons/listening.png" alt="">
      </div>
      </div>    
  </div>
</template>

<script>
export default {
  name: 'storyTextarea'
}
</script>

<style>
    .textarea {
      height: 50px;
      width: 91vw;
      border: 1px solid black;
      position: absolute;
      left: 5%;
      right: 5%;
      bottom: 2%;
      margin: auto 0;
      background-color: #f5f5f5;
      border-radius: 12px;
  }

  .storyTextarea-icon-box {
    position: relative;
    height: 50px;
    width: 90vw;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 2px;
  }

  .listening-icon{
    max-width: 30px;
    max-height: 30px;
    position: relative;
    display: flex;
  }
</style>