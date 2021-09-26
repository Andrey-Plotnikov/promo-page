<template>
  <div class="container">
    <div class="data-input modal-content-block">
      <div class="text-input">
        <input
          class="input text-input__input"
          placeholder=" "
          v-on:input="checkInputName"
          v-model="input.name.value"
        />
        <label class="label text-input__placeholder" v-on:click="labelClick"
          >ФИО</label
        >
      </div>

      <div
        class="checkmark text-input__checkmark"
        v-show="input.name.isValid"
      ></div>
      <p class="error" v-show="!input.name.isValid && input.name.value !== ''">
        Имя пользователя может содержать только буквы русского алфавита и
        пробелы!
      </p>
    </div>

    <div class="data-input modal-content-block">
      <div class="text-input">
        <input
          class="input text-input__input"
          placeholder=" "
          v-on:input="checkInputEmail"
          v-model="input.email.value"
        />
        <label class="label text-input__placeholder" v-on:click="labelClick"
          >Электронный адрес</label
        >
      </div>

      <div
        class="checkmark text-input__checkmark"
        v-show="input.email.isValid"
      ></div>
      <p
        class="error"
        v-show="!input.email.isValid && input.email.value !== ''"
      >
        Неверный формат адреса электронной почты!
      </p>
    </div>

    <div class="data-input modal-content-block">
      <div class="text-input">
        <input
          class="input text-input__input"
          placeholder=" "
          v-on:input="checkInputPhone"
          v-model="input.phone.value"
        />
        <label class="label text-input__placeholder" v-on:click="labelClick"
          >Номер телефона</label
        >
      </div>
      <div
        class="checkmark text-input__checkmark"
        v-show="input.phone.isValid"
      ></div>
      <p
        class="error"
        v-show="!input.phone.isValid && input.phone.value !== ''"
      >
        Номер телефона может содержать только цифры и пробелы!
      </p>
    </div>

    <div class="citizenship-picker modal-content-block">
      <div class="select">
        <div class="text-input">
          <input
            class="input text-input__input"
            placeholder=" "
            v-bind:value="countries[input.country]"
            readonly
          />
          <label class="label text-input__placeholder" v-on:click="labelClick"
            >Гражданство</label
          >

          <div class="arrow"></div>

          <ul class="select-list">
            <li
              class="select-list__item"
              v-for="(country, index) in countries"
              v-bind:key="index"
              v-on:pointerup="setCountry(index)"
            >
              {{ country }}
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="agree-toggler modal-content-block">
      <div class="checkbox-input">
        <input
          class="input checkbox-input__input"
          type="checkbox"
          id="agree-checkbox"
          v-model="input.isAgree"
          v-on:input="updateInputAgree"
        />
        <label class="label checkbox-input__label" for="agree-checkbox">
          <div class="checkmark checkbox-input__checkmark"></div>
          <p class="plain-text checkbox-input__plain-text">
            Я соглашаюсь на <span class="white">обработку</span> моих
            персональных данных
          </p>
        </label>
      </div>
    </div>

    <div class="control-panel modal-content-block">
      <button
        class="button control-panel__button"
        v-bind:class="{ button_disabled: !input.isInfoValid }"
        v-on:click="sendUserInfo"
      >
        Заказать сейчас
      </button>
      <p class="control-panel__status" v-bind:class="{ error: status.isError }">
        {{ status.content }}
      </p>
    </div>
  </div>
</template>

<script src="./OrderCardModal.js"></script>
<style scoped lang="less" src="./OrderCardModal.less"></style>
