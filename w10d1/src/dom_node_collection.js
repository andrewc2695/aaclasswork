class DOMNodeCollection {
    constructor (arrayHtml) {
        this.arrayHtml = arrayHtml;
    }

    html (string) {
        if(string === undefined) {
            return this.arrayHtml[0].innerHTML;
        } else {
            this.arrayHtml.forEach(node => {
                node.innerHTML = string;
            });
        }
    }

    empty(){
        this.html("");
    }

    append(){
       const argsArray =  Array.from(arguments);
       argsArray.forEach(argEle => {
          this.arrayHtml.forEach(htmlEle => {
              if(typeof argEle === 'string'){
                  htmlEle.innerHTML += argEle;
              }else{
                  htmlEle.appendChild(argEle);
              }
          }) 
       })
    }

    addClass (newClass) {
        this.arrayHtml.forEach(htmlEle => {
            htmlEle.classList.add(newClass);
        });
    }

    removeClass (className) {
        this.arrayHtml.forEach(htmlEle => {
            htmlEle.classList.remove(className);
        })
    }

    attr (key, value) {
        if(value === undefined) {
            return this.arrayHtml[0].getAttribute(key);
        } else {
            this.arrayHtml.forEach(htmlEle => {
                htmlEle.setAttribute(key, value);
            });
        }
    
    }

}


module.exports = DOMNodeCollection;