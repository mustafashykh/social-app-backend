<template>
  <div>
    <div class="login">
      <div class="login-card">
        <h3 class="title">Login</h3>
        <a-form
          layout="vertical"
          :model="this.formState"
          @finish="handleFinish"
          @finishFailed="handleFinishFailed"
        >
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
            <button
              type="primary"
              html-type="submit"
              :class="[isFormValid ? 'active' : 'inactive', 'submit-btn']"
              :disabled="!isFormValid"
            >
              <span v-if="isFormValid" class="text-light">Submit</span> <ArrowRightOutlined class="icon" />
            </button>
          </a-form-item>
        </a-form>
      </div>
    </div>
  </div>
</template>

<script>
import { common } from "../shared/constants";
import { onMounted } from "@vue/runtime-core";
import {
  LockOutlined,
  MailOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons-vue";

export default {
  name: "SignUp",
  components: {
    LockOutlined,
    MailOutlined,
    ArrowRightOutlined,
  },

  setup() {
    onMounted(() => {
      document.title = `Sign Up - ${common.APP_NAME}`;
    });
  },

  data() {
    return {
      formState: {
        email: "",
        password: "",
      }
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
  
  computed: {
    isFormValid () {
      const { email, password } = this.formState;
      return email && password;
    },
  }
};
</script>


<style lang="scss" scoped>
@import "../shared/scss/variables.scss";
@import "../shared/scss/animations.scss";

$height: 250px;
@include heightAnimation(autoHeight, $height);
@include colorChange(colorSwitch, $bg-light, $bg-dark);

.login {
  background: $bg-body;
  min-height: 100vh;
  .login-card {
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

  .submit-btn {
    padding: 0.75rem 1rem;
    border-radius: 15px;
    background: linear-gradient(to right, $bg-dark 50%, $bg-light 50%);
    background-size: 200% 100%;
    background-position: right bottom;
    transition: all 0.7s ease-in-out;
    border: 1px solid rgba(0, 0, 0, 0.25);
    .icon {
      font-size: 1rem;
      position: relative;
      color: rgba(0, 0, 0, 0.25);
      top: -2.5px;
    }
  }

  .inactive {
    background-color: $bg-light;
  }

  .active {
    background-position: left bottom;
    .icon {
      color: $text-light;
    }
  }
}

html,
body {
  background-color: $bg-body;
}
</style>
