/*
 * @Author: LYM
 * @Date: 2022-04-12 16:19:25
 * @LastEditors: LYM
 * @LastEditTime: 2022-05-18 16:13:08
 * @Description: 公共工具
 */

/**
 *
 * @param fn 要执行的函数
 * @param wait  时间
 * @param immediate 是否在触发事件后 在时间段n开始，立即执行，否则是时间段n结束，才执行
 */
export class Debounced {
  static use(fn: Function, wait = 1000, immediate = false) {
    let timer: NodeJS.Timeout | null

    return (...args: any) => {
      if (timer) {
        clearInterval(timer)
      }

      if (immediate) {
        if (!timer) {
          fn.apply(this, args)
        }

        timer = setTimeout(function () {
          // n 秒内 多次触发事件,重新计算.timer
          timer = null // n 秒内没有触发事件 timer 设置为null，保证了n 秒后能重新触发事件 flag = true = !timer
        }, wait)
      } else {
        timer = setTimeout(() => {
          fn.apply(this, args)
        }, wait)
      }
    }
  }
}

/**
 *
 * @param fn
 * @param wait
 * @param immediate true 是启用时间戳版，false 是启用定时器版，作用一样
 */
export class Throttle {
  static use(fn: Function, wait = 1000, immediate = false) {
    //定时器
    let timer: NodeJS.Timeout | null

    //时间戳
    if (immediate) {
      let prevTime = 0
      return (...args: any) => {
        const nowTime = Date.now()
        if (nowTime - prevTime >= wait) {
          fn.apply(this, args)
          prevTime = nowTime
        }
      }
    }

    return (...args: any) => {
      if (!timer) {
        fn.apply(this, args)
        timer = setTimeout(() => {
          timer && clearTimeout(timer)
          timer = null
        }, wait)
      }
    }
  }
}
