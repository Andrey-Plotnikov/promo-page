<template>
  <div class="modal-wrapper">
    <div class="modal-content">
      <div class="title">
        <h2>Заявка на карту</h2>
        <a href="#" class="close" v-on:click="closeOpenCardModal"></a>
      </div>
      <div class="input-wrapper">
        <input
          placeholder=""
          v-on:input="checkInputName"
          v-model="input.name.value"
        />
        <label v-on:click="labelClick">ФИО</label>
        <div class="checked" v-show="input.name.isValid"></div>
        <p
          class="error"
          v-show="!input.name.isValid && input.name.value !== ''"
        >
          Имя пользователя может содержать только буквы русского алфавита и
          пробелы!
        </p>
      </div>
      <div class="input-wrapper">
        <input
          placeholder=""
          v-on:input="checkInputEmail"
          v-model="input.email.value"
        />
        <label v-on:click="labelClick">Электронный адрес</label>
        <div class="checked" v-show="input.email.isValid"></div>
        <p
          class="error"
          v-show="!input.email.isValid && input.email.value !== ''"
        >
          Неверный формат адреса электронной почты!
        </p>
      </div>
      <div class="input-wrapper">
        <input
          placeholder=""
          v-on:input="checkInputPhone"
          v-model="input.phone.value"
        />
        <label v-on:click="labelClick">Номер телефона</label>
        <div class="checked" v-show="input.phone.isValid"></div>
        <p
          class="error"
          v-show="!input.phone.isValid && input.phone.value !== ''"
        >
          Номер телефона может содержать только цифры и пробелы!
        </p>
      </div>
      <div class="citizenship-picker">
        <div class="input-wrapper">
          <input
            placeholder=""
            v-bind:value="countries[input.country]"
            readonly
          />
          <label v-on:click="labelClick">Гражданство</label>
          <div class="arrow"></div>
          <div class="citizenship-picker-list">
            <ul>
              <li
                v-for="(country, index) in countries"
                v-bind:key="index"
                v-on:pointerup="setCountry(index)"
                _v-show="index !== input.country"
              >
                {{ country }}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="agree-toggler">
        <input
          type="checkbox"
          id="agree-checkbox"
          v-model="input.isAgree"
          v-on:input="updateInputAgree"
        />
        <label for="agree-checkbox"
          ><p>
            Я соглашаюсь на <span class="white">обработку</span> моих
            персональных данных
          </p></label
        >
        <div class="checked"></div>
      </div>
      <div class="control-panel">
        <button
          v-bind:class="{ unactive: !input.isInfoValid }"
          v-on:click="sendUserInfo"
        >
          Заказать сейчас
        </button>
        <p class="status" v-bind:class="{ error: status.isError }">
          {{ status.content }}
        </p>
      </div>
    </div>
  </div>
</template>

<script src="@/assets/js/OrderCardModal.js"></script>
<style scoped lang="less" src="@/assets/css/OrderCardModal.less"></style>
