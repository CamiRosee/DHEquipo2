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

let surnameOrder= [];
let ageOrder = [];
let sumaEdad=0;

function checkSurname (apellido){
  if(typeof(apellido.surname) == "string"){
    surnameOrder.push(apellido.surname+" " +apellido.name);
  }
}

function checkAge (edad) {
  if(typeof(edad.age) == "string"){
    ageOrder.push(edad.age+" " +edad.name)
    ageOrder.sort()
  }
}

function sumar(){
  for(i=0;i<members.length;i++){
   sumaEdad = sumaEdad + Number(members[i].age);
  } 
  return (sumaEdad / 6)
}

function x () {
  for(i=0;i<members.length;i++){
    checkSurname(members[i]);
    checkAge(members[i]);
  }
 // console.log(surnameOrder);
}

x()

console.log(surnameOrder.sort());
console.log(ageOrder.sort());
console.log(sumar());



// Print who wrote ‘LOL’ or ‘League Of Legends’ as a favorite video game. (name). —> Maria (yo)
//(Maria)
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

