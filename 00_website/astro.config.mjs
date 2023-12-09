import { defineConfig } from 'astro/config';
import {dirname} from 'path'
import { fileURLToPath } from 'url';
import {config} from './config.js'

const rootdir = dirname(fileURLToPath(import.meta.url));
globalThis.rootdir = rootdir
config.rootdir = rootdir

// https://astro.build/config
export default defineConfig({
    outDir: "../docs",
    base:"astro-examples"
});
