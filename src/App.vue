<template>
  <div id="app" :class="{ opened: this.$isNavOpened }">
    <app-nav :class="{ opened: this.$isNavOpened }" />
    <app-header />
    <app-main />
    <app-footer />

    <transition name="fade">
      <order-card-modal v-show="$isModalOpened" />
    </transition>
  </div>
</template>

<script src="@/assets/js/App.js"></script>
<style lang="less" src="@/assets/css/App.less"></style>
