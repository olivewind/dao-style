(window.daoStyleJsonpFunction=window.daoStyleJsonpFunction||[]).push([[51],{219:function(o,d){o.exports='<template>\n  <div>\n    当前选中的是: {{val}}\n    <br>\n    <br>\n    <dao-radio-group>\n      <dao-radio label="dce" v-model="val">DaoCloud Enterprise</dao-radio>\n      <dao-radio label="dcs" v-model="val" :disabled="true">DaoCloud Services</dao-radio>\n      <dao-radio label="dcv" v-model="val">DaoCloud Voice</dao-radio>\n      <dao-radio label="dci" v-model="val">DaoCloud Insight</dao-radio>\n    </dao-radio-group>\n  </div>\n</template>\n\n<script>\n\n  export default {\n    data() {\n      return {\n        val: \'dce\',\n      };\n    },\n  };\n<\/script>\n'}}]);