<template>
  <div class="wrapper_person_reg">
    <div class="person_reg">
      <div class="person_reg__form">
        <div class="person_reg__form__title title">
          {{ $t("registration") }}
        </div>
        <div class="person_reg__form__subtitle">
          {{ $t("registration_subtitle") }}
        </div>
        <el-form
          class="person_reg__form__form"
          :model="formData"
          :rules="rules"
          ref="regForm"
          label-position="top"
          size="small"
        >
          <div class="form__row">
            <el-form-item
              class="form__row__item"
              :label="$t('choose_country')"
              prop="country"
            >
              <el-select v-model="formData.country" placeholder="">
                <el-option
                  v-for="(country, k) in countries"
                  :label="country.label"
                  :value="country.value"
                  :key="`${k}_country`"
                />
              </el-select>
            </el-form-item>

            <el-form-item
              class="form__row__item"
              :label="$t('choose_role')"
              prop="personRole"
            >
              <el-select v-model="formData.personRole" placeholder="">
                <el-option
                  v-for="(item, k) in roleOptions"
                  :label="item.label"
                  :value="item.value"
                  :key="`${k}_role`"
                />
              </el-select>
            </el-form-item>
          </div>

          <div class="form__row">
            <el-form-item
              class="form__row__item"
              :label="$t('name')"
              prop="name"
            >
              <el-input v-model="formData.name" />
            </el-form-item>
            <el-form-item
              class="form__row__item"
              :label="$t('surname')"
              prop="surname"
            >
              <el-input v-model="formData.surname" />
            </el-form-item>
          </div>

          <div class="form__row">
            <el-form-item
              class="form__row__item"
              :label="$t('phone_number')"
              prop="phoneNum"
            >
              <el-input v-model="formData.phoneNum" />
            </el-form-item>
            <el-form-item
              class="form__row__item"
              :label="$t('email')"
              prop="email"
            >
              <el-input v-model="formData.email" />
            </el-form-item>
          </div>

          <div class="form__row">
            <el-form-item
              class="form__row__item"
              :label="$t('password')"
              prop="password"
            >
              <el-input v-model="formData.password" />
            </el-form-item>

            <el-form-item
              class="form__row__item"
              :label="$t('password_check')"
              prop="passwordCheck"
            >
              <el-input v-model="formData.passwordCheck" />
            </el-form-item>
          </div>

          <div class="form__row checkbox">
            <el-form-item class="form__row__item_checkbox" prop="newsAgree">
              <el-checkbox v-model="formData.newsAgree">
                {{ $t("get_adbo_posts") }}
              </el-checkbox>
            </el-form-item>
          </div>

          <div class="form__row_complex">
            <el-form-item class="form__row_complex__item" prop="rulesAgree">
              <el-checkbox v-model="formData.rulesAgree">
                {{ $t("i_get_") }}
              </el-checkbox>
            </el-form-item>
            <div
              class="form__row_complex__item__inline_link"
              @click="handleClickTermsOfUse"
            >
              {{ $t("_terms_of_use") }}
            </div>
          </div>

          <div class="form__row">
            <el-button
              class="form__row__button_submit"
              type="primary"
              @click="handleSubmit('regForm')"
            >
              {{ $t("reg_in") }}
            </el-button>
          </div>
        </el-form>
      </div>

      <div class="person_reg__outer">
        <div class="person_reg__outer__title title">
          {{ $t("with_service") }}
        </div>

        <div class="person_reg__outer__services">
          <img class="svg" src="@/assets/images/facebook_w.svg" />
          <img class="svg" src="@/assets/images/vk_w.svg" />
          <img class="svg" src="@/assets/images/twitter_w.svg" />
          <img class="svg" src="@/assets/images/yandex_w.svg" />
          <img class="svg" src="@/assets/images/lnkdin_w.svg" />
          <img class="svg" src="@/assets/images/google_w.svg" />
        </div>

        <div class="person_reg__outer__login">
          <div class="person_reg__outer__login__question">
            {{ $t("have_account") }}
          </div>
          <div class="person_reg__outer__login__link">
            {{ $t("get_in") }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        name: "",
        surname: "",
        phoneNum: "",
        email: "",
        password: "",
        passwordCheck: "",
        country: "",
        personRole: "",
        newsAgree: false,
        rulesAgree: false
      }
    };
  },
  computed: {
    countries() {
      return [
        { label: this.$t("ru"), value: "ru" },
        { label: this.$t("us"), value: "us" }
      ];
    },
    roleOptions() {
      return [
        { label: this.$t("seller"), value: 1 },
        { label: this.$t("customer"), value: 2 }
      ];
    },
    rules() {
      const checkAgreement = (rule, value, callback) => {
        if (!value) {
          return callback(new Error(this.$t("need_accept_to_continue")));
        }
        callback();
      };
      return {
        name: [
          {
            required: true,
            message: this.$t("please_input_your_name"),
            trigger: "blur"
          }
        ],
        surname: [
          {
            required: true,
            message: this.$t("please_input_your_surname"),
            trigger: "blur"
          }
        ],
        phoneNum: [
          {
            required: true,
            message: this.$t("please_input_your_phone"),
            trigger: "blur"
          }
        ],
        email: [
          {
            required: true,
            message: this.$t("please_input_your_email"),
            trigger: "blur"
          }
        ],
        password: [
          {
            required: true,
            message: this.$t("please_input_your_pw"),
            trigger: "blur"
          }
        ],
        passwordCheck: [
          {
            required: true,
            message: this.$t("please_input_your_pw_check"),
            trigger: "blur"
          }
        ],
        personRole: [
          {
            required: true,
            message: this.$t("please_choose_your_role"),
            trigger: "change"
          }
        ],
        country: [
          {
            required: true,
            message: this.$t("please_choose_your_country"),
            trigger: "change"
          }
        ],
        rulesAgree: [
          {
            validator: checkAgreement,
            trigger: "change"
          }
        ]
      };
    }
  },
  methods: {
    handleClickTermsOfUse() {
      this.$router.push({ name: "error" });
    },
    handleSubmit(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$router.push({ name: "start" });
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

.el-form-item.form__row__item_checkbox.el-form-item--small {
  margin-top: 0;
  margin-bottom: 0;
}
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
.el-select.el-select--small {
  width: 100%;
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

.title {
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: $title_large;
  color: $text_prim;
}

.form__row.checkbox {
  margin-top: 64px;
  margin-bottom: 1px;
}
.form__row_complex {
  margin-top: 1px;
  margin-bottom: 66px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  &__item {
    max-width: 155px;
  }

  &__item__inline_link {
    box-sizing: border-box;
    height: 32px;
    margin-left: 5px;
    margin-bottom: 18px;
    padding-top: 6px;
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: $text_postnormal;
    letter-spacing: -0.3px;
    color: $border_blue;
    cursor: pointer;
  }
}

.form__row {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;

  &__item {
    width: 245px;

    @media (max-width: $screen_xxs) {
      width: 100%;
    }
  }

  &__button_submit {
    width: 190px;
    height: 35px;
    margin-top: 30px;
    margin-bottom: 30px;
    padding-top: 8px;
  }
}

.wrapper_person_reg {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: $back_main;
}
.person_reg {
  box-sizing: border-box;
  width: 100%;
  max-width: 1110px;
  height: 100%;
  min-height: 573px;
  margin-top: 71px;
  margin-bottom: 91px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  background-color: $white;
  border: 1px solid $border_prim;
  box-shadow: 0px 4px 6px $shadow_main;
  border-radius: 4px;

  @media (max-width: $screen_small) {
    flex-direction: column;
    max-width: 568px;
  }

  &__form {
    width: 100%;
    max-width: 568px;
    box-sizing: border-box;
    padding-top: 25px;
    padding-left: 30px;
    padding-right: 30px;
    border-right: 1px solid $border_prim;
    border-bottom: 1px solid $border_prim;

    &__subtitle {
      margin-top: 15px;
      margin-bottom: 37px;
      font-family: Lato;
      font-style: normal;
      font-weight: normal;
      font-size: $text_postnormal;
      line-height: 1.5;
      letter-spacing: -0.4px;
      color: $text_prim;
      opacity: 0.6;
    }
  }

  &__outer {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    margin-top: 60px;
    margin-bottom: 60px;
    flex: 1;
    align-self: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &__services .svg {
      width: 48px;
      height: 48px;
      margin-top: 27px;
      margin-left: 8px;
      margin-right: 8px;
      margin-bottom: 32px;

      @media (max-width: $screen_xxs) {
        margin-left: 3px;
        margin-right: 3px;
      }
    }

    &__login {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      font-family: Lato;
      font-style: normal;
      font-weight: normal;
      font-size: $text_postnormal;
      letter-spacing: -0.4px;
      color: $text_prim;

      &__link {
        margin-left: 5px;
        color: $border_blue;
      }
    }
  }
}
</style>
