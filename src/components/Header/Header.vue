<template>
  <header class="header">
    <div class="container header__container">
      <div
        class="nav-toggle"
        :class="{ opened: $isNavOpened }"
        @click="toggleNav"
      >
        <span class="nav-toggle__line"></span>
        <span class="nav-toggle__line"></span>
        <span class="nav-toggle__line"></span>
      </div>
      <img class="logo" src="@img/bank-logo.png" />
    </div>
  </header>
</template>

<script src="./Header.js"></script>
<style scoped lang="less" src="./Header.less"></style>
