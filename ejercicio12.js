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
    { name: 'Nightcrawler', power: 'teleportation' }
  ];
  
  function findMutantByPower(arr, val) {
    let resultArr = []
    for (let elem of arr) {
        if((Object.values(elem)).includes(val)) {
            resultArr.push({name: elem.name})
        }
      }
    if (resultArr.length > 0) {
        return `Mutants by Power matches: ${resultArr.length}\nMutant list: ${JSON.stringify(resultArr, null, 1)}`
    }
    return `Mutants by Power matches: ${resultArr.length}\nNot found`
  }

  console.log(findMutantByPower(mutants, 'telekinesis'))
  console.log(findMutantByPower(mutants, 'piromancia'))
  
  //Tuve que usar JSON.stringify porque no encontré otra forma que saliera la informacion del mutante por consola usando solo ${resultArr}