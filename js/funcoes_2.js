/*
a. Receba do usuário através do comando prompt uma lista com 5 CPFs.

b. Crie uma função para verificar se o CPF digitado é válido.

c. Crie uma função para formatá-lo de acordo com a máscara xxx.xxx.xxx-xx

d. Crie uma última função para exibir os CPFs formatados através de um alert para o cliente, um CPF por vez, contendo o número formatado e informando se é válido ou não.

Requisitos:
● Utilize pelo menos um operator dos tratados durante a aula.
● Armazene a lista utilizando array.
● Utilize estrutura de repetição.
● Utilize pelo menos uma função passando parâmetros.
*/

{
    function cpfValido(cpf) {
        if (cpf.length == 11) {
            return true;
        } else {
            return false;
        }
    }
    function mascaraCPF(cpf) {
        let digitos = cpf.split("");
        let mascaraCPF =
            digitos[0] +
            digitos[1] +
            digitos[2] +
            "." +
            digitos[3] +
            digitos[4] +
            digitos[5] +
            "." +
            digitos[6] +
            digitos[7] +
            digitos[8] +
            "-" +
            digitos[9] +
            digitos[10];
        return mascaraCPF;
    }

    for (let index = 0; index < 5; index++) {
        let cpfDigitado = prompt('Digite CPF ' + (index + 1));
        if (cpfValido(cpfDigitado)) {
            let cpfComMascara = mascaraCPF(cpfDigitado);
            cpfs[index] = cpfComMascara;
            alert('CPF digitado ' + cpfComMascara + ' é válido.');
        } else {
            alert('CPF inválido');
        }
    }

}