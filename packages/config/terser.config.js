/** @type {import('terser').MinifyOptions} */
export const terserOptions = {
  compress: {
    // 启用死代码消除
    dead_code: true,

    // 其他选项可以根据需要配置，但默认情况下它们是禁用的
    drop_console: false, // 不删除 console 语句
    drop_debugger: false, // 不删除 debugger 语句
    pure_funcs: null, // 不尝试识别并内联纯函数
    unsafe: false, // 不启用不安全的优化
    unsafe_comps: false, // 不启用不安全的赋值比较优化
    unsafe_Function: false, // 不允许将 Function 构造函数用于压缩
    unsafe_math: false, // 不允许对数学运算进行不安全的优化
    unsafe_proto: false, // 不允许删除 Object.prototype 引用
    unsafe_undefined: false, // 不允许在压缩中使用 undefined
  },
  // 其他配置项可以根据需要设置
  mangle: false, // 不进行变量重命名
  format: {
    beautify: true,
  },
  // output: {
  //   // comments: true, // 保留所有注释
  // },
  // sourceMap: false, // 不生成 source map
};
