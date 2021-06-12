window.onscroll = () => {
    if(window.pageYOffset > 50){
        document.getElementById('topHeader').classList.add('top-header-white-background')
    }else{
        document.getElementById('topHeader').classList.remove('top-header-white-background')
    }
}