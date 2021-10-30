<template>
  <div>
    <div class="signup">
      <div class="signup-card">
        <h3 class="title">Sign Up</h3>
        <a-form
          layout="vertical"
          :model="this.formState"
          @finish="handleFinish"
          @finishFailed="handleFinishFailed"
        >
          <a-form-item>
            <a-input
              v-model:value="this.formState.firstName"
              placeholder="First Name"
            >
              <template #prefix
                ><UserOutlined style="color: rgba(0, 0, 0, 0.25)"
              /></template>
            </a-input>
          </a-form-item>
          <a-form-item>
            <a-input
              v-model:value="this.formState.lastName"
              placeholder="Last Name"
            >
              <template #prefix
                ><UserOutlined style="color: rgba(0, 0, 0, 0.25)"
              /></template>
            </a-input>
          </a-form-item>
          <a-form-item>
            <a-input
              v-model:value="this.formState.email"
              placeholder="abc@xyz.com"
            >
              <template #prefix
                ><MailOutlined style="color: rgba(0, 0, 0, 0.25)"
              /></template>
            </a-input>
          </a-form-item>
          <a-form-item>
            <a-input
              v-model:value="this.formState.password"
              type="password"
              placeholder="Password"
            >
              <template #prefix
                ><LockOutlined style="color: rgba(0, 0, 0, 0.25)"
              /></template>
            </a-input>
          </a-form-item>
          <a-form-item>
            <a-button
              type="primary"
              html-type="submit"
              :disabled="
                this.formState.user === '' || this.formState.password === ''
              "
            >
              Sign Up
            </a-button>
          </a-form-item>
        </a-form>
      </div>
    </div>
  </div>
</template>

<script>
import { common } from "../shared/constants";
import { onMounted } from "@vue/runtime-core";
import { UserOutlined, LockOutlined, MailOutlined } from "@ant-design/icons-vue";

export default {
  name: "SignUp",
  components: {
    UserOutlined,
    LockOutlined,
    MailOutlined
  },

  setup() {
    onMounted(() => {
      document.title = `Sign Up - ${common.APP_NAME}`;
    });
  },

  data() {
    return {
      formState: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
      },
    };
  },

  methods: {
    handleFinish(values) {
      console.log(values, this.formState);
    },

    handleFinishFailed(errors) {
      console.log(errors);
    },
  },
};
</script>


<style lang="scss" scoped>
@import "../shared/scss/variables.scss";
@import "../shared/scss/animations.scss";

$height: 350px;
@include heightAnimation(autoHeight, $height);

.signup {
  background: $bg-body;
  min-height: 100vh;
  .signup-card {
    margin: 0 auto;
    padding: 1rem;
    width: 40vw;
    min-width: 320px;
    text-align: center;
    position: relative;
    border-radius: 10px;
    animation: 2s ease-out 0s 1 autoHeight;
    height: $height;
    overflow: hidden;
    top: 30vh;
    background-color: $bg-light;
    .title {
      margin-bottom: 1.5rem;
      color: $text-dark;
    }
  }
}

html,
body {
  background-color: $bg-body;
}
</style>
