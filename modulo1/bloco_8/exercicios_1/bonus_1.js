const mage = {
    healthPoints: 130,
    intelligence: 45,
    mana: 125,
    damage: undefined,
  };
  
  const warrior = {
    healthPoints: 200,
    strength: 30,
    weaponDmg: 2,
    damage: undefined,
  };
  
  const dragon = {
    healthPoints: 350,
    strength: 50,
    damage: undefined,
  };
  
  const battleMembers = { mage, warrior, dragon };

//   1 - Crie uma função que retorna o dano do dragão.
// O dano será um número aleatório entre 15 (dano mínimo) e o valor do atributo strength (dano máximo).

  const dragonDamage = (dragon) => {
    const damage = Math.floor((Math.random() * dragon.strength - 15 +1) + 15);
    return damage;
  };

//   2 - Crie uma função que retorna o dano causado pelo warrior.
//   O dano será um número aleatório entre o valor do atributo strength (dano mínimo) e o valor de strength * weaponDmg (dano máximo).

const warriorDamage = (warrior) => {
    const damage = Math.floor((Math.random() * (warrior.strength * warrior.weaponDmg - warrior.strength +1)) + warrior.strength);
    return damage;
};

// 3 - Crie uma função que retorna um objeto com duas chaves e dois valores contendo o dano e a mana gasta pelo mago em um turno.

const mageDamage = (mage) => {
    let mana = mage.mana;
    const damage = Math.floor((Math.random() * (mage.intelligence * 2 - mage.intelligence +1)) + mage.intelligence);
    if (mana < 15) {
        return {damage: 'Sem mana', mana};
    }
    else {
        mana -= 15;
    }
    return {damage: damage, mana};
};

// 1 - Crie a primeira HOF que compõe o objeto gameActions. Ela será a função que simula o turno do personagem warrior. Esta HOF receberá como parâmetro a função que calcula o dano deferido pelo personagem warrior e atualizará os healthPoints do monstro dragon. Além disto ela também deve atualizar o valor da chave damage do warrior.
// 2 - Crie a segunda HOF que compõe o objeto gameActions. Ela será a função que simula o turno do personagem mage. Esta HOF receberá como parâmetro a função que calcula o dano deferido pelo personagem mage e atualizará os healthPoints do monstro dragon. Além disto ela também deve atualizar o valor das chaves damage e mana do mage.
// 3 - Crie a terceira HOF que compõe o objeto gameActions. Ela será a função que simula o turno do monstro dragon. Esta HOF receberá como parâmetro a função que calcula o dano deferido pelo monstro dragon e atualizará os healthPoints dos personagens mage e warrior. Além disto ela também deve atualizar o valor da chave damage do monstro.
// 4 - Adicione ao objeto gameActions uma função que retorne o objeto battleMembers atualizado e faça um console.log para visualizar o resultado final do turno.

const gameActions = {
    warrior: (warriorDamage) => {
       warrior.damage = warriorDamage(warrior);    
       dragon.healthPoints -= warrior.damage;
    },
    mage: (mageDamage) => {
        const turnMage = mageDamage(mage);
        mage.mana = turnMage.mana;
        mage.damage = turnMage.damage;
        if (isNaN(turnMage.damage)){
            return;
        }else {
            dragon.healthPoints -= mage.damage;
        }
    },
    dragon: (dragonDamage) => {
        dragon.damage = dragonDamage(dragon);
        warrior.healthPoints -= dragon.damage;
        mage.healthPoints -= dragon.damage;
    },
    turn: () => battleMembers,
  };

gameActions.warrior(warriorDamage);
gameActions.mage(mageDamage);
gameActions.dragon(dragonDamage);
console.log(gameActions.turn());
