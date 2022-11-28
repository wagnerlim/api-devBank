export function validateCpf(cpf: string) {
    if (typeof cpf !== "string") return false
    cpf = cpf.replace(/[\s.-]*/igm, '')
    if (
        !cpf ||
        cpf.length != 11 ||
        cpf == "00000000000" ||
        cpf == "11111111111" ||
        cpf == "22222222222" ||
        cpf == "33333333333" ||
        cpf == "44444444444" ||
        cpf == "55555555555" ||
        cpf == "66666666666" ||
        cpf == "77777777777" ||
        cpf == "88888888888" ||
        cpf == "99999999999"
    ) {
        return false
    }
    var addition = 0
    var remmant: any
    for (var i = 1; i <= 9; i++)
        addition = addition + parseInt(cpf.substring(i - 1, i)) * (11 - i)
    remmant = (addition * 10) % 11
    if ((remmant == 10) || (remmant == 11)) remmant = 0
    if (remmant != parseInt(cpf.substring(9, 10))) return false
    addition = 0
    for (var i = 1; i <= 10; i++)
        addition = addition + parseInt(cpf.substring(i - 1, i)) * (12 - i)
    remmant = (addition * 10) % 11
    if ((remmant == 10) || (remmant == 11)) remmant = 0
    if (remmant != parseInt(cpf.substring(10, 11))) return false
    return true
}