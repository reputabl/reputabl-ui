const path = require("path");
const modulesDir = path.join(process.cwd(), "node_modules");

const updateEmotionAliases = config => ({
  ...config,
  "resolve": {
    ...config.resolve,
    "alias": {
      ...config.resolve.alias,
      "@emotion/core": path.join(modulesDir, "@emotion/react"),
      "@emotion/styled": path.join(modulesDir, "@emotion/styled"),
      "@emotion/styled-base": path.join(modulesDir, "@emotion/styled"),
      "emotion-theming": path.join(modulesDir, "@emotion/react")
    }
  }
});

module.exports = {
  previewHead: (head) => (`
    ${head}
    <link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
/>
  `),
  stories: [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  "managerWebpack": updateEmotionAliases,
  "webpackFinal": updateEmotionAliases
};
