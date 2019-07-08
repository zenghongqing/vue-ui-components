# 安装和快速上手

### 引用
跟鹰眼系统UI组件库一样，在webpack的alias中设置
```
function vui(dir){
  return resolve('../rcs_vui_oa/' + dir);
}

function resource(dir){
  return vui('src/' + dir);
}
alias: {
  'components' : resource('components'),
}
```

### 添加组件
* 在src/components目录下，增加相应的组件文件夹xxx，文件名为index.vue，**注意: 所有的组件.vue文件必须加name**
* 组件的样式在src/components/styles/theme中加入相应的xxx.scss样式文件，并在index.scss文件中引入 
* 在src/components/index.js中增加你的组件名，会自动注册组件
```
// 此处增加新增的组件名
let components = [
    Button
]
export {
    install,
    Button
}

export default {
    install,
    Button
}
```

### 组件的markdown
* 文档系统的左侧栏的显示，对应nav.config.js文件的内容包含: 标题title以及路由path
```
[
    {
        path: '/',
        title: '安装和快速上手'
    },
    {
        title: 'Form',
        children: [
            {
                path: '/input',
                title: 'Input输入框'
            }
        ]
    }
]
```
* 在examples/src/mds中创建xxx.md 文件，**注意: md文件中必须包含字符\#\#\:xxx:\#\#，用于填充demos中的示例代码**

### 增加组件的实例代码
* 在src/demos中新建**.vue文件，无需注册, 新增组件可直接使用, 在文档系统中可直接看到效果

### 本组件库采用的是网易的rem适配方案
```
let calc = 7.5
if (deviceWidth > 768) deviceWidth = 768
if (deviceWidth < 320) deviceWidth = 320
if (deviceWidth < 320 && devicePixelRatio >= 2) calc = calc - (devicePixelRatio - 1)
let fontSize = Math.ceil(deviceWidth / calc)
if (fontSize % 2 === 1) {
    fontSize--
}
 document.documentElement.style.fontSize = fontSize + 'px'// 计算设计稿和实际像素的缩放比。向上取整1px = 0.01rem
```
[相关资料请点击查看](https://www.cnblogs.com/noobfly/p/6207832.html)
