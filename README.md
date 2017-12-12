# vue-jsx<==vue-router,完整的demo示例

> A Vue.js project

#### 在VUE项目中使用JSX来书写你的单文件组件，而无需繁琐的使用createElement函数来构建你的组件，更多的语法实例在这里：[babel-plugin-transform-vue-jsx](https://github.com/vuejs/babel-plugin-transform-vue-jsx#usage)

## Ready

```bash
1. git clone https://github.com/noteScript/vue_jsx.git
2. cd vue_jsx
3. npm install
4. npm run dev
```

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```
### 需要注意的文件
>.babelrc
`
{
"presets": [
["env", {
"modules": false,
"targets": {
"browsers": ["> 1%", "last 2 versions", "not ie <= 8"]
}
}],
"stage-2"
],
"plugins": ["transform-runtime","transform-vue-jsx"],
"env": {
"test": {
"presets": ["env", "stage-2"],
"plugins": ["istanbul","transform-vue-jsx"]
}
}
}
`

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
