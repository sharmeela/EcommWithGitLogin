import { createRequire } from 'module';

const require = createRequire(import.meta.url);

// postcss.config.mjs
const config = {
  plugins: {
    // Ensure you are using the v4 package:
    "@tailwindcss/postcss": {}, 
  },
};
export default config;
