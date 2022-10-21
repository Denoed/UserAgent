
import fetchCommon from './Common.js'


interface CommonOptions {
    
    raw ?: boolean
}


/**
 *  Fetch the list of common UserAgents
 *
 *  ## Example
 *  
 *  ```js
 *  import { common } from 'https://deno.land/x/useragents/mod.ts'
 *  
 *  const agents = await common();
 *
 *  console.log('Common UserAgents:',agents);
 *  ```
 *
 *  ```js
 *  ...
 *  
 *  const rawData = await common({ raw : true });
 *
 *  console.log('Common UserAgents:',rawData);
 *  ```
 */

export async function common ( options : CommonOptions ){
    return await fetchCommon(options ?? {});
}