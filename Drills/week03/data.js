var data = [
  {id: 0, name: "Dr. Emmett Brown", knownFrom: "Back to the Future" , hairColor: "grey"},
  {id: 1, name: "Marty McFly", knownFrom: "Back to the Future", hairColor: "brown"},
  {id: 2, name: "Biff Tannen", knownFrom: "Back to the Future" , hairColor: "blonde"},
  {id: 3, name: "Jennifer Parker", knownFrom: "Back to the Future" , hairColor: "blonde"},
  {id: 4, name: "Lorraine Baines McFly", knownFrom: "Back to the Future" , hairColor: "brown"},
  {id: 5, name: "George McFly", knownFrom: "Back to the Future" , hairColor: "brown"},
  {id: 6, name: "Morty Smith", knownFrom: "Rick and Morty" , hairColor: "brown"},
  {id: 7, name: "Summer Smith", knownFrom: "Rick and Morty" , hairColor: "red" },
  {id: 6, name: "Beth Smith", knownFrom: "Rick and Morty" , hairColor: "blonde"},
  {id: 7, name: "Jerry Smith", knownFrom: "Rick and Morty" , hairColor: "brown"},
  {id: 8, name: "Rich Sanchez", knownFrom: "Rick and Morty" , hairColor: "grey"},
  {id: 9, name: "Mr. Meeseeks", knownFrom: "Rick and Morty" , hairColor: "NA"},
  {id: 10, name: "Birdperson", knownFrom: "Rick and Morty" , hairColor: "NA"},
];

function findById(array,id){
  for (var i=0; i< array.length; i++){
    if (array[i].id === id){
      return array[i];
    };
  };
};

//delete and return one entry of an array
function findById(array,id){
  for (var i=0; i<array.length; i++){
    if (array[i] === number){
      array.splice(i,1);
    }
  }