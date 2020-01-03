<template >
  <div class="hallo">
    <span>ssss</span>
  </div>
</template>

<script>

export default {
  created () {
    window.console.log(this.$toast)
    // this.$toast.show({
    //   showType: 'success',
    //   toastMessage: '222'
    // })
  }
}
</script>

<style lang="scss" scoped>
.hallo {
  height: 100%;
  width: 100%;
  position: relative;
  background: salmon;
  color: white;
}
</style>
