(window.daoStyleJsonpFunction=window.daoStyleJsonpFunction||[]).push([[22],{190:function(n,o){n.exports='<template>\n  <div class="dao-dialog demo3">\n    <button class="dao-btn blue" @click="config.visible = true">{{config.header.title}}</button>\n    <dao-dialog\n      :visible.sync="config.visible"\n      :header="config.header"\n      :footer="config.footer">\n      <dialog-demo-form></dialog-demo-form>\n    </dao-dialog>\n  </div>\n</template>\n\n<script>\nimport DialogDemoForm from \'./dialog-demo-form\';\n\nexport default {\n  name: \'Demo3\',\n  components: { DialogDemoForm },\n  data() {\n    return {\n      config: {\n        visible: false,\n        header: {\n          title: \'自定义 Footer\',\n        },\n        footer: {\n          confirmText: \'确认1\',\n          cancelText: \'取消1\',\n          confirmDisabled: true,\n        },\n      },\n    };\n  },\n};\n<\/script>\n'}}]);