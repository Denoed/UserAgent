
const endpoint = 'https://denoed.github.io/UserAgents/Common.json'


export default async function fetchCommon ( options ){
    
    const 
        response = await fetch(endpoint) ,
        json = await response.json() ;

    const { raw } = options;
    
    return (raw)
        ? json
        : json.agents
}