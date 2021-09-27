<template>
  <div class="castle-box">
    <div class="to-back">←</div>
    <div class="middle-boxes">
      <div class="icon-box">
        <div
          style="width: 90px; height: 90px; display: inline-block; margin: 1rem"
          v-for="(item, index) in imgs"
          :key="index"
          v-on:mouseout="addVoca(index)"
        >
          <movable v-bind:id="index"
            ><img
              style="width: 90px; height: 90px"
              :src="item[0]"
              :alt="item[1]"
          /></movable>
        </div>
      </div>
      <div class="right-boxes">
        <div id="fullImg" class="full-img">[전체그림]</div>
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
import $ from "jquery";
import apple from "@/assets/icons/CastleStory/apple.png";
import banana from "@/assets/icons/CastleStory/banana.png";
import cake from "@/assets/icons/CastleStory/cake.png";
import chair from "@/assets/icons/CastleStory/chair.png";
import cherry from "@/assets/icons/CastleStory/cherry.png";
import clock from "@/assets/icons/CastleStory/clock.png";
import dwarfGreen from "@/assets/icons/CastleStory/dwarf-green.png";
import dwarfBlue from "@/assets/icons/CastleStory/dwarf-blue.png";
import dwarfOrange from "@/assets/icons/CastleStory/dwarf-orange.png";
import dwarfPurple from "@/assets/icons/CastleStory/dwarf-purple.png";
import dwarfRed from "@/assets/icons/CastleStory/dwarf-red.png";
import dwarfSky from "@/assets/icons/CastleStory/dwarf-sky.png";
import dwarfYellow from "@/assets/icons/CastleStory/dwarf-yellow.png";
import flower from "@/assets/icons/CastleStory/flower.png";
import greenfruit from "@/assets/icons/CastleStory/greenfruit.png";
import king from "@/assets/icons/CastleStory/king.png";
import mango from "@/assets/icons/CastleStory/mango.png";
import plate from "@/assets/icons/CastleStory/plate.png";
import princess from "@/assets/icons/CastleStory/princess.png";
import pumkin from "@/assets/icons/CastleStory/pumkin.png";
import servant from "@/assets/icons/CastleStory/servant.png";
import strawberry from "@/assets/icons/CastleStory/strawberry.png";

export default {
  data() {
    return {
      imgs: [
        [apple, "apple"],
        [banana, "banana"],
        [cake, "cake"],
        [chair, "chair"],
        [cherry, "cherry"],
        [clock, "clock"],
        [dwarfGreen, "dwarf-green"],
        [dwarfBlue, "dwarf-blue"],
        [dwarfOrange, "dwarf-orange"],
        [dwarfPurple, "dwarf-purple"],
        [dwarfRed, "dwarf-red"],
        [dwarfSky, "dwarf-sky"],
        [dwarfYellow, "dwarf-yellow"],
        [flower, "flower"],
        [greenfruit, "greenfruit"],
        [king, "king"],
        [mango, "mango"],
        [plate, "plate"],
        [princess, "princess"],
        [pumkin, "pumkin"],
        [servant, "servant"],
        [strawberry, "strawberry"],
      ],
      vocas: [],
      location: [],
    };
  },
  methods: {
    addVoca(index) {
      console.log("실행");
      const icon = document.getElementById(index);

      const iconTop = icon.getBoundingClientRect().top;
      const iconBottom = icon.getBoundingClientRect().bottom;
      const iconLeft = icon.getBoundingClientRect().left;
      const iconRight = icon.getBoundingClientRect().right;

      const paper = document.getElementById("fullImg");

      const paperTop = paper.getBoundingClientRect().top;
      const paperBottom = paper.getBoundingClientRect().bottom;
      const paperLeft = paper.getBoundingClientRect().left;
      const paperRight = paper.getBoundingClientRect().right;

      if (
        iconTop > paperTop &&
        iconBottom < paperBottom &&
        iconLeft > paperLeft &&
        iconRight < paperRight
      ) {
        !this.vocas.includes(this.imgs[index][1])
          ? this.vocas.push(this.imgs[index][1])
          : console.log();
        this.location[index]["left"] = $(`#${index}`).offset()["left"];
        this.location[index]["top"] = $(`#${index}`).offset()["top"];
      } else {
        $(`#${index}`).offset({
          left: this.location[index]["left"],
          top: this.location[index]["top"],
        });
        console.log("실패");
      }
      console.log("턴 끝/////");
    },
    addLocation() {
      for (let i = 0; i < this.imgs.length; i++) {
        this.location.push({
          left: $(`#${i}`).offset()["left"],
          top: $(`#${i}`).offset()["top"],
        });
      }
    },
  },
  mounted() {
    this.addLocation();
    console.log(this.location);
  },
};
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
  width: 30%;
  overflow-y: auto;
  overflow-x: hidden;
  z-index: 0;
}

.right-boxes {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 60%;
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
