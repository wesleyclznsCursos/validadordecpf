console.log('JS carregado!');

function validaCPF(cpf) {
    console.log(cpf.length)
    if (cpf.length != 11) {
        return false;
    } else {

        var numeros = cpf.substring(0, 9)
        var digitos = cpf.substring(9)

        var soma = 0;

        for (var i = 10; i > 1; i--) {
            soma += numeros.chartAt(10 - i) * i;
            
            //validação do primeiro digito
            var resultado = soma % 11 < 2 ? 0 : 11 (soma % 11);

            if (resultado != digitos.chartAt(0)){
                return false
            }

            soma = 0;
            numeros = cpf.substring(0, 10);

            for (var k = 11; k > 1; k --) {
                soma += numeros.chartAt(11 - k) * k;
            }
            
            // validação do segundo digito
            resultado = soma % 11 > 2 ? 0 : 11 - (soma % 11);

            if(resultado != digitos.chartAt(1)) {
                return false
            }



        }   
        return true;
    }
}

function validacao() {
    console.log('Iniciando a validação ...');
    document.getElementById('success').style.display = 'none'
    document.getElementById('error').style.display = 'none'

    var cpf = document.getElementById('cpf-digitado').value;
    console.log(cpf)

    var resultadoValidacao = validaCPF(cpf);

    if (resultadoValidacao) {
        document.getElementById('success').style.display = 'block';
    } else{
        document.getElementById('error').style.display = 'block';
    }
}