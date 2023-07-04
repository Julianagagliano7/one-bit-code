function damageCalc(attack, defense, shield) {
  let harm = 0;
  if (attack > defense && shield === 'false') {
    harm = attack - defense; 
  }
  else if (attack > defense && shield === 'true') {
     harm = (attack - defense)/2;
  }
  else if (attack <= defense) {
     harm = 0;
  }
  return harm;
}

function presentCombatResults(currentDamage, currentHitPointAttack, currentHitPointDefense) {
  let nHitPointAttack = 0;
  let nHitPointDefense = 0;

  nHitPointAttack = (currentDamage - currentHitPointAttack);
  nHitPointDefense = (currentDamage - currentHitPointDefense);

  return { newHitPointAttack: nHitPointAttack, newHitPointDefense: nHitPointDefense };
}

function finalInformations (nameAttack, attack, lifeAttack, newLifeAttack, nameDefense, defense, lifeDefense, shield, newLifeDefense) {
  alert(nameAttack + ' \nAtaque: ' + attack + '\nQuantidade de Vida: ' + lifeAttack + '\nVida após combate: ' + newLifeAttack);
  alert(nameDefense + ' \nDefesa: ' + defense + '\nQuantidade de Vida: ' + lifeDefense + '\nEscudo? ' + shield + '\nVida após combate: ' + newLifeDefense);
}


//Inputs do Usuário 

let caracterAttack = prompt('Insira o nome do seu personagem de ataque: ');

let attackPower = parseFloat(prompt('Insira o poder de ataque do personagem: '));

let hitPointAttack = parseFloat(prompt('Insira a quantidade de pontos de vida de seu personagem de ataque: '));

let caracterDefense = prompt('Insira o nome do personagem de defesa: ');

let defensePower = parseFloat(prompt('Insira o poder de defesa de seu personagem: ')); 

let hitPointDefense = parseFloat(prompt('Insira a quantidade de pontos de vida de seu personagem de defesa: '));

let hasShield = prompt("Digite 'sim' ou 'não' se o seu personagem tem escudo");


//Chamamento de Funções

let severityDamage = damageCalc(attackPower, defensePower, hasShield);

let results = presentCombatResults(severityDamage, hitPointAttack, hitPointDefense); 
let newHitPointAttack = results['newHitPointAttack'];
let newHitPointDefense = results['newHitPointDefense'];

finalInformations(caracterAttack,attackPower, hitPointAttack, newHitPointAttack, caracterDefense, defensePower, hitPointDefense, hasShield, newHitPointDefense);





