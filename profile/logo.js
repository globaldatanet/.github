function logo() {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        var img = document.createElement('div');
        document.body.appendChild(img)
        img.innerHTML = "<img src='https://github.com/globaldatanet/.github/raw/main/profile/logo-white.png'/>";
    }
    else{
        var img = document.createElement('div');
        document.body.appendChild(img)
        img.innerHTML = "<img src='https://github.com/globaldatanet/.github/raw/main/profile/logo-black.png'/>";
    }
}
