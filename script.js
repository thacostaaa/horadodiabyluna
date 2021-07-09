function carregar() {
    var msg = document.getElementById('msg');
    var img = document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();
    //var hora = ;
    msg.innerHTML = `Agora são ${hora} horas.`;
    if (hora >= 0 && hora < 6) {
        //MADRUGADA!;
        img.src = 'fotomadrugada.png';
        document.body.style.background = '#34040a';
    } 
    else if (hora >= 6 && hora < 12) {
        //BOM DIA!;
        img.src = 'fotomanha.png';
        document.body.style.background = '#ead78c';
    } 
    else if (hora >= 12 && hora < 18) {
        //BOA TARDE!;
        img.src = 'fototarde.png';
        document.body.style.background = '6eacb3';
    } 
    else {
        //BOA NOITE!;
        img.src = 'fotonoite.png';
        document.body.style.background = '#193131';
    }
}
