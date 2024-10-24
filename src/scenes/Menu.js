class Menu extends Phaser.Scene {
    constructor() {
        super('menuScene')
    }

    preload(){
        this.load.path = './assets/'

        // load background assets
        this.load.image('bg', 'img/exBG.png')
        this.load.image('end', 'img/end.png')

        // load UI assets
        this.load.image('box', 'img/box.png')
        this.load.image('divider', 'img/divider.png')

        // load items
        this.load.image('gold', 'img/gold.png')
        this.load.image('flyer', 'img/questFlyer.png')
        this.load.image('bell', 'img/bell.png')
        this.load.image('tray', 'img/tray.png')

        // load audio
        this.load.audio('ding', 'audio/ding.wav')
        this.load.audio('music', 'audio/music.wav')
    }

    create(){

        // add music
        this.music = this.sound.add('music', { volume: 0.25, loop: true });

        if(!this.musicPlayed){
            this.music.play()
            this.musicPlayed = true
        }

        if (this.musicPlayed && this.scene.isActive('playScene')){
            this.musicPlayed = false
        }
        
        

        // title config
        let titleConfig = {
            fontFamily: 'Courier',
            fontSize: '28px',
            backgroundColor: '#F3B141',
            color: '#843605',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }

        // button config
        let buttonConfig = {
            fontSize: '20px',
            backgroundColor: '#FFFFFF',
            color: '#000000'
        }

        // display title text
        this.add.text(centerX, centerY - 25, ' Ye Guild Clerk! ', titleConfig).setOrigin(0.5)
    
        // display play button
        const playButton = this.add.text(centerX, centerY + 25, ' PLAY ', buttonConfig).setOrigin(0.5)
        // make play button interactive
        playButton.setInteractive()
        // on click, start playScene
        playButton.on("pointerdown", (pointer)=>{
            console.log("click")
            this.scene.start('playScene')
        })

        // instruction text
        document.getElementById('info').innerHTML = 'Controls: [Left Click] to interact. [1] to see counter. [2] to see reward storage.'
    }

    update(){
        // shortcut to start play scene
        // this.scene.start('playScene');
    }
}