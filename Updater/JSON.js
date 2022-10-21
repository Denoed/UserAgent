

const indent = ( string ) =>
    `    ${ string }`;
    
const pair = ( key , value ) =>
    indent(`"${ key }" : "${ value }"`);


export function pretty ( headers ){
    
    let string = '';
    
    string += '[';

    headers.forEach(( header , index ) => {

        if(index > 0)
            string += ',';

        string += '{\n';
        
        const { percent , useragent , system } = header;
        
        string += pair('useragent',useragent) + ' ,\n';
        string += pair('percent',percent) + ' ,\n';
        string += pair('system',system) + '\n';
        
        string += '}';
    })
    
    string += ']\n';

    return string;
}