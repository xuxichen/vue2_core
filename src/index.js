import { initMixin } from "./init";
function Vue(options) { // options 就是用户的选项
    this._init(options)
}

initMixin(Vue)
export default Vue