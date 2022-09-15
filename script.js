function check() {
    var nDate = new Date()
    var cYear = nDate.getFullYear()
    var fYear = document.getElementById('txtyear')
    var res = document.getElementById('res')
    if (fYear.value.length == 0 || fYear.value > cYear) {
        window.alert('[ERRO] verifique o numero')
    } else {
        var fsex = document.getElementsByName('radsex')
        var age = cYear - Number(fYear.value)
        var genre = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genre = 'Homem'
            if (age == 0 && age < 1) {
                //Bebê
                img.setAttribute('src', 'bb-m.png')
            } else if (age < 10) {
                //Criança
                img.setAttribute('src', 'crianca-m.png')
            } else if (age < 21) {
                //Jovem
                img.setAttribute('src', 'jovem-m.png')
            } else if (age < 60) {
                //Adulto
                img.setAttribute('src', 'adulto-m.png')
            } else {
                //Idoso
                img.setAttribute('src', 'idoso-m.png')
            }
        } else if (fsex[1].checked) {
            genre = 'Mulher'
            if (age == 0 && age < 1) {
                //Bebê
                img.setAttribute('src', 'bb-f.png')
            } else if (age < 10) {
                //Criança
                img.setAttribute('src', 'crianca-f.png')
            } else if (age < 21) { 
                //Jovem
                img.setAttribute('src', 'jovem-f.png')
            } else if (age < 60) {
                //Adulto
                img.setAttribute('src', 'adulta-f.png')
            } else {
                //Idoso
                img.setAttribute('src', 'idosa-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genre} com ${age} anos`
        res.appendChild(img)
    }
}