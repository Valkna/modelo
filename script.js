function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    
    if (hora >= 5 && hora < 12) {
        img.src = 'morning.jpg'
        document.body.style.background = '#FDCD36'
    }   
    else if (hora >= 12 && hora < 18) {
        img.src = 'afternoon.jpg'
        document.body.style.background = '#0175D0'
    }
    else {
        img.src = 'night.jpg'
        document.body.style.background = '#001E3E'
    }
}