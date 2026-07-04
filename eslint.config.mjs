import { defineConfig } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';

export default defineConfig([
  ...nextVitals,
  {
    rules: {
      'no-unused-vars': 'warn',
      'react-hooks/set-state-in-effect': 'off',
    },
  },
]);