export default {
  name: "OrderCardModal",
  props: {},
  data: function () {
    return {
      countries: ["Российская Федерация", "Белоруссия", "Украина", "Казахстан"],
      input: {
        name: {
          value: "",
          isValid: false,
        },
        email: {
          value: "",
          isValid: false,
        },
        phone: {
          value: "",
          isValid: false,
        },
        country: 0,
        isAgree: false,
        isInfoValid: false,
      },
      status: {
        content: "",
        isError: false,
      },
    };
  },
  methods: {
    labelClick: function (event) {
      event.target.previousSibling.focus();
    },
    setCountry: function (index) {
      this.input.country = index;
    },
    checkValid: function () {
      if (
        this.input.name.isValid &&
        this.input.email.isValid &&
        this.input.phone.isValid &&
        this.input.isAgree
      ) {
        this.input.isInfoValid = true;
      } else {
        this.input.isInfoValid = false;
      }
    },
    closeOpenCardModal: function () {
      this.$isModalOpened = false;
    },
    checkInputName: function () {
      let value = this.input.name.value;

      if (value.match(/^[а-яА-Я- ]+$/gmu)) {
        this.input.name.isValid = true;
      } else {
        this.input.name.isValid = false;
      }
      this.checkValid();
    },
    checkInputEmail: function () {
      let value = this.input.email.value;

      if (
        value.match(
          /^([a-zA-Z0-9_-]+\.)*[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)*\.[a-zA-Z]{2,6}$/gmu
        )
      ) {
        this.input.email.isValid = true;
      } else {
        this.input.email.isValid = false;
      }
      this.checkValid();
    },
    checkInputPhone: function () {
      let phoneCode = "+7";
      if (this.input.country === 1) phoneCode = "+375";
      else if (this.input.country === 2) phoneCode = "+380";

      let filter = "^\\" + phoneCode + "\\d{10}$";
      let value = this.input.phone.value.replace(/\s+/g, "");

      value = value.replace(/\s+/g, "");

      if (value.match(new RegExp(filter, "gmu"))) {
        this.input.phone.isValid = true;

        let len = value.length;
        this.input.phone.value = `${phoneCode} ${value.substr(
          len - 10,
          3
        )} ${value.substr(len - 7, 3)} ${value.substr(
          len - 4,
          2
        )} ${value.substr(len - 2, 2)}`;
      } else {
        this.input.phone.isValid = false;
      }
      this.checkValid();
    },
    updateInputAgree: function (event) {
      this.input.isAgree = event.target.checked;
      this.checkValid();
    },
    sendUserInfo: function () {
      const url = "http://sitename.domenname/api/clients";
      let data = {
        name: this.input.name.value,
        email: this.input.email.value,
        phone: this.input.phone.value,
      };

      if (this.input.isInfoValid) {
        this.axios
          .post(url, data)
          .then((response) => {
            this.status.isError = false;
            this.status.content = "Мы успешно получили вашу заявку.";
          })
          .catch((error) => {
            console.error("There was an error!", error);

            this.status.isError = true;
            this.status.content =
              "Не удалось отправить вашу заявку. Попробуйте позднее.";
          });
      }
    },
  },
};
