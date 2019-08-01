<template>
  <div class="steps__1">
    <div class="steps__1__title">
      {{ $t("basic_profile_data") }}
    </div>

    <div class="steps__1__subtitle">
      {{ $t("reg_step_1_subtitle") }}
    </div>

    <div class="steps__1__upper">
      <div class="steps__1__upper__left">
        <div class="steps__1__upper__left__label input_label">
          {{ $t("logo") }}
        </div>
        <div class="steps__1__upper__left__input">
          <el-upload
            class="logo_uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleLogoSuccess"
            :before-upload="beforeLogoUpload"
          >
            <img v-if="logoUrl" :src="logoUrl" class="logo_uploader__image" />
            <div v-else class="logo_uploader__empty">
              <img
                class="start__inner__image"
                src="@/assets/images/plus_in_circle.svg"
              />
            </div>
          </el-upload>
        </div>
      </div>

      <div class="steps__1__upper__right">
        <div class="steps__1__upper__right__1">
          <div class="steps__1__upper__right__1__label input_label">
            {{ $t("short_name") }}
          </div>
          <div class="steps__1__upper__right__1__input  input_input">
            <el-input v-model="shortName" clearable size="small" />
          </div>
        </div>

        <div class="steps__1__upper__right__2">
          <div class="steps__1__upper__right__2__label input_label">
            {{ $t("ceo") }}
          </div>
          <div class="steps__1__upper__right__2__input input_input">
            <el-input v-model="ceo" clearable size="small" />
          </div>
        </div>
      </div>
    </div>

    <div class="steps__1__middle">
      <div class="steps__1__middle__label input_label">
        {{ $t("full_name") }}
      </div>
      <div class="steps__1__middle__input input_input">
        <el-input v-model="fullName" clearable size="small" />
      </div>
    </div>

    <div class="steps__1__lower">
      <div class="steps__1__lower__row">
        <div class="steps__1__lower__row__1">
          <div class="steps__1__lower__row__1__label input_label">
            {{ $t("legal_address") }}
          </div>
          <div class="steps__1__lower__row__1__input input_input">
            <el-input
              type="textarea"
              :autosize="{ minRows: 6, maxRows: 6 }"
              v-model="legalAddress"
              clearable
              size="small"
            />
          </div>
        </div>
        <div class="steps__1__lower__row__2">
          <div class="steps__1__lower__row__2__label input_label">
            {{ $t("actual_address") }}
          </div>
          <div class="steps__1__lower__row__2__input input_input">
            <el-input
              type="textarea"
              :autosize="{ minRows: 6, maxRows: 6 }"
              v-model="actualAddress"
              clearable
              size="small"
            />
          </div>
        </div>
      </div>

      <div class="steps__1__lower__row">
        <div class="steps__1__lower__row__1">
          <div class="steps__1__lower__row__1__label input_label">
            {{ $t("inn") }}
          </div>
          <div class="steps__1__lower__row__1__input input_input">
            <el-input v-model="inn" clearable size="small" />
          </div>
        </div>
        <div class="steps__1__lower__row__2">
          <div class="steps__1__lower__row__2__label input_label">
            {{ $t("kpp") }}
          </div>
          <div class="steps__1__lower__row__2__input input_input">
            <el-input v-model="kpp" clearable size="small" />
          </div>
        </div>
      </div>

      <div class="steps__1__lower__row">
        <div class="steps__1__lower__row__1">
          <div class="steps__1__lower__row__1__label input_label">
            {{ $t("ogrn") }}
          </div>
          <div class="steps__1__lower__row__1__input input_input">
            <el-input v-model="ogrn" clearable size="small" />
          </div>
        </div>
        <div class="steps__1__lower__row__2">
          <div class="steps__1__lower__row__2__label input_label">
            {{ $t("okpo") }}
          </div>
          <div class="steps__1__lower__row__2__input input_input">
            <el-input v-model="okpo" clearable size="small" />
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
      logo: "",
      shortName: "",
      ceo: "",
      fullName: "",
      legalAddress: "",
      actualAddress: "",
      inn: "",
      kpp: "",
      ogrn: "",
      okpo: "",
      logoUrl: ""
    };
  },
  methods: {
    handleLogoSuccess(res, file) {
      this.logoUrl = URL.createObjectURL(file.raw);
    },
    beforeLogoUpload() {
      //(file) {
      //  TODO: Add some logic to verify upload object
      //  const isJPG = file.type === 'image/jpeg';
      //  const isLt2M = file.size / 1024 / 1024 < 2;
    }
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
.logo_uploader__empty {
  box-sizing: border-box;
  width: 115px;
  height: 115px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid $border_prim;
  border-radius: 2px;
}
.steps__1 {
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

  &__upper {
    width: 100%;
    padding-top: 30px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
    border-top: 1px solid $back_main;

    &__left {
      margin-left: 31px;
      width: 121px;

      @media (max-width: $screen_xxs) {
        margin-left: 31px;
        margin-right: 31px;
        align-self: center;
      }
    }

    &__right {
      margin-left: 20px;
      margin-right: 31px;
      flex: 1;
      min-width: 447px;

      @media (max-width: $screen_xxs) {
        width: 100%;
        min-width: 200px;
        margin-left: 31px;
        margin-right: 31px;
      }
    }
  }

  &__middle {
    width: 100%;
    box-sizing: border-box;
    padding-left: 31px;
    margin-top: 21px;
    padding-right: 31px;
  }

  &__lower {
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
