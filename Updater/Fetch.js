
import { Webview , SizeHint } from 'WebView'
import * as Paths from './Paths.js'


const 
    { readTextFile } = Deno ,
    { parse } = JSON ;


const size = {
    height : 1920,
    width : 1080,
    hint : SizeHint.FIXED
}


function fetchContent (){
    return new Promise (async (resolve) => {
    
        const injection = 
            await readTextFile(Paths.Injection);

        const webview = 
            new Webview(true,size);

        webview.bind('onBlogLoaded',foundContent);
        webview.init(injection);
        webview.navigate(Paths.Endpoint);
        webview.run();

        function foundContent ( content ){
            webview.destroy();
            resolve(content);
        }
    })
}


export default async function fetchAgents (){
    const text = await fetchContent();
    return parse(text);
}
