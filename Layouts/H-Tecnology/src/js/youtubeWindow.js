export default class YoutubeWindow {
    constructor(buttonSelector, overlay){
        this.buttonSelector = document.querySelectorAll(buttonSelector);
        this.overlay = document.querySelector(overlay);
    }

    bindOpenBtn(){
        this.buttonSelector.forEach(btn =>{
            btn.addEventListener('click', ()=>{
                if (document.querySelector('iframe#player')) {
                    this.overlay.style.display = 'flex';
                    this.player.playVideo();  
                } else {
                    let path = btn.getAttribute('data-id');
                    this.creatPlayer(path);
                }
            });
        });
    }

    bindCloseBtn() {
        this.overlay.addEventListener('click', ()=>{
            this.overlay.style.display = 'none';
            this.player.pauseVideo();  
        });
    }

    creatPlayer(url){
        this.player = new YT.Player('player', {
            height: '360',
            width: '640',
            videoId: `${url}`
        });
        
        this.overlay.style.display = 'flex';
    }

    init() {
        try {
            var tag = document.createElement('script');

            tag.src = "https://youtube.com/iframe_api";
            var firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
            
            this.bindOpenBtn();
            this.bindCloseBtn();
        } catch (error) {
            console.log(`This you Error:  ${error}`);
        }
    }
}