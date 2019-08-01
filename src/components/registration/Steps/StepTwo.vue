<template>
  <div class="steps_2">
    <div class="steps_2__title">
      {{ $t("bank_account_data") }}
    </div>

    <div class="steps_2__subtitle">
      {{ $t("reg_step_2_subtitle") }}
    </div>

    <div class="steps_2__form">
      <div class="steps_2__form__row">
        <div class="steps_2__form__row__1">
          <div class="steps_2__form__row__1__label input_label">
            {{ $t("account") }}
          </div>
          <div class="steps_2__form__row__1__input input_input">
            <el-input v-model="account" clearable size="small" />
          </div>
        </div>
        <div class="steps_2__form__row__2">
          <div class="steps_2__form__row__2__label input_label">
            {{ $t("bank_full_name") }}
          </div>
          <div class="steps_2__form__row__2__input input_input">
            <el-input v-model="bankName" clearable size="small" />
          </div>
        </div>
      </div>

      <div class="steps_2__form__row">
        <div class="steps_2__form__row__1">
          <div class="steps_2__form__row__1__label input_label">
            {{ $t("bic") }}
          </div>
          <div class="steps_2__form__row__1__input input_input">
            <el-input v-model="bic" clearable size="small" />
          </div>
        </div>
        <div class="steps_2__form__row__2">
          <div class="steps_1__lower__row__2__label input_label">
            {{ $t("correspond_account") }}
          </div>
          <div class="steps_2__form__row__2__input input_input">
            <el-input v-model="corrAccount" clearable size="small" />
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
      account: "",
      corrAccount: "",
      bankName: "",
      bic: ""
    };
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";

.input_label {
  margin-bottom: 5px;
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: $text_postnormal;
  letter-spacing: -0.3px;
  color: $text_sec;
}
.input_input {
  margin-bottom: 21px;
}

.steps_2 {
  width: 100%;
  font-family: Lato;
  font-style: normal;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  &__title {
    font-weight: bold;
    font-size: $title_large;
    line-height: 1.48;
    color: $text_prim;
  }

  &__subtitle {
    width: 95%;
    max-width: 462px;
    margin-top: 10px;
    margin-bottom: 37px;
    font-weight: normal;
    font-size: $text_postnormal;
    line-height: 1.5;
    letter-spacing: -0.4px;
    color: $text_prim;
    opacity: 0.6;
    text-align: center;
  }

  &__form {
    box-sizing: border-box;
    width: 100%;
    padding-top: 20px;
    padding-bottom: 40px;
    padding-left: 31px;
    padding-right: 31px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-bottom: 1px solid $back_main;

    &__row {
      width: 100%;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;

      &__1 {
        flex: 1;
        min-width: 250px;
        margin-right: 10px;

        @media (max-width: $screen_xxs) {
          margin-right: 0;
        }
      }

      &__2 {
        flex: 1;
        min-width: 250px;
        margin-left: 10px;

        @media (max-width: $screen_xxs) {
          margin-left: 0;
        }
      }
    }
  }
}
</style>
