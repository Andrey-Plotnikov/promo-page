import OrderCardModal from "@/components/OrderCardModal.vue";
import AppNav from "@/components/Nav.vue";
import AppHeader from "@/components/Header.vue";
import AppMain from "@/components/Main.vue";
import AppFooter from "@/components/Footer.vue";

export default {
  name: "App",
  components: {
    "order-card-modal": OrderCardModal,
    "app-nav": AppNav,
    "app-header": AppHeader,
    "app-main": AppMain,
    "app-footer": AppFooter,
  },
  data: function () {
    return {};
  },
  created() {
    document.title = "Главная";
  },
};
