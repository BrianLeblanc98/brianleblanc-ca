<template>
  <div class='content'>
    <h2 class='text_shadows'>HEY {{ $route.params.name }}. YOU LOST THE GAME :)</h2>
  </div>
</template>

<style lang='scss' scoped>
$color-primary: #3b8af8;
$color-secondary: #69A1F0;
$color-tertiary: #7EAEF2;
$color-quaternary: #90BAF5;
$color-quinary: #A2C4F5;

.content {
  display: flex;
  align-content: center;
  justify-content: center;

  min-height: 100vh;
  font-family: canada-type-gibson, sans-serif;
  font-weight: 300;
  font-size: 1.25rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  background-color: #1a1a27;
}

.text_shadows {
  text-shadow: 3px 3px 0 $color-secondary, 6px 6px 0 $color-tertiary,
    9px 9px $color-quaternary, 12px 12px 0 $color-quinary;
  font-family: bungee, sans-serif;
  font-weight: 400;
  text-transform: uppercase;
  font-size: calc(2rem + 5vw);
  text-align: center;
  margin: 0;
  color: $color-primary;
  animation: shadows 1.2s ease-in infinite, move 1.2s ease-in infinite;
  letter-spacing: 0.4rem;
}

@keyframes shadows {
  0% {
    text-shadow: none;
  }
  10% {
    text-shadow: 3px 3px 0 $color-secondary;
  }
  20% {
    text-shadow: 3px 3px 0 $color-secondary,
      6px 6px 0 $color-tertiary;
  }
  30% {
    text-shadow: 3px 3px 0 $color-secondary,
      6px 6px 0 $color-tertiary, 9px 9px $color-quaternary;
  }
  40% {
    text-shadow: 3px 3px 0 $color-secondary,
      6px 6px 0 $color-tertiary, 9px 9px $color-quaternary,
      12px 12px 0 $color-quinary;
  }
  50% {
    text-shadow: 3px 3px 0 $color-secondary,
      6px 6px 0 $color-tertiary, 9px 9px $color-quaternary,
      12px 12px 0 $color-quinary;
  }
  60% {
    text-shadow: 3px 3px 0 $color-secondary,
      6px 6px 0 $color-tertiary, 9px 9px $color-quaternary,
      12px 12px 0 $color-quinary;
  }
  70% {
    text-shadow: 3px 3px 0 $color-secondary,
      6px 6px 0 $color-tertiary, 9px 9px $color-quaternary;
  }
  80% {
    text-shadow: 3px 3px 0 $color-secondary,
      6px 6px 0 $color-tertiary;
  }
  90% {
    text-shadow: 3px 3px 0 $color-secondary;
  }
  100% {
    text-shadow: none;
  }
}

@keyframes move {
  0% {
    transform: translate(0px, 0px);
  }
  40% {
    transform: translate(-12px, -12px);
  }
  50% {
    transform: translate(-12px, -12px);
  }
  60% {
    transform: translate(-12px, -12px);
  }
  100% {
    transform: translate(0px, 0px);
  }
}

</style>