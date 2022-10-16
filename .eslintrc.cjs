module.exports = {
    parser: "@typescript-eslint/parser",
    extends: ["plugin:@typescript-eslint/recommended", "prettier"],
    env: {
        es6: true,
        node: true,
    },
    rules: {
        "no-var": "error",
        semi: "error",
        indent: ["error", 4, { SwitchCase: 1 }],
        "no-multi-spaces": "error",
        "space-in-parens": ["error"],
        "no-multiple-empty-lines": "error",
        "prefer-const": "error",
        "@typescript-eslint/no-explicit-any": "off",
        quotes: ["error", "double"],
        "newline-per-chained-call": ["error", { ignoreChainWithDepth: 2 }],
    },
};
