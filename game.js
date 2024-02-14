var config ={
    //configuracoes basicas
    type: Phaser.AUTO,
    width: 960,
    height: 480,
    scene:[TitleScene,Cutscenes]
};
var game = new Phaser.Game(config);