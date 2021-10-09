<template>
  <div class="signup">
    <div class="signup-card">
      <h3 class="title">Sign Up</h3>
    </div>
  </div>
</template>

<script>
import {common} from "../shared/constants";
import { onMounted } from '@vue/runtime-core';

export default {
  name: 'SignUp',
  setup() {
    onMounted(() => {
      document.title = `Sign Up - ${common.APP_NAME}`
    })
  }
}
</script>


<style lang="scss" scoped>
@import "../shared/scss/variables.scss";
@import "../shared/scss/animations.scss";



.signup {
  background: $bg-body;
  min-height: 100vh;
  .signup-card {
      margin: 0 auto;
      padding: 1rem;
      width: 40vw;
      min-width: 350px;
      text-align: center;
      position: relative;
      border-radius: 10px;
      animation: 2s ease-out 0s 1 heightAnimation;
      height: 300px;
      overflow: hidden;
      top: 30vh;
      background-color: $bg-light;
      .title {
        color: $text-dark;
      }
  }
}

</style>
