export default {
  name: "AppHeader",
  data: function () {
    return {};
  },
  methods: {
    toggleNav: function () {
      this.$isNavOpened = !this.$isNavOpened;
    },
  },
};
