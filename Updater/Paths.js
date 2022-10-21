
import { fromFileUrl , dirname , join } from 'Path'


const source =
    dirname(fromFileUrl(import.meta.url));

const storage =
    join(source,'..','Public');


export const Common =
    join(storage,'Common.json');
    
export const Injection =
    join(source,'Injection.js');


export const Endpoint =
    'https://techblog.willshouse.com/2012/01/03/most-common-user-agents/';