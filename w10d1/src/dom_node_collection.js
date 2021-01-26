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

    children(){
        const childrenArr = [];
        this.arrayHtml.forEach(htmlEle => {
            childrenArr.push(htmlEle.children);
        });
        return new DOMNodeCollection(childrenArr);
    }

    parent(){
        const parentArr = [];
        this.arrayHtml.forEach(htmlEle => {
            parentArr.push(htmlEle.parentElement);
        })
        return new DOMNodeCollection(parentArr);
    }

    find(selector){
        const found = [];
        this.arrayHtml.forEach(htmlEle => {
            found.push(htmlEle.querySelectorAll(selector));
        });
        return new DOMNodeCollection(found);
    }

    remove(){
        this.arrayHtml.forEach(htmlEle => {
            htmlEle.parentNode.removeChild(htmlEle);
        });
    }


    on(event, callback){
        this.arrayHtml.forEach(htmlEle => {
            if(typeof htmlEle[event] === "undefined"){
                htmlEle[event] = [];
            }
            htmlEle[event].push(callback);
            htmlEle.addEventListener(event, callback);
            
        });
    }

    off(event){
        this.arrayHtml.forEach(htmlEle => {
            debugger
            const cb = htmlEle[event][0];
            htmlEle.removeEventListener(event, cb);
        });
    }

}


module.exports = DOMNodeCollection;