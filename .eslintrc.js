module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    'standard-with-typescript',
    '@vue/eslint-config-typescript'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'vue'
  ],
  rules: {
    'vue/no-unused-components': ['warn', {
      ignoreWhenBindingPresent: true
    }],
    'comma-dangle': ['warn', {
      arrays: 'never',
      objects: 'never',
      imports: 'never',
      exports: 'never',
      functions: 'never'
    }],
    quotes: ['warn', 'single']
  }
}
