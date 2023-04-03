
import babel from "rollup-plugin-babel";
// rollup 默认可以导出一个对象作为打包的配置文件
export default {
    input: './src/index.js', // 入口
    output: {
        file: './dist/vue.js', // 出口
        name: 'Vue', // 会在global上添加一个Vue对象 global.Vue
        format: 'umd', //esm es6模块 commonjs模块 iife自执行函数 umd（统一模块，commojs amd, cmd)
        sourcemap: true, // 希望可以调试源代码
    },
    plugins: [
        babel({
            exclude: 'node_modules/**', // 排除node_modules模块所有文件
        })
    ]
}