<template>
  <ClientOnly>
    <TopNav title='Account Info' class='navbar'/>
    <div v-if='user' class='page'>
      <div class='user-info'>
        <div class='user-name'>
          {{ user.displayName }}
        </div>
        <div class='user-email'>
          {{ user.email }}
        </div>
      </div>
      <button v-if='user' @click='signOut' class='sign-out'>
        Sign out
      </button>
    </div>
    <div v-else class='page'>
      <div class='user-info'>
        You are signed out
      </div>
    </div>
  </ClientOnly>
</template>

<script lang='ts' setup>
const { user, fireBaseSignOut } = useFireBaseAuth();

function signOut() {
  fireBaseSignOut();
}
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
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  .user-info {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .sign-out {
    width: 100px;
    background-color: #f44336;
    color: white;
    border-radius: 8px;
    border: none;
    text-align: center;
    font-size: 16px;
  }
}
</style>