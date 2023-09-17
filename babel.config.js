module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      "babel-plugin-root-import",
      {
        "rootPathSuffix": "app/",
        "rootPathPrefix": "@/"
      },
    ], ["nativewind/babel"], ['react-native-reanimated/plugin']]
};
