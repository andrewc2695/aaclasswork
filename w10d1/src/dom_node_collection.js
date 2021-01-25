class DOMNodeCollection {
    constructor (arrayHtml) {
        this.arrayHtml = arrayHtml;
    }

    html (string) {
        if(!string) {
            return this.arrayHtml[0].innerHTML;
        } else {
            this.arrayHtml.forEach(node => {
                node.innerHTML = string;
            });
        }
    }
}


module.exports = DOMNodeCollection;