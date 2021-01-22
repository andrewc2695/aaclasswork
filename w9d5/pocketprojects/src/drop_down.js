
const dogs = {
  "Corgi": "https://www.akc.org/dog-breeds/cardigan-welsh-corgi/",
  "Australian Shepherd": "https://www.akc.org/dog-breeds/australian-shepherd/",
  "Affenpinscher": "https://www.akc.org/dog-breeds/affenpinscher/",
  "American Staffordshire Terrier": "https://www.akc.org/dog-breeds/american-staffordshire-terrier/",
  "Tosa": "https://www.akc.org/dog-breeds/tosa/",
  "Labrador Retriever": "https://www.akc.org/dog-breeds/labrador-retriever/",
  "French Bulldog": "https://www.akc.org/dog-breeds/french-bulldog/" 
};

function dogLinkCreator() {
  let dogLinks = [];
  let keys = Object.keys(dogs);
  let values = Object.values(dogs);
  for(let i = 0; i < keys.length; i++) {
    let a = document.createElement("a");
    a.innerHTML = keys[i];
    a.href = values[i];
    let li = document.createElement("li");
    li.classList.add("dog-link");
    li.append(a);
    dogLinks.push(li);
  }
  return dogLinks;
}

function attachDogLinks() {
  let dogLinks = dogLinkCreator();
  dogLinks.forEach((dog) => {
    let dropdown = document.querySelector(".drop-down-dog-list")
    dropdown.append(dog);
  });
}

function handleEnter(){
  let dropdown = document.querySelector(".drop-down-dog-list");
  dropdown.classList.add("show");
}

function handleLeave(){
  let dropdown = document.querySelector(".drop-down-dog-list");
  dropdown.classList.remove("show");

}

attachDogLinks();
let dropDownArea = document.querySelector(".drop-down-dog-nav");
dropDownArea.addEventListener("mouseenter", handleEnter)
dropDownArea.addEventListener("mouseleave", handleLeave)