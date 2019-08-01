<template>
  <div class="login">
    <div class="login__inner">
      <div class="login__inner__form">
        <div class="login__inner__form__title">
          {{ $t("enter") }}
        </div>

        <el-form
          class="login__inner__form__form"
          :model="loginData"
          :rules="rules"
          ref="loginForm"
          label-position="top"
          size="small"
        >
          <el-form-item
            class="login__inner__form__form__row__item"
            :label="$t('login_n')"
            prop="login"
          >
            <el-input v-model="loginData.login" clearable />
          </el-form-item>

          <el-form-item
            class="login__inner__form__form__row__item"
            :label="$t('password')"
            prop="password"
          >
            <el-input v-model="loginData.password" clearable show-password />
          </el-form-item>

          <el-form-item class="login__inner__form__checkbox" prop="remember">
            <el-checkbox v-model="loginData.remember">
              {{ $t("remember_me") }}
            </el-checkbox>
          </el-form-item>

          <el-button
            class="login__inner__form__restore"
            type="text"
            @click="handleRestorePassword"
          >
            {{ $t("restore_password") }}
          </el-button>
          <el-button
            class="login__inner__form__enter"
            type="primary"
            size="small"
            @click="handleSubmitLogin('loginForm')"
          >
            {{ $t("login") }}
          </el-button>
        </el-form>
      </div>

      <div class="login__inner__footer">
        <div class="login__inner__footer__title">
          {{ $t("enter_with_service") }}
        </div>

        <div class="login__inner__footer__services">
          <img src="@/assets/images/facebook_w.svg" />
          <img src="@/assets/images/vk_w.svg" />
          <img src="@/assets/images/twitter_w.svg" />
          <img src="@/assets/images/yandex_w.svg" />
          <img src="@/assets/images/lnkdin_w.svg" />
          <img src="@/assets/images/google_w.svg" />
        </div>

        <div class="login__inner__footer__reg">
          <div class="login__inner__footer__reg__question">
            {{ $t("no_account") }}
          </div>

          <router-link
            class="login__inner__footer__reg__link"
            to="/registration/person"
          >
            {{ $t("reg_in") }}
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginComp",
  data() {
    return {
      loginData: {
        login: "",
        password: "",
        remember: false
      }
    };
  },
  computed: {
    rules() {
      const checkLoginPassword = (rule, value, callback) => {
        // if (!value) {
        //   return callback(new Error(this.$t("need_accept_to_continue")));
        // }
        callback(new Error(this.$t("Just imitation of backend reject")));
        // callback();
      };
      return {
        login: [
          {
            required: true,
            message: this.$t("please_input_your_login"),
            trigger: "blur"
          },
          {
            validator: checkLoginPassword,
            trigger: "change"
          }
        ],
        password: [
          {
            required: true,
            message: this.$t("please_input_your_pw"),
            trigger: "blur"
          },
          {
            validator: checkLoginPassword,
            trigger: "change"
          }
        ]
      };
    }
  },
  methods: {
    handleRestorePassword() {
      this.$router.push({ name: "error" });
    },
    handleSubmitLogin(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          // this.$router.push({ name: "start" });
        } else {
          return false;
        }
      });
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/styles/_variables.scss";

label.el-form-item__label {
  padding-bottom: 2px;
  height: 25px;
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: $text_postnormal;
  letter-spacing: -0.3px;
  color: $text_sec;
}
.el-checkbox__label {
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: $text_postnormal;
  letter-spacing: -0.3px;
  color: $text_sec;
}
.el-form-item__error {
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  letter-spacing: -0.15px;
}
</style>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";

.login {
  width: 100%;
  height: 100%;
  min-height: 813px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: $back_main;

  &__inner {
    width: 307px;
    height: 556px;
    margin-top: 103px;

    &__form {
      box-sizing: border-box;
      width: 100%;
      padding-left: 30px;
      padding-right: 30px;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      background-color: $white;

      &__title {
        margin-top: 29px;
        margin-bottom: 24px;
        align-self: center;
        font-family: Lato;
        font-style: normal;
        font-weight: bold;
        font-size: $title_large;
        line-height: 1.48;
        color: $text_prim;
      }

      &__checkbox {
        margin-top: 19px;
      }

      &__restore {
        width: 100%;
        text-align: center;
        margin-top: 36px;
      }

      &__enter {
        width: 245px;
        align-self: center;
        margin-top: 15px;
        margin-bottom: 31px;
      }
    }

    &__footer {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;

      &__title {
        margin-top: 38px;
        font-family: Lato;
        font-style: normal;
        font-weight: normal;
        font-size: $text_postnormal;
        line-height: 1.36;
        text-align: center;
        letter-spacing: -0.3px;
        color: $text_sec;
        opacity: 0.5;
      }

      &__services {
        width: 308px;
        margin-top: 13px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
      }

      &__reg {
        margin-top: 21px;
        margin-bottom: 83px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        font-family: Lato;
        font-style: normal;
        font-weight: normal;
        font-size: $text_postnormal;
        line-height: 1.36;
        text-align: center;
        letter-spacing: -0.3px;
        color: $text_prim;

        &__link {
          margin-left: 4px;
          text-decoration: none;
          color: $link_blue;
        }
      }
    }
  }
}
</style>
