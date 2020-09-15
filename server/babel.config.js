module.exports = {
  "presets": [
    ["@babel/preset-env",
    {
      "targets": {
        "browsers": ["last 2 versions", "> 2% in KR"]
      },
      // "useBuiltIns": "usage", // 폴리필 사용 방식 지정
      //   "corejs": {
      //     // 폴리필 버전 지정
      //     "version": '3.6.5',
      //   }
    }],
  ],
}