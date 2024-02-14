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
        this.load.image('mouse1','assets/pixil-frame-0 (2).png');
        this.load.image('mouse2','assets/pixil-frame-0 (4).png');
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
        //this.mouse = this.add.image(480,240,'mouse').setScale(0.1).setOrigin(0.15,0.05);
        // this.mouse = this.add.image(480,240,'mouse1').setScale(0.01).setOrigin(0.5,0.05);
        this.mouse = this.add.image(480,240,'mouse2').setScale(0.015).setOrigin(0.425,0.43);
        this.input.setDefaultCursor('none');
    }
    update(){
        this.mouse.x = this.input.x;
        this.mouse.y = this.input.y;
    }
}