module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "tsconfig.json",
    tsconfigRootDir: __dirname,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint"],
  extends: ["plugin:@typescript-eslint/recommended", "plugin:prettier/recommended"],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: [
    "node_modules", // Excluir a pasta node_modules
    "eslint.config.js",
    "jest.config.ts",
    "dist", // Caso você tenha uma pasta de distribuição
    "build", // Excluir pastas de build
  ],
  overrides: [
    {
      files: ["src/domain/**/*.ts"], // Lintando todos os arquivos TypeScript no domínio
      rules: {
        "@typescript-eslint/no-unused-vars": "warn",
        "@typescript-eslint/explicit-module-boundary-types": "off",
      },
    },
  ],
  rules: {
    "prettier/prettier": [
      "error",
      {
        semi: false,
        singleQuote: true,
        arrowParens: "avoid",
        useTabs: true,
        trailingComma: "none",
        tabWidth: 4,
      },
    ],
  },
};
