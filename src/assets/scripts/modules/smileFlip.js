if (document.location.pathname === "/") {
    const smileyElement = Array.from(document.getElementsByClassName('title-image'));

    smileyElement[0].onclick = function () {
        smileyElement[0].src = '/assets/images/smile.png'
        setTimeout(() => smileyElement[0].src = '/assets/images/upsidedownface.png', 3000)
    }
}
