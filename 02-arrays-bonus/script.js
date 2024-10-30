const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers
const reversedTeachers = [];
for (let i = teachers.length - 1; i >= 0; i--) {
  const curTeacher = teachers[i];
  reversedTeachers.push(curTeacher);
}
console.log('Con ciclo for', reversedTeachers);

//OPPURE
const reversedTeachers2 = teachers.toReversed();
console.log('Con ciclo for', reversedTeachers2);


// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri
const longNames = [];
for (let i = 0; i < teachers.length; i++) {
  const element = teachers[i];
  if (element.length >= 5) {
    longNames.push(element);
  }
}

console.log('array con nomi superiori ai 5 caratteri', longNames);

// 3. Rimuovi 'Ed' dall'array teachers

