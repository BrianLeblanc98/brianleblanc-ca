<template>
  <nav>
    <div class='section' id='home'>
      <NuxtLink class='link' to='/'>
        <font-awesome-icon icon='fa-solid fa-home' class='fa-fw fa-lg'/>
      </NuxtLink>
      <div class='link'>
        <NuxtLink v-if='user' to='/account'>
          <img :src='(user.photoURL as any)' class='avatar'>
        </NuxtLink>
        <font-awesome-icon v-else @click='signIn' icon='fa-solid fa-user' class='fa-fw fa-lg'/>
      </div>
    </div>
    <div class='section' id='title'>
      <span class='title'>{{ $props.title }}</span>
    </div>
    <div class='section' id='social'>
      <NuxtLink class='link' to='https://github.com/BrianLeblanc98/brianleblanc-ca' target='_blank'>
        <font-awesome-icon icon='fa-brands fa-github' class='fa-fw fa-lg'/>
      </NuxtLink>
      <NuxtLink class='link' to='https://twitter.com/brianleblanc98' target='_blank'>
        <font-awesome-icon icon='fa-brands fa-twitter' class='fa-fw fa-lg'/>
      </NuxtLink>
      <NuxtLink class='link' to='https://www.linkedin.com/in/brianleblanc98/' target='_blank'>
        <font-awesome-icon icon='fa-brands fa-linkedin' class='fa-fw fa-lg'/>
      </NuxtLink>
    </div>
  </nav>
</template>

<script lang='ts' setup>
const { user, fireBaseSignIn } = useFireBaseAuth();

defineProps(['title']);

function signIn() {
  fireBaseSignIn();
}
</script>

<style lang='scss' scoped>
nav {
  // * {
  //   box-sizing: border-box;
  // }
  display: flex;
  width: 100%;
  background-color: black;
  border-bottom: 1px solid rgb(50, 50, 50);
  opacity: 0.9;

  .section {
    display: flex;
    gap: 5px;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    .link {
      color: rgb(75, 75, 75);
      .avatar {
        vertical-align: middle;
        width: 22px;
        height: 22px;
        border-radius: 50%;
      }
    }

    &#home {
      flex-basis: 10%;
      justify-content: flex-start;
    }

    &#title {
      flex-basis: 80%;
    }

    &#social {
      flex-basis: 10%;
      justify-content: flex-end;
    }
  }
}
</style>