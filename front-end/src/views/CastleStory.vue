<template>
  <div class="castle-box">
    <div class="to-back">←</div>
    <div class="middle-boxes">
      <div class="icon-box">[아이콘 박스]</div>
      <div class="right-boxes">
        <div class="full-img">[전체그림]</div>
        <div class="small-boxes">
          <div class="prev-sentence">
            "첫 그림이라 이전의 문장이 아직 없네요. 그럼 문장을 한번
            만들어볼까요?"
          </div>
          <div class="complete-button">완성</div>
        </div>
        <div class="sentence-box">"지금은 무도회장이 텅 비었네요."</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.castle-box {
  display: flex;
  flex-direction: column;
}

.to-back {
  width: 5%;
  height: 4rem;
  font-size: 3rem;
}

.middle-boxes {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: 2rem 4rem;
  height: 50rem;
}

.icon-box {
  border: 1px solid black;
  background: #c4c4c4;
  width: 20%;
}

.right-boxes {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 70%;
}

.full-img {
  border: 1px solid black;
  border-radius: 30px;
  background-image: url("../assets/background/ballroom2.png");
  height: 40rem;
}

.small-boxes {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.prev-sentence {
  height: 3rem;
  width: 85%;
  padding-top: 0.3rem;
  font-size: 2rem;
  color: #c4c4c4;
}

.complete-button {
  border: 1px solid black;
  border-radius: 30px;
  background: orange;
  padding-top: 0.5rem;
  font-size: 1.5rem;
  height: 3rem;
  width: 10%;
}

.sentence-box {
  border: 1px solid black;
  border-radius: 10px;
  background: white;
  height: 4rem;
  font-size: 2rem;
  padding-top: 0.5rem;
}
</style>
