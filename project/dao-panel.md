# dao-panel

`dao-panel` 是一个位于页面底部的信息展示栏组件。代码请参照目录: [src/components/dao-panel](../src/components/dao-panel)。

## 使用方法

### Vue 使用方法

```html
<template>
    <dao-panel @changeTab="changeTab" size="size" minHeight="minHeight">
        <dao-panel-item heading="f1">
            <p>@p1</p>
        </dao-panel-item>
        <dao-panel-item heading="f2">
            <p>@p2</p>
        </dao-panel-item>
        <dao-panel-item heading="f3">
            <p>@p3</p>
        </dao-panel-item>
        <dao-panel-item heading="f444444444444444">
            <img src="https://img.moegirl.org/common/thumb/4/41/Nicky.jpg/250px-Nicky.jpg" alt="???">
        </dao-panel-item>
    </dao-panel>
<template>

<script>
    export default {
        methods: {
            changeTab(v) {
                console.log(`change tab to: ${v}`);
            },
        },
    };
</script>
```

## 组件参数

### dao-panel

#### 接受的参数

参数名 | 类型 | 说明 | 默认值 | 是否必填
-|-|-|-|-
size | String | 设置 dao-panel 的默认高度，可选值['l', 'm', 's'] | m | 否
minHeight | String | 设置 dao-panel 的最小高度，可填百分比或像素值，如 `30%` 及 `200px` | 0px | 否
visible | Boolean | 设置 dao-panel 显示和隐藏 | false | 否
defaultTab | String | 设置 dao-panel 打开时默认显示的标签页, 默认显示左起第一个标签页 | '' | 否

#### dao-panel 触发的事件

参数名 | 类型 | 说明 | 默认值 | 是否必填
-|-|-|-|-
changeTab | Function | dao-panel 的标签切换时的触发的回调  | - | 否

### dao-panel-item

#### 接受的参数

参数名 | 类型 | 说明 | 默认值 | 是否必填
-|-|-|-|-
heading | String | tab 标签名的内容 | - | 是
