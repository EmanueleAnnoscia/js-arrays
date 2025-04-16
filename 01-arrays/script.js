const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 0. Per ogni insegnante stampa in console la frase:
// [Nome insengante] è l'insegnante in posizione [i]
for(i = 0; i < teachers.length; i++){
  let currTeacher = teachers[i];
}

// 1. Utilizzando un indice sull'array teachers, cambia il valore della
// variabile fourthTeacher qui sotto in modo che sia il quarto insegnante elencato nell'array
const fourthTeacher = teachers[3];
console.log(teachers);

// 2. Sostituisci il quinto insegnante nell'array teachers con 'Patrick'
teachers[4]= Patrick;


// 3. Rimuovi l'ultimo insegnante dall'array e salvalo nella variabile lastTeacher qui sotto
const lastTeacher = teachers.pop();

// 4. Rimuovi il primo insegnante dall'array e salvalo nella variabile firstTeacher qui sotto
const firstTeacher = teachers.shift();
console.log(firstTeacher);

// 5. Aggiungi un insegnante di nome 'Vanessa' alla fine dell'array teachers
teachers.push("Vanessa");

// 6. Aggiungi un insegnante di nome 'Sarah' all'inizio dell'array teachers
teachers.unshift("Sarah")

// 7. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent
da rivedere

const isFabioPresent = positionFabio;


 for(i = 0; i < teachers.length; i++){
  let positionFabio = teachers.indexOf("Fabio");;
}if ()

// 8. Trova l'indice dell'insegnante 'Lewis' nell'array teachers
// e salvalo nella variabile lewisIndex
let index = teachers.indexOf("Lewis");
const lewisIndex = index;
console.log(lewisIndex);

// 9. Unisci tutti gli insegnanti nell'array teachers in una stringa
// separata da virgole e salvala nella variabile teachersString
const teachersString = teachers.join(",");

// 10. Verifica se l'array teachers è vuoto
// e salva il risultato nella variabile isTeachersEmpty
const isTeachersEmpty = null;


if (teachers.length == 0) {
  console.log("Empty");
} else {
  console.log("Not Empty");
}

