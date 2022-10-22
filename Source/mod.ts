
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
 *  const agents = 
 *      await common();
 *
 *  console.log('UserAgent List:',agents);
 *  ```
 *
 *  ```js
 *  const rawData = 
 *      await common({ raw : true });
 *
 *  console.log('Raw Data:',rawData);
 *  ```
 */

export async function common ( options : CommonOptions ){
    return await fetchCommon(options ?? {});
}