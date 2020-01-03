import Vue from 'vue'
import ToastComponent from '../../../packages/toast/toast'

Vue.use({
  install (vue) {
    let $vm

    const Toast = vue.extend(ToastComponent)

    if (!$vm) {
      $vm = new Toast({
        el: document.createElement('div')
      })
      document.body.appendChild($vm.$el)
    }

    const toast = {
      show (options = {}) {
        const _options = Object.assign({}, options)
        for (let i in _options) {
          $vm[i] = _options[i]
        }
        $vm.show = true

        setTimeout(() => {
          $vm.show = false
        }, 3000)
      },
      text (toastMessage) {
        this.show({
          toastMessage
        })
      },
      hide () {
        $vm.show = false
      }
    }

    vue.mixin({
      created: function () {
        this.$toast = toast
      }
    })
  }
})
