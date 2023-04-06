<template>
  <ClientOnly>
    <TopNav :title='title' class='navbar'/>
    <div class='page'>
      <ExplodingHover />
      <div class='placeholder' style='height: 3000px'></div>
      <p style='margin-bottom: 20px; font-size: x-small; text-align: center;'>:)</p>
    </div>
  </ClientOnly>
</template>

<script lang='ts' setup>
import { ref, onMounted } from 'vue';
const title = ref('');

const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
const titleWordsLiteral =
`Somebody once told me the world is gonna roll me
I ain't the sharpest tool in the shed
She was looking kind of dumb with her finger and her thumb
In the shape of an "L" on her forehead
Well the years start coming and they don't stop coming
Fed to the rules and I hit the ground running
Didn't make sense not to live for fun
Your brain gets smart but your head gets dumb
So much to do so much to see
So what's wrong with taking the back streets?
You'll never know if you don't go
You'll never shine if you don't glow
Hey now you're an all-star get your game on go play
Hey now you're a rock star get the show on get paid
And all that glitters is gold
Only shooting stars break the mold
It's a cool place and they say it gets colder
You're bundled up now wait 'til you get older
But the meteor men beg to differ
Judging by the hole in the satellite picture
The ice we skate is getting pretty thin
The water's getting warm so you might as well swim
My world's on fire how about yours?
That's the way I like it and I'll never get bored
Hey now you're an all-star get your game on go play
Hey now you're a rock star get the show on get paid
All that glitters is gold
Only shooting stars break the mold
Hey now you're an all-star get your game on go play
Hey now you're a rock star get the show on get paid
And all that glitters is gold
Only shooting stars
Somebody once asked could I spare some change for gas?
I need to get myself away from this place
I said "Yup" what a concept
I could use a little fuel myself
And we could all use a little change
Well the years start coming and they don't stop coming
Fed to the rules and I hit the ground running
Didn't make sense not to live for fun
Your brain gets smart but your head gets dumb
So much to do so much to see
So what's wrong with taking the back streets?
You'll never know if you don't go
You'll never shine if you don't glow
Hey now you're an all-star get your game on go play
Hey now you're a rock star get the show on get paid
And all that glitters is gold
Only shooting stars break the mold
And all that glitters is gold
Only shooting stars break the mold`

let titleWords: string[] = [];

function fillTitleWordsArray() {
  titleWordsLiteral.split('\n').forEach(line => {
    line.split(' ').forEach((word) => {
      titleWords.push(word);
    });
  });
}

onMounted(() => {
  fillTitleWordsArray();
  let currentWord = 0;
  let counter = 0;
  let gotWord = false;
  setInterval(() =>{
    if (gotWord) {
      counter += 1;
      if (counter > 25) {
        gotWord = false;
        counter = 0;
      }
    } else {
      let newTitle = '';
      if (Math.random() < 0.025) {
        newTitle = titleWords[currentWord++];
        if (currentWord > titleWords.length - 1) {
          currentWord = 0;
        }
        gotWord = true;
      } else {
        const titleLength = Math.floor(Math.random()*7 + 3);
        for (let i=0; i<titleLength; i++) {
          const charToAdd = characters.charAt(Math.floor(Math.random() * characters.length));
          newTitle += charToAdd;
        }
      }
      title.value = newTitle;
    }
  }, 200)
})
</script>

<style lang='scss' scoped>
$navbarHeight: 40px;
.navbar {
  position: fixed;
  width: 100%;
  height: $navbarHeight;
  top: 0;
  left: 0;
  z-index: 999;
}

.page {
  margin-top: $navbarHeight + 30px;
}
</style>