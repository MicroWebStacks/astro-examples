import {green_log} from './utils'


async function config_setup({ updateConfig, config, addPageExtension, command }) {
    green_log(`astro:config:setup> running (${command})`)
}

async function config_done({ config }){
    green_log(`astro:config:done>`)
}

async function server_setup({ server }){
	green_log(`astro:server:setup>`)
}
async function server_start({ address }){
	green_log(`astro:server:start> @ (${address})`)
}
async function server_done(){
	green_log(`astro:server:done>`)
}
async function build_start(){
	green_log(`astro:build:start>`)
}
async function build_setup({vite, pages, target}){
	green_log(`astro:build:setup> target = (${target})`)
}
async function build_generated({ dir}){
	green_log(`astro:build:generated> @ (${dir})`)
}
async function build_ssr({ manifest }){
	green_log(`astro:build:ssr>`)
}
async function build_done({ pages, dir, routes }){
	green_log(`astro:build:done> @ (${dir})`)
}

function int_test(options){
	return {
		name: 'int_test',
		hooks: {
			'astro:config:setup': config_setup,
			'astro:config:done' : config_done,
			'astro:server:setup': server_setup,
			'astro:server:start': server_start,
			'astro:server:done' : server_done,
			'astro:build:start'	: build_start,
			'astro:build:setup'	: build_setup,
			'astro:build:generated'	: build_generated,
			'astro:build:ssr'	: build_ssr,
			'astro:build:done'	: build_done,
		},
	};
}

export{
	int_test
}
