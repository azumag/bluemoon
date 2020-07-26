import Vue from 'vue'

Vue.use({
  install(Vue) {
    const $message = Vue.observable({
      display: false,
      text: '',
      color: '',
      timeout: 5000,
      show(message: string, option: any = {}) {
        this.text = message
        this.display = true
        this.color = option.color || 'info'
        this.timeout = option.timeout || 3000
        this.top = option.top || false
        this.bottom = option.bottom || true
        this.right = option.right || true
        this.left = option.left || false
      },
    })
    Vue.prototype.$message = $message
  },
})
