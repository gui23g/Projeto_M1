class Cutscenes extends Phaser.Scene{
    constructor(){
        super({key: 'Cutscenes'});
    }
    preload(){
        //preload das imagens
        this.load.image('cutscene1', 'assets/cutscene.png');
    }
    create(){
        this.screen = this.add.image(480,240,'cutscene1').setScale(0.125);
    }
    update(){

    }
}