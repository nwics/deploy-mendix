
const configUtils = require("/opt/mendix/modeler/tools/node/node_modules/@react-native/metro-config/dist");
const path = require("path");

const metroConfig = {
    watchFolders: [
        path.resolve(__dirname, "/workdir/project/theme"),
        path.resolve(__dirname, "/workdir/project/javascriptsource"),
        path.resolve(__dirname, "/workdir/project/themesource"),
        path.resolve(__dirname, "/opt/mendix/modeler/tools/node/node_modules"),
    ],
    resolver: {
        useWatchman: false,
        platforms: ["ios", "android"],
        sourceExts: ["native.js", "js", "jsx", "ts", "tsx", "cjs", "mjs", "json", "js_commonjs-exports", "js_commonjs-module"],
        extraNodeModules: {
            "@babel/runtime": "/opt/mendix/modeler/tools/node/node_modules/@babel/runtime",
            "big.js": "/opt/mendix/modeler/tools/node/node_modules/big.js",
            "react": "/opt/mendix/modeler/tools/node/node_modules/react",
            "react-dom": "/opt/mendix/modeler/tools/node/node_modules/react-dom",
            "react-native-gesture-handler": "/opt/mendix/modeler/tools/node/node_modules/react-native-gesture-handler",
            "react-native": "/opt/mendix/modeler/tools/node/node_modules/react-native",
            "@react-native-community/cli": "/opt/mendix/modeler/tools/node/node_modules/@react-native-community/cli",
            "@react-native-community/cli-platform-android": "/opt/mendix/modeler/tools/node/node_modules/@react-native-community/cli-platform-android",
            "@react-native-community/cli-platform-ios": "/opt/mendix/modeler/tools/node/node_modules/@react-native-community/cli-platform-ios",
            "react-native-device-info": "/opt/mendix/modeler/tools/node/node_modules/react-native-device-info",
            "react-native-material-menu": "/opt/mendix/modeler/tools/node/node_modules/react-native-material-menu",
            "@react-navigation/bottom-tabs": "/opt/mendix/modeler/tools/node/node_modules/@react-navigation/bottom-tabs",
            "@react-navigation/core": "/opt/mendix/modeler/tools/node/node_modules/@react-navigation/core",
            "@react-navigation/drawer": "/opt/mendix/modeler/tools/node/node_modules/@react-navigation/drawer",
            "@react-navigation/native": "/opt/mendix/modeler/tools/node/node_modules/@react-navigation/native",
            "@react-navigation/stack": "/opt/mendix/modeler/tools/node/node_modules/@react-navigation/stack",
            "react-native-svg": "/opt/mendix/modeler/tools/node/node_modules/react-native-svg",
            "react-native-tab-view": "/opt/mendix/modeler/tools/node/node_modules/react-native-tab-view",
            "react-native-vector-icons": "/opt/mendix/modeler/tools/node/node_modules/react-native-vector-icons",
            "react-native-fast-image": "/opt/mendix/modeler/tools/node/node_modules/react-native-fast-image",
            "react-native-screens": "/opt/mendix/modeler/tools/node/node_modules/react-native-screens",
            "react-native-localize": "/opt/mendix/modeler/tools/node/node_modules/react-native-localize",
            "react-native-reanimated": "/opt/mendix/modeler/tools/node/node_modules/react-native-reanimated",
            "react-native-safe-area-context": "/opt/mendix/modeler/tools/node/node_modules/react-native-safe-area-context",
            "react-native-blob-util": "/opt/mendix/modeler/tools/node/node_modules/react-native-blob-util",
            "@react-native-async-storage/async-storage": "/opt/mendix/modeler/tools/node/node_modules/@react-native-async-storage/async-storage",
            "@react-native-community/datetimepicker": "/opt/mendix/modeler/tools/node/node_modules/@react-native-community/datetimepicker",
            "@react-native-masked-view/masked-view": "/opt/mendix/modeler/tools/node/node_modules/@react-native-masked-view/masked-view",
            "eventemitter3": "/opt/mendix/modeler/tools/node/node_modules/eventemitter3",
            "@react-native-picker/picker": "/opt/mendix/modeler/tools/node/node_modules/@react-native-picker/picker",
            "deprecated-react-native-prop-types": "/opt/mendix/modeler/tools/node/node_modules/deprecated-react-native-prop-types",
            "metro-file-map": "/opt/mendix/modeler/tools/node/node_modules/metro-file-map",
            "@react-native/metro-config": "/opt/mendix/modeler/tools/node/node_modules/@react-native/metro-config",
            "@rollup/plugin-alias": "/opt/mendix/modeler/tools/node/node_modules/@rollup/plugin-alias",
            "mendix": "/opt/mendix/modeler/tools/node/node_modules/mendix",
            "mx-global": "/opt/mendix/modeler/tools/node/node_modules/mx-global",
            "mx-api": "/opt/mendix/modeler/tools/node/node_modules/mendix/mx-api",
            "mx-api/data": "/opt/mendix/modeler/tools/node/node_modules/mendix/mx-api/data",
            "mx-api/session": "/opt/mendix/modeler/tools/node/node_modules/mendix/mx-api/session",
            "mx-api/ui": "/opt/mendix/modeler/tools/node/node_modules/mendix/mx-api/ui"
        }
    },
    cacheVersion: "73100",
};

module.exports = configUtils.mergeConfig(configUtils.getDefaultConfig(__dirname), metroConfig);
