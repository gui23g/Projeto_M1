class TitleScene extends Phaser.Scene{
    //tela de inicio do jogo
    constructor(){
    
        super({key:'TitleScene'});
    }
    preload(){
        //preload das imagens
        this.load.image('mouse','assets/mouse.png');
        this.load.image('title','assets/telaInicio.png');
        this.load.image('play','assets/play.png');
    }
    create(){
        //tela de titulo
        this.add.image(480,240,'title').setScale(0.25);
        this.play = this.add.image(480,240,'play').setScale(0.25);
        this.play.setInteractive();
        this.play.on('pointerdown',() =>{
            this.scene.stop('TitleScene');
            this.scene.start('Cutscenes');
        })
        //cursor do mouse
        this.mouse = this.add.image(480,240,'mouse').setScale(0.1).setOrigin(0.15,0.05);
        this.input.setDefaultCursor('none');
    }
    update(){
        this.mouse.x = this.input.x;
        this.mouse.y = this.input.y;
    }
}