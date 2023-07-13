const meterValue = parseFloat(prompt('Digite o valor em metros:'));

let conversionType = prompt('Digite o tipo de conversão que deseja realizar \nmilímetro(mm) \ncentímetro(cm) \ndecímetro(dm) \ndecâmetro(dam) \nhectômetro(hm) \nquilômetro(km)');

let result = 0;

switch(conversionType){
  case 'milímetro':
    result = (meterValue * 1000); 
    alert('Resultado: ' + meterValue + 'm = ' + result + ' mm');
    break;
  case 'centímetro':
    result = (meterValue * 100);
    alert('Resultado: ' + meterValue + 'm = ' + result + ' cm');
    break;
  case 'decímetro':
    result = (meterValue * 10);
    alert('Resultado: ' + meterValue + 'm = ' + result + ' dm');
    break;
  case 'decâmetro':
    result = (meterValue/10);
    alert('Resultado: ' + meterValue + 'm = ' + result + ' dam');
    break;
  case 'hectômetro':
    result = (meterValue/100);
    alert('Resultado: ' + meterValue + 'm = ' + result + ' hm');
    break;
  case 'quilômetro':
    result = (meterValue/1000);
    alert('Resultado: ' + meterValue + 'm = ' + result + ' km');
    break;
  default:
    alert('Opção inválida!')
    break;
}




