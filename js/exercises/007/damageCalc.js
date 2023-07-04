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

function battleResult(harm, lifeDefense) {
  let newHitPointDefense = 0;

  if(harm === 0) {
    newHitPointDefense = lifeDefense; 
  }
  else if (harm < lifeDefense){
    newHitPointDefense = lifeDefense - harm; 
  }
  else {
    newHitPointDefense = harm - lifeDefense; 
  }
  return newHitPointDefense;
}

//Inputs do Usuário 

let caracterAttack = prompt('Insira o nome do seu personagem de ataque: ');

let attackPower = parseFloat(prompt('Insira o poder de ataque do personagem: '));

let caracterDefense = prompt('Insira o nome do personagem de defesa: ');

let defensePower = parseFloat(prompt('Insira o poder de defesa de seu personagem: ')); 

let hitPointDefense = parseFloat(prompt('Insira a quantidade de pontos de vida de seu personagem de defesa: '));

let hasShield = prompt("Digite 'true' (sim) ou 'false' (não) se o seu personagem tem escudo");


//Chamamento de Funções

let severityDamage = damageCalc(attackPower, defensePower, hasShield);
let newLifeDefense = battleResult(severityDamage, hitPointDefense); 

alert(caracterAttack + ' deu ' + severityDamage + ' de dano em ' + caracterDefense);
alert('A nova vida de ' + caracterDefense  + ' é: ' + newLifeDefense); 








