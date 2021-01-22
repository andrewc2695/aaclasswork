
const partyHeader = document.getElementById('party');

export const htmlGenerator = (string, htmlElement) => {
    if (htmlElement.children) {
        Array.from(htmlElement.children).forEach((child) => {
            htmlElement.removeChild(child)
        })
    }
    let p = document.createElement("p");
    p.innerText = string;
    htmlElement.append(p);
};

htmlGenerator('Party Time.', partyHeader);