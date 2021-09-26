import OrderCardModal from "@c/OrderCardModal/OrderCardModal.vue";
import AppNav         from "@c/Nav/Nav.vue";
import AppHeader      from "@c/Header/Header.vue";
import AppMain        from "@c/Main/Main.vue";
import AppFooter      from "@c/Footer/Footer.vue";
import Modal          from "@c/Modal/Modal.vue";

export default {
  name: "App",
  components: {
    "order-card-modal": OrderCardModal,
    "app-nav":          AppNav,
    "app-header":       AppHeader,
    "app-main":         AppMain,
    "app-footer":       AppFooter,
    "modal":            Modal
  },
  created() {
    document.title = "Главная";
  },
};
