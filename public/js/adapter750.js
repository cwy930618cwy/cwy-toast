// 适配竖屏iPhone6即750px的稿
; (function () {
  var doc = document
  var win = window
  var docEl = doc.documentElement
  var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize'
  // var calced = false
  var recalc = function () {
    // console.log(323232, calced)
    var clientWidth = docEl.clientWidth
    // if (!clientWidth || calced) return;
    if (!clientWidth) return
    if (clientWidth >= 414) {
      docEl.style.fontSize = 100 * (414 / 750) + 'px'
    } else {
      docEl.style.fontSize = 100 * (clientWidth / 750) + 'px'
    }
    // calced = true
  }
  recalc() // 这里导致执行两遍吧
  win.addEventListener(resizeEvt, recalc, false)
  doc.addEventListener('DOMContentLoaded', recalc, false)
})()
