
import fetchAgents from './Fetch.js'
import { pretty } from './JSON.js'
import * as Paths from './Paths.js'


const { writeTextFile } = Deno;


const agents = 
    await fetchAgents();

const json = 
    pretty(agents);

await writeTextFile(Paths.Common,json);

