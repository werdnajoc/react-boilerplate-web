module.exports = {
    "settings": {
        "react": {
            "createClass": "createReactClass", // Regex for Component Factory to use,
                                               // default to "createReactClass"
            "pragma": "React",  // Pragma to use, default to "React"
            "version": "detect", // React version. "detect" automatically picks the version you have installed.
                                 // You can also use `16.0`, `16.3`, etc, if you want to override the detected value.
                                 // default to latest and warns if missing
                                 // It will default to "detect" in the future
            "flowVersion": "0.53" // Flow version
        },
    },
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly",
        "React": "writable"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "react/react-in-jsx-scope": "off",
        "import/no-extraneous-dependencies": 0,
        "import/no-unresolved": 0,
        "import/extensions": 0,
        "import/prefer-default-export": 0,
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "react/no-array-index-key": 0,
        "indent": ["error", 4],
        "no-shadow": ["error", { "builtinGlobals": false, "hoist": "never", "allow": [] }],
        "react/prop-types": 0,
        "react/jsx-indent": ["error", 4],
        "react/jsx-indent-props": ["error", 4],
        "react/destructuring-assignment": 0,
        "react/jsx-no-bind": 0,
        "react/prefer-stateless-function": 0,
        "object-curly-newline": 0,
        "no-nested-ternary": 0,
        "max-len": 0,
        "react/no-unescaped-entities": 0,
        "react/no-string-refs": 0,
        "class-methods-use-this": 0,
        "no-underscore-dangle": 0,
        "no-undef": 0,
        "no-case-declarations": 0,
        "no-lonely-if": 0,
        "consistent-return": 0,
        "require-jsdoc": 0,
        "quotes": ["error", "double"],
    }
};
