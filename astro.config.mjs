import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://www.bluemoon.works',
  trailingSlash: 'ignore',
  integrations: [mdx()],
});
