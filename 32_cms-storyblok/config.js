import { loadEnv } from 'vite';


const env = loadEnv("", process.cwd(), 'STORYBLOK');

const config = {
    token : env.STORYBLOK_TOKEN,
}

export{
    config
}
