function CN(num1, num2) {
	const primeiro = criaPrimeiraFrase(num1, num2);
	const segundo = criaSegundaFrase(num1, num2);

	return `${primeiro} ${segundo}`;
}

function criaPrimeiraFrase(num1, num2) {
	let primeiro = `Os números ${num1} e ${num2}`;
	let simNao = 'não';

	if (num1 === num2) {
		simNao = '';
	}

	return `${primeiro} ${simNao} são iguais.`;
}

function criaSegundaFrase(num1, num2) {
	const soma = num1 + num2;
	let comparaDez = 'menor';
	let comparaVinte = 'menor';

	if (soma > 10) {
		comparaDez = 'maior';
	}

	if (soma > 20) {
		comparaVinte = 'maior';
	}

	return `Sua soma é ${soma}, que é ${comparaDez} do que 10 e ${comparaVinte} do que 20.`;
}

console.log(CN(5, 10));