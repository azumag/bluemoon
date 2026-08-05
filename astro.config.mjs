import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://bluemoon-82c0b.web.app',
  trailingSlash: 'ignore',
  integrations: [mdx()],
});
