let members = [
  {
    name: "Manuel",
    surname: "Benitez",
    age: "29",
    city: "Palma",
    hobby: "Skate",
    favoriteFood: "Milanesa",
    favoriteVideoGame: "DOTA 2",
    favoriteFilm: "",
    favoriteBook: "Shantaram",
    petName: "",
  },
  {
    name: "Camila",
    surname: "Rodriguez",
    age: "29",
    city: "Madrid",
    hobby: "Gaming",
    favoriteFood: "Pasta",
    favoriteVideoGame: "Legend of Zelda",
    favoriteFilm: "The Notebook",
    favoriteBook: "",
    petName: "Sora",
  },
  {
    name: "Maria",
    surname: "Cortes",
    age: "30",
    city: "Barcelona",
    hobby: "VideoGames, Anime",
    favoriteFood: "Ramen",
    favoriteVideoGame: "Danganronpa",
    favoriteFilm: "Harry Potter",
    favoriteBook: "Me gustan mucho",
    petName: "Akira y Matty",
},
  {
    name: "Denise",
    surname: "Cantos",
    age: "24",
    city: "Barcelona",
    hobby: "Crochet",
    favoriteFood: "Pasta",
    favoriteVideoGame: "Sims 4",
    favoriteFilm: "dontknow",
    favoriteBook: "La magia de dos",
    petName: "Willy",
},
 {
  name: "Jaime",
  surname: "Rodriguez",
  age: "29",
  city: "Barcelona",
  hobby: "Gaming, Guitarra",
  favoriteFood: "Ajiaco",
  favoriteVideoGame: "LoL",
  favoriteFilm: "Malditos Batardos",
  favoriteBook: "Falco",
  petName: "Natsu",
},
{
 name: "Jose",
 surname: "Calero",
 age: "28",
 city: "La Laguna",
 hobby: "Literature, sports",
 favoriteFood: "Arepa",
 favoriteVideoGame: "Age of Empires",
 favoriteFilm: "The Good, The Bad and the Ugly",
 favoriteBook: "Don Quijote",
 petName: "",
}
];

// Print who wrote ‘LOL’ or ‘League Of Legends’ as a favorite video game. (name). —> Maria (yo)
//PRIMERA OP (Maria)
for (let i = 0; i < members.length; i++){
  switch (members[i].favoriteVideoGame){
    case "LoL":
      console.log(members[i].name);
      console.log("Es su Juego favorito");
      break;
      default:
        console.log()
  }
}

//SEGUNDA OP (Maria)
members.forEach(function(persona){
  switch (persona.favoriteVideoGame){
    case "LoL":
      console.log(persona.name);
      console.log("Es su Juego favorito ");
      break;
      default:
        console.log()
  }
})