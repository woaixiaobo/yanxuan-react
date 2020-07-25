const {override,addDecoratorsLegacy,addWebpackAlias} = require("customize-cra");

const { resolve } = require("path");

function resolvePath(path) {
  return resolve(__dirname, "src", path);
}

module.exports = override(
  // 添加装饰器语法
  // yarn add @babel/plugin-proposal-decorators --dev
  addDecoratorsLegacy(),
  addWebpackAlias({
    "@utils": resolvePath("utils"),
    "@api": resolvePath("api"),
    "@comps": resolvePath("components"),
    "@assets": resolvePath("assets"),
    "@pages": resolvePath("pages"),
    "@redux": resolvePath("redux"),
    "@conf": resolvePath("config"),
  })
);
