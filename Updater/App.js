
import fetchAgents from './Fetch.js'
import { pretty } from './JSON.js'
import * as Paths from './Paths.js'


const { writeTextFile } = Deno;


const timestamp = new Date()
    .toUTCString();

const agents = 
    await fetchAgents();


const data = { timestamp , agents };

const json = 
    pretty(data);

await writeTextFile(Paths.Common,json);

