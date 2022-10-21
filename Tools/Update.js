#!/usr/bin/env -S deno run --allow-all --unstable


import { fromFileUrl , dirname , join } 
from 'https://deno.land/std@0.160.0/path/mod.ts'


const 
    { clear , log } = console ,
    { run , env } = Deno ;


clear();

log('Fetching UserAgents')


const home = env.get('HOME');

const plugin = join(home,'.cache','deno','plug','https','github.com');

const 
    folder = dirname(fromFileUrl(import.meta.url)) ,
    updater = join(folder,'..','Updater') ,
    hosted = join(folder,'..','Public') ;

const
    injection = join(updater,'Injection.js') ,
    imports = join(updater,'Imports.json') ,
    common = join(hosted,'Common.json') ,
    path = join(updater,'App.js') ;


const endpoint = 'techblog.willshouse.com';

const environment = [
    'XDG_CACHE_HOME' ,
    'PLUGIN_URL' ,
    'DENO_DIR' ,
    'HOME'
]

const parameters = [
    `--allow-write=${ common }` ,
    `--allow-read=${ plugin },${ injection }` ,
    `--allow-env=${ environment.join() }` ,
    `--allow-net=${ endpoint }` ,
    `--importmap=${ imports }` ,
    '--allow-ffi' ,
    '--unstable'
]

const config = {
    stdout : 'inherit' ,
    stderr : 'inherit' ,
    cmd : [ 'deno' , 'run' , ... parameters , path ]
}


await run(config)
    .status();


log('Done.')
