<template>
  <a-layout-header class="header">
      <div class="logo" />
      <a-menu
        theme="dark"
        mode="horizontal"
        :selectedKeys="[]"
        class="menu"
      >
        <a-menu-item key="Login">
          <router-link :to="{ name: routes.LOGIN }">Login</router-link>
        </a-menu-item>
        <a-menu-item key="Signup">
          <router-link :to="{ name: routes.SIGNUP }">Sign Up</router-link>
        </a-menu-item>
      </a-menu>
    </a-layout-header>
</template>

<script>
import { routes } from '../shared/constants';

export default {
  name: 'TheHeader',
  data() {
    return {
      routes
    }
  }
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
