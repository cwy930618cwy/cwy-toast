<template>
  <div class="dialog" v-if="show">
    <div class="main" v-if="showType === ''">{{toastMessage}}</div>
    <div class="main" v-if="showType !== ''">
      <img src="../image/success.png" alt />
      <div class="message">{{toastMessage}}</div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Toast',
  data () {
    return {
      toastMessage: 'sss',
      show: false,
      showType: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.dialog {
  z-index: 10000;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 0.28rem;
  border-radius: 0.08rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .main {
    color: white;
    box-shadow: 0 0.02rem 0.12rem rgba(0, 0, 0, 0.2);
    background: #666;
    padding: 0.2rem 0.2rem;
    box-sizing: border-box;
    border-radius: 0.16rem;
    max-width: 80%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    img {
      height: 0.4rem;
      width: 0.4rem;
      margin-right: 0.2rem;
    }
    .message {
      line-height: 0.4rem;
      display: flex;
      justify-content: center;
      align-items: center;
      word-wrap: break-word;
      word-break: break-all;
      min-height: 0.4rem;
    }
  }
}
</style>
