<template>
  <transition name="fade">
    <div class="modal-wrapper" v-show="isOpened">
      <div class="modal-content">
        <div class="modal-wrapper__header">
          <h2 class="title">{{ title }}</h2>
          <a
            href="#"
            class="modal-wrapper__closer close"
            v-on:click="closeOpenCardModal"
          ></a>
        </div>
        <slot></slot>
      </div>
    </div>
  </transition>
</template>

<script src="./Modal.js"></script>
<style scoped lang="less" src="./Modal.less"></style>
