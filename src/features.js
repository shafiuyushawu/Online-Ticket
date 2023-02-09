const dataArr = [
  {
    name: "Black Sherif",
    img: "./images/black_sherif_artise.jpg",
    profession: "Afro beat, Singer and Rapper",
    description:
      "Mohammed Ismail Sherif Kwaku Frimpong professionally known as Black Sherif, is a Ghanaian singer and rapper. He gained popularity in 2021 with his song 'First Sermon' in May 2021. This was followed up with 'Second Sermon' in July. ",
  },
  {
    name: "Sarkodie",
    img: "./images/sarkodie_artiste.jpg",
    profession: "Rapper",
    description:
      "Michael Owusu Addo known professionally as Sarkodie, is a Ghanaian rapper, songwriter, and entrepreneur from Tema. His contributions to the Ghanaian music industry have earned him numerous accolades, including the Vodafone Ghana Music Award for 'Artiste of the Decade'",
  },
  {
    name: "King Promise",
    img: "./images/king_promise_artiste.jpg",
    profession: "Singer, Song writer",
    description:
      "Gregory Bortey Newman, who goes by the stage name King Promise is a Ghanaian highlife and afrobeats singer-songwriter. He is a signee of Legacy Life Entertainment record Label and is known for several songs like Oh yeah, Selfish, Tokyo among others.",
  },
  {
    name: "Kidi",
    img: "./images/kidi_artiste.jpg",
    profession: "Singer",
    description:
      "Dennis Nana Dwamena, better known as KiDi, is a Ghanaian high-life and afrobeats singer-songwriter. He is signed to Lynx Entertainment and is best known for his global hit single Touch It. The remix features American rapper Tyga and has received massive streaming across the world.",
  },
  {
    name: "Kwame Eugen",
    img: "./images/kwame_eugen_artiste.jpg",
    profession: "Hip Life Singer, Song writter",
    description:
      "Eugene Kwame Marfo, who goes by the stage name Kuami Eugene is a Ghanaian High-life and Afrobeat singer-songwriter. He is signed to Lynx Entertainment and Empire Distribution and is known for several songs, including 'Angela', 'Wish Me Well', 'Ohemaa' and many others.",
  },
  {
    name: "Stonebwoy",
    img: "./images/stonebwoy_artiste.jpg",
    profession: "Dancehall, Reggae",
    description:
      "Livingstone Etse Satekla, better known by his stage name Stonebwoy, is a Ghanaian Afropop, dancehall and reggae musician. He is the CEO of Burniton Music Group. He won the Best International Act: Africa category at the 2015 BET Awards and Artist of the Year at the 2015 Ghana Music Awards.",
  },
];

const featureSection = document.querySelector(
  "body main #feature__section #feature__container"
);
const featureTittle = document.querySelector(
  "body main #feature__section #feature__tittle"
);

const titleDiv = document.createElement("div");
titleDiv.className = "flex flex-col items-center justify-center gap-2 ";
const tittle = document.createElement("h2");
tittle.innerHTML = "Fearture Artise";
tittle.className = "text-2xl text-center mt-5";
const tittleBar = document.createElement("div");
tittleBar.className = "h-1 w-10 bg-[#ec5242]";

featureTittle.appendChild(titleDiv);
titleDiv.appendChild(tittle);
titleDiv.appendChild(tittleBar);

for (let data of dataArr) {
  const mainDiv = document.createElement("div");
  mainDiv.className = "flex mt-10 ";
  featureSection.appendChild(mainDiv);

  const profileDiv = document.createElement("div");
  profileDiv.className = "w-[40%]";

  const profileImg = document.createElement("img");
  profileImg.setAttribute("src", data.img);
  profileImg.className = " w-[100%]  p-5";

  mainDiv.appendChild(profileDiv);
  profileDiv.appendChild(profileImg);

  const textDiv = document.createElement("div");
  textDiv.className = "w-[60%]  items-center md:mt-20 ";
  const textTittle = document.createElement("h3");
  textTittle.innerHTML = data.name;
  textTittle.className = "text-xl ";
  const profession = document.createElement("h4");
  profession.innerHTML = data.profession;
  profession.className = "text-[#ec5242] italic";
  const description = document.createElement("span");
  description.innerHTML = data.description;
  description.className = "text-[13px]";

  mainDiv.appendChild(textDiv);
  textDiv.appendChild(textTittle);
  textDiv.appendChild(profession);
  textDiv.appendChild(description);
}
