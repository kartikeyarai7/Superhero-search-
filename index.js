let btn = document.querySelector("#submit");
let inp = document.querySelector("#exampleInputName1");
let value;
let card = document.querySelector(".card1");
let title = document.querySelector(".cardtitle");
let content = document.querySelector(".cardtext");
let img = document.querySelector(".cardimg");

card.hidden = true;

inp.addEventListener("input", e => {
  value = e.target.value;
});

btn.addEventListener("click", e => {
  console.log(value);
  e.preventDefault();

  const start = async function getEverything() {
    const char = await getCharacters(value);
    await setContent(char);
    card.hidden = false;
  };
  start();
  //   const char = await getCharacters(value);
  //   await setContent(char);
});

async function getCharacters(term) {
  const url = "https://www.superheroapi.com/api/1780380905478595/search/";
  const finalUrl = url + term;
  try {
    const response = await fetch(finalUrl);
    const characters = await response.json();
    //   console.log(characters.results[0]);
    return characters.results[0];
  } catch (error) {
    alert("This name does not exist");
    console.log("Name does not exist " + error);
  }
}

async function setContent(char) {
  console.log(char);
  title.textContent = char.name;
  //   console.log(char.image.url);
  img.setAttribute("src", char.image.url);
  content.innerHTML = `<ul>
  <li>Gender:  ${char.appearance.gender} </li>
  <li>Race: ${char.appearance.gender} </li>
  <li>Weight: ${char.appearance.gender}</li>
  <li>Height: ${char.appearance.gender}</li>
  <li>Combat:         <progress value="${char.powerstats.combat}" max="100"></progress> </li>
  <li>Durability:    <progress value="${char.powerstats.durability}" max="100"></progress> </li>
  <li>Intelligence:  <progress value="${char.powerstats.intelligence}" max="100"></progress> </li>
  <li>Power:         <progress value="${char.powerstats.power}" max="100"></progress> </li>
  <li>Speed:         <progress value="${char.powerstats.speed}" max="100"></progress> </li>
  <li>Strength:      <progress value="${char.powerstats.strength}" max="100"></progress> </li>
</ul>
  `;
}
