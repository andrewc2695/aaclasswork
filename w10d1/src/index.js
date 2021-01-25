const DOMNodeCollection = require('./dom_node_collection');

window.$l = (arg) => {

    if(arg instanceof HTMLElement) {
        const domCollection = new DOMNodeCollection([arg]);
    } else if(arg instanceof String) { 
        const nodeList = document.querySelectorAll(arg);
        const nodesArray = [...nodeList];
        const domCollection = new DOMNodeCollection(nodesArray);
    }
    return domCollection;
}

