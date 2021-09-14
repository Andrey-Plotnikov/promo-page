<template>
  <header>
    <section>
      <div
        class="nav-toggle"
        :class="{ opened: $isNavOpened }"
        @click="toggleNav"
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <img class="logo" src="@/assets/img/bank-logo.png" />
    </section>
  </header>
</template>

<script src="@/assets/js/Header.js"></script>
<style scoped lang="less" src="@/assets/css/Header.less"></style>
