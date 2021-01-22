
const partyHeader = document.getElementById('party');

export const htmlGenerator = (string, htmlElement) => {
    let p = document.createElement("p");
    p.innerText = string;
    htmlElement.append(p);
};

htmlGenerator('Party Time.', partyHeader);