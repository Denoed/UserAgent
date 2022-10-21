

const indent = ( string ) =>
    `    ${ string }`;
    
const pair = ( key , value ) =>
    indent(`"${ key }" : "${ value }"`);


export function pretty ( data ){
    
    const { agents , timestamp } = data;
    
    
    let string = '{\n';
    
    string += `    "timestamp" : "${ timestamp }" ,\n`;
    
    string += '    "agents" : [';

    agents.forEach(( agent , index ) => {

        if(index > 0)
            string += ',';

        string += '{\n';
        
        const { percent , useragent , system } = agent;
        
        string += '    ' + pair('useragent',useragent) + ' ,\n';
        string += '    ' + pair('percent',percent) + ' ,\n';
        string += '    ' + pair('system',system) + '\n';
        
        string += '    }';
    })
    
    string += ']\n';
    
    string += '}\n'

    return string;
}