

const agentSelector = 
    '.get-the-list:nth-of-type(2)';


document.addEventListener('DOMContentLoaded',() => {
    
    const list = document
        .querySelector(agentSelector);
    
    if(list)
        onBlogLoaded(list.textContent);
})
