function toggleMode () {
    const html = document.documentElement
    html.classList.toggle("light")

    // solicitar a tag img
    const img = document.querySelector("#profile img")

    // substituir a imagem do black mode
    if (html.classList.contains('light')) {
        // se tiver em light mode, pode adicionar nova imagem ao mode light
        img.setAttribute('src', './assets/assets/avatar-light.png')
    }  else  {  
        // set tiver sem light mode, pode prosseguir com a img default
        img.setAttribute('src', './assets/assets/avatar.png')
    }



}