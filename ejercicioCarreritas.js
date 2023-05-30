//Ejercicios de uso de métodos


var corredores=["Roberto", "Andrea", "Jorge", "Ramiro", "Sofia"];

// Jorge adelanta a Roberto
corredores.unshift("jorge");
corredores.splice(3,1);
console.log(corredores);

// Ramiro adelanta a Jorge
corredores.unshift("Ramiro");
corredores.splice(4,1);
console.log(corredores);

// Roberto se lesiona y sale de la carrera
corredores.splice(2, 1);
console.log(corredores);

// Andrea baja una posición y jose entra en 5to lugar
corredores.splice(2,0, "Sofia");
corredores.splice(4, 1, "Jose");
console.log(corredores);



