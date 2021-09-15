<template>
  <a-layout-header class="header">
      <div class="logo" />
      <a-menu
        theme="dark"
        mode="horizontal"
        v-model:selectedKeys="selectedKeys1"
        class="menu"
      >
        <a-menu-item key="Login">Login</a-menu-item>
        <a-menu-item key="Signup">Sign Up</a-menu-item>
      </a-menu>
    </a-layout-header>
</template>

<script>
export default {
  name: 'TheHeader'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../shared/scss/variables.scss";

.header {
  height: 64.5px;
  text-align: center;
  background: #001529;
  border-bottom: 0.5px solid $border-color;
}

.menu {
  line-height: 64px; 
  justify-content: center;
}
</style>
