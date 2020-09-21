module.exports = {
  "presets": [
    ["@babel/preset-env",
    {
      "targets": {
        "browsers": ["last 2 versions", "> 2% in KR"]
      },
      "useBuiltIns": "usage",
                "corejs" : "3",
                "modules": false
    }],
  ],
  "plugins": ["@babel/plugin-proposal-class-properties"]
}