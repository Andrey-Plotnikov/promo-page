export default {
  name: "Modal",
  data: () => {
    return {
      isOpened: false,
    };
  },
  props: {
    title: String,
  },
  methods: {
    closeOpenCardModal: function () {
      this.isOpened = false;
    },
  },
};
