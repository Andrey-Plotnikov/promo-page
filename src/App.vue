<template>
  <div id="app" :class="{ opened: this.$isNavOpened }">
    <app-nav :class="{ opened: this.$isNavOpened }" />
    <app-header />
    <app-main />
    <app-footer />
    
    <modal title="Заявка на карту" ref="orderCardModal">
      <order-card-modal></order-card-modal>
    </modal>
  </div>
</template>

<script src="@/App.js"></script>
<style lang="less" src="@/App.less"></style>
