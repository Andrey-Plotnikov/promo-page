export default {
  name: "AppMain",
  methods: {
    openCardOrderModal: function() {
      this.$parent.$refs.orderCardModal.isOpened = true;
    },
  },
  mounted() {
    let collection = document
      .getElementById("main-page")
      .getElementsByTagName("section");
    let sections = [];
    for (let c of collection) {
      sections.push(c);
    }

    const check = function () {
      for (let i = 0; i < sections.length; i++) {
        if (
          document.documentElement.scrollTop +
            document.documentElement.clientHeight >=
          document.documentElement.scrollTop +
            sections[i].getBoundingClientRect().top
        ) {
          sections[i].classList.add("visible");
          sections.splice(i, 1);
          i--;
        }
      }
    };

    check();
    window.addEventListener("scroll", check);
  },
};
