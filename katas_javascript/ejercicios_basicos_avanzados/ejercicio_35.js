// Desarrolla una función que busque en un array de objetos representando mutantes si existe alguno con un poder específico y retorne un mensaje indicando si fue encontrado o no.

// Considera el caso de múltiples mutantes con el mismo poder.

const mutants = [
  { name: 'Wolverine', power: 'regeneration' },
  { name: 'Magneto', power: 'magnetism' },
  { name: 'Professor X', power: 'telepathy' },
  { name: 'Jean Grey', power: 'telekinesis' },
  { name: 'Rogue', power: 'power absorption' },
  { name: 'Storm', power: 'weather manipulation' },
  { name: 'Mystique', power: 'shape-shifting' },
  { name: 'Beast', power: 'superhuman strength' },
  { name: 'Colossus', power: 'steel skin' },
  { name: 'Nightcrawler', power: 'teleportation' },
  //He añadido otro para probar que haya varios mutantes con un mismo poder
  { name: 'Deadpool', power: 'regeneration'},
];

function findMutantByPower(mutants, power) {
  // insert code

  //Por si hay duplicados, almacenamos los mutantes
  const foundMutants = [];

  for (const mutant of mutants) {
    if (mutant.power === power) {
      foundMutants.push(mutant.name);
    }
  }

  if (foundMutants.length > 0) {
    let namesText = "";

    //Concatenamos los nombres de los mutantes con los mismos poderes
    for (const name of foundMutants) {
      namesText += name + " ";
    }

    return "Mutante/s encontrado/s con el poder " + power + ": " + namesText;
  } else {
    return "No se ha encontrado ningún mutante con el poder " + power;
  }
}

console.log(findMutantByPower(mutants, "telepathy"));
console.log(findMutantByPower(mutants, "regeneration"));
console.log(findMutantByPower(mutants, "fireball"));