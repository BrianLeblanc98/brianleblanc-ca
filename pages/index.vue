<template>
  <div class='body'>
    <div id='text'>
      <div
        class='line'
        data-id='0'
        @mouseover='mouseOverLine'
        @mouseleave='mouseLeaveLine'
        :class='classLine(0)'
      >
        <p class='word'>
          <span class='letter' :style='styleLetter(0)'>B</span>
          <span class='letter' :style='styleLetter(0)'>r</span>
          <span class='letter' :style='styleLetter(0)'>i</span>
          <span class='letter' :style='styleLetter(0)'>a</span>
          <span class='letter' :style='styleLetter(0)'>n</span>
        </p>
        <p class='word'>
          <span class='letter' :style='styleLetter(0)'>L</span>
          <span class='letter' :style='styleLetter(0)'>e</span>
          <span class='letter' :style='styleLetter(0)'>B</span>
          <span class='letter' :style='styleLetter(0)'>l</span>
          <span class='letter' :style='styleLetter(0)'>a</span>
          <span class='letter' :style='styleLetter(0)'>n</span>
          <span class='letter' :style='styleLetter(0)'>c</span>
        </p>
      </div>
      <div
        class='line'
        data-id='1'
        @mouseover='mouseOverLine'
        @mouseleave='mouseLeaveLine'
        :class='classLine(1)'
      >
        <p class='word'>
          <span class='letter' :style='styleLetter(1)'>P</span>
          <span class='letter' :style='styleLetter(1)'>e</span>
          <span class='letter' :style='styleLetter(1)'>r</span>
          <span class='letter' :style='styleLetter(1)'>s</span>
          <span class='letter' :style='styleLetter(1)'>o</span>
          <span class='letter' :style='styleLetter(1)'>n</span>
          <span class='letter' :style='styleLetter(1)'>a</span>
          <span class='letter' :style='styleLetter(1)'>l</span>
        </p>
        <p class='word'>
          <span class='letter' :style='styleLetter(1)'>W</span>
          <span class='letter' :style='styleLetter(1)'>e</span>
          <span class='letter' :style='styleLetter(1)'>b</span>
          <span class='letter' :style='styleLetter(1)'>s</span>
          <span class='letter' :style='styleLetter(1)'>i</span>
          <span class='letter' :style='styleLetter(1)'>t</span>
          <span class='letter' :style='styleLetter(1)'>e</span>
        </p>
      </div>
      <div
        class='line'
        data-id='2'
        @mouseover='mouseOverLine'
        @mouseleave='mouseLeaveLine'
        :class='classLine(2)'
      >
        <p class='word'>
          <span class='letter' :style='styleLetter(2)'>W</span>
          <span class='letter' :style='styleLetter(2)'>o</span>
          <span class='letter' :style='styleLetter(2)'>w</span>
        </p>
        <p class='word'>
          <span class='letter' :style='styleLetter(2)'>F</span>
          <span class='letter' :style='styleLetter(2)'>a</span>
          <span class='letter' :style='styleLetter(2)'>n</span>
          <span class='letter' :style='styleLetter(2)'>c</span>
          <span class='letter' :style='styleLetter(2)'>y</span>
        </p>
        <p class='word'>
          <span class='letter' :style='styleLetter(2)'>C</span>
          <span class='letter' :style='styleLetter(2)'>S</span>
          <span class='letter' :style='styleLetter(2)'>S</span>
        </p>
      </div>
    </div>

    <div id='text2'>
      <p>More coming soon...</p>
    </div>
  </div>
</template>

<script lang='ts' setup>
import { ref } from 'vue';

const selectedLineID = ref(-1);
let hasLeft = true;

function classLine(lineID: number) {
  return reactive({
    active: selectedLineID.value == lineID || selectedLineID.value == -1,
    inActive: selectedLineID.value != lineID && selectedLineID.value != -1
  });
}

function styleLetter(lineID: number) {
  if (selectedLineID.value == lineID) {
    let translateX = Math.floor(Math.random() * 300 - 150);
    let translateY = Math.floor(Math.random() * 80 - 40);
    let rotate = Math.floor(Math.random() * 180 - 90)
    return reactive({
      transform: `translate(${translateX}%, ${translateY}%) rotate(${rotate}deg)`
    });
  } else {
    return {};
  }
}

function mouseOverLine(e: any) {
  if (!hasLeft) return;
  hasLeft = false;

  let line = e.target;

  while (!line.className.includes('line')) {
    line = line.parentElement;
  }

  selectedLineID.value = line.dataset.id;
}

function mouseLeaveLine() {
  hasLeft = true;
  selectedLineID.value = -1;
}
</script>

<style lang='scss' scoped>
.body {
  #text {
    margin: auto;
    margin-top: 5vh;
    width: 70vw;

    p {
      color: white;
      font-family: 'Rubik', sans-serif;
      text-transform: uppercase;
      font-size: 6vw;
      margin: 0;
      cursor: default;
    }

    .line {
      display: flex;
      justify-content: space-between;
      &.active {
        opacity: 1;
      }
      &.inActive {
        opacity: 0.2;
      }

      .word {
        .letter {
          display: inline-block;
          transition: transform 350ms ease;
        }
      }
    }
  }

  #text2 {
    margin: auto;
    margin-top: 5vh;
    width: 70vw;

    p {
      color: grey;
      font-family: 'Rubik', sans-serif;
      // text-transform: uppercase;
      font-size: 4vw;
      margin: 0;
      cursor: default;
    }
  }
}
</style>