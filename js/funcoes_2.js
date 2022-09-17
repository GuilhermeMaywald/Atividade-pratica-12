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
    function recebeCPFUsuario(cpf) {
        if (cpf.length == 11) {
            return true;
        } else {
            return false;
        }
    }
    let recebeCPF = prompt('Digite seu CPF (apenas números): ');
    let cpfValido = recebeCPFUsuario(recebeCPF);
    function cpfFormatado(cpf,cpfVerdadeiro) {
        if (cpfVerdadeiro == true) {
            let parte1 = cpf.slice(0, 3);
            let parte2 = cpf.slice(3, 6);
            let parte3 = cpf.slice(6, 9);
            let parte4 = cpf.slice(9, 11);
            return cpf = `${parte1}.${parte2}.${parte3}-${parte4}`;
        } else {
            return 'Digite um CPF válido!';
        }
    }
    alert(cpfFormatado(recebeCPF, cpfValido));
    
}