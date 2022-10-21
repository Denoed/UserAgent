#!/usr/bin/env -S deno run --allow-net

import { common } from '../Source/mod.ts'


const { clear , log } = console;

clear();

log('Querying common UserAgents')


const agents = await common({
    raw : false
})

log('UserAgents:',agents);
