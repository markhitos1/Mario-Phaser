import {createAnimations} from './animations.js'

// global phaser



const pantallaX = window.innerWidth;
const pantallaY = window.innerHeight;
const overEnemy = new Audio('assets/sound/effects/goomba-stomp.wav');
const over = new Audio('/assets/sound/music/gameover.mp3');
const music1 = new Audio("/assets/sound/music/overworld/theme.mp3")

window.setTimeout(()=>{
  music1.loop = true
  music1.play()
},100)


const config ={
type: Phaser.AUTO,
width: pantallaX,
height:pantallaY,
backgroundColor:'#049cd8',
parent:'game',
physics: {
    default: 'arcade',
    arcade:{
         gravity: {y:300},
         debug: true
    }
   
},
scene:{
    preload,
    create,
    update
}
}
new Phaser.Game(config)

function preload (){
    this.load.image(
        'cloud1',
        'assets/scenery/overworld/cloud1.png'
    )
    this.load.image(
        'floorbricks',
        'assets/scenery/overworld/floorbricks.png'
    )
    this.load.spritesheet(
        'mario',
        'assets/entities/mario.png',
        {frameWidth: 18, frameHeight: 16}
    )
    this.load.image(
      'pipe1',
      'assets/scenery/pipe1.png',
      {frameWidth: 32, frameHeight: 48}
    )
    this.load.image(
      'castle',
      'assets/scenery/castle.png'
    )
    this.load.image(
      'mountain',
      'assets/scenery/overworld/mountain1.png'
    )
    this.load.image(
      'mountain2',
      'assets/scenery/overworld/mountain2.png'
    )
    this.load.spritesheet(
      'enemy',
      'assets/entities/koopa.png',
      {frameWidth: 16, frameHeight: 24}
    )
    this.load.spritesheet(
      'enemy2',
      'assets/entities/shell.png',
      {frameWidth: 16, frameHeight: 15}
    )
    //musica del juego
    this.load.audio('prueba',"/assets/sound/music/overworld/theme.mp3")
 
}

function create (){

 this.floor = this.physics.add.staticGroup()


 console.log( pantallaY /2);

  //nubes
   this.add.image(100,50,'cloud1')
   .setOrigin(0,0)
   .setScale(0.25)

   this.add.image(200,60,'cloud1')
   .setOrigin(0,0)
   .setScale(0.25)
   this.add.image(350,30,'cloud1')
   .setOrigin(0,0)
   .setScale(0.25)
   this.add.image(420,70,'cloud1')
   .setOrigin(0,0)
   .setScale(0.25)
   this.add.image(550,60,'cloud1')
   .setOrigin(0,0)
   .setScale(0.25)
   this.add.image(700,50,'cloud1')
   .setOrigin(0,0)
   .setScale(0.25)
   this.add.image(780,30,'cloud1')
   .setOrigin(0,0)
   .setScale(0.25)
   this.add.image(890,60,'cloud1')
   .setOrigin(0,0)
   .setScale(0.25)
   this.add.image(990,40,'cloud1')
   .setOrigin(0,0)
   .setScale(0.25)
   this.add.image(1170,70,'cloud1')
   .setOrigin(0,0)
   .setScale(0.25)
   this.add.image(1370,30,'cloud1')
   .setOrigin(0,0)
   .setScale(0.25)
   this.add.image(1470,80,'cloud1')
   .setOrigin(0,0)
   .setScale(0.25)
   this.add.image(1580,50,'cloud1')
   .setOrigin(0,0)
   .setScale(0.25)


//bloques 


 this.floor
.create(-100,config.height -66, 'floorbricks')
.setOrigin(0,0)
.refreshBody()

this.floor
.create(0, config.height -16 , 'floorbricks')
.setOrigin(0,0.5)
.refreshBody()

 this.floor
   .create(128, config.height -16, 'floorbricks')
   .setOrigin(0,0.5)
   .refreshBody()
  
   this.floor
   .create(240, config.height -16, 'floorbricks')
   .setOrigin(0,0.5)
   .refreshBody()  

   this.floor
   .create(360, config.height -16, 'floorbricks')
   .setOrigin(0,0.5)
   .refreshBody()  
   
   this.floor
   .create(465, config.height -16, 'floorbricks')
   .setOrigin(0,0.5)
   .refreshBody()  

   this.floor
   .create(560, config.height -90, 'floorbricks')
   .setOrigin(0,0.5)
   .refreshBody() 
   
   this.floor
   .create(740, config.height -90, 'floorbricks')
   .setOrigin(0,0.5)
   .refreshBody()  

   this.floor
   .create(909, config.height -90, 'floorbricks')
   .setOrigin(0,0.5)
   .refreshBody()  
   
   this.floor
   .create(1185, config.height -16, 'floorbricks')
   .setOrigin(0,0.5)
   .refreshBody()  
   
   this.floor
   .create(1313, config.height -16, 'floorbricks')
   .setOrigin(0,0.5)
   .refreshBody()
    
   this.floor
   .create(1441, config.height -16, 'floorbricks')
   .setOrigin(0,0.5)
   .refreshBody()  
      
   this.floor
   .create(1569, config.height -16, 'floorbricks')
   .setOrigin(0,0.5)
   .refreshBody()  
// calculos del suelo
   const bloquesY = this.textures.list.floorbricks.frames.__BASE.cutHeight;

//motañas

this.add.image(80,( config.height - bloquesY ),'mountain')
.setOrigin(0,1)
.setScale(0.55)

this.add.image(180,( config.height - bloquesY ),'mountain2')
.setOrigin(0,1)
.setScale(0.65)

this.add.image(280,( config.height - bloquesY ),'mountain')
.setOrigin(0,1)
.setScale(0.45)

this.add.image(1200,( config.height - bloquesY ),'mountain')
.setOrigin(0,1)
.setScale(0.55)

this.add.image(1340,( config.height - bloquesY ),'mountain2')
.setOrigin(0,1)
.setScale(0.55)

this.add.image(1440,( config.height - bloquesY ),'mountain')
.setOrigin(0,1)
.setScale(0.65)

this.add.image(1540,( config.height - bloquesY ),'mountain2')
.setOrigin(0,1)
.setScale(0.54)

  //tubos
  // this.floor
  //  .create(450, ( config.height - bloquesY ), 'pipe1')
  //  .setOrigin(0,1)
  //  .refreshBody()
    
   this.tubos = this.physics.add.sprite(445,( config.height - bloquesY ),'pipe1')
   .setOrigin(0,1)
   .setCollideWorldBounds(true)
   .setGravityY(0)
   .setScale(1)
   .refreshBody()

   //castillo final
   this.add.image(1510,( config.height - bloquesY ),'castle')
   .setOrigin(0,1)
   .setScale(0.77)
 

  this.enemies =  this.physics.add.sprite( 300,( pantallaY /2),'enemy')
  .setOrigin(0,1)
   .setCollideWorldBounds(true)
   .setGravityY(300)
   .setScale(1.2)
   .setVelocityX(0)

  this.anims.create({
    key:'enemy-walk',
    frames: this.anims.generateFrameNumbers(
        'enemy',
        {frames: [0,1]}
    ),
    frameRate: 3,
    repeat: -1
 }) 
 this.enemies.anims.play('enemy-walk')
  

  //  mario bro
   this.mario =  this.physics.add.sprite( 10,( pantallaY /2),'mario')
   .setOrigin(0,1)
   .setCollideWorldBounds(true)
   .setGravityY(300)
   .setScale(1.6)
   
   this.physics.world.setBounds(0,0,1700,config.height)
   this.physics.add.collider(this.mario, this.floor)
   this.physics.add.collider(this.tubos, this.floor)
   this.physics.add.collider(this.mario, this.tubos)
   this.physics.add.collider(this.mario, this.enemies)
   this.physics.add.collider(this.enemies, this.floor)

   this.cameras.main.setBounds(0,0,1700, config.height)
   this.cameras.main.startFollow(this.mario)
   createAnimations(this)

   this.keys = this.input.keyboard.createCursorKeys()

   //music the game
   let una = 0
   let music = this.sound.add('prueba')
   
   

}



function update(){
    // mario y los objetos
   if(this.mario.x >= 420 && 
    this.mario.x <= 425 && 
     this.mario.y >= 400 
   ){
  this.mario.x = 420
  }else if(this.mario.x >= 430 &&
           this.mario.x <= 475 &&
           this.mario.y >= 400 
  ){
  this.mario.x = 475
  }
  //muerte de mario 
  if(this.mario.isDead) return

  if(this.keys.left.isDown){
    this.mario.anims.play('mario-walk',true)
    this.mario.x -= 2
    this.mario.flipX = true
  } else if(this.keys.right.isDown){
    this.mario.anims.play('mario-walk',true)
    this.mario.x += 2
    this.mario.flipX = false
  }else{
    this.mario.anims.play('mario-idle',true)
  }
  if(this.keys.up.isDown && this.mario.body.touching.down){
    this.mario.setVelocityY(-300)
    this.mario.anims.play('mario-jump',true) 
    const jump = new Audio('assets/sound/effects/jump.mp3')
    jump.volume = 0.1;
    jump.play()
  } 
  
  
  if(this.mario.y >= config.height ||
    this.enemies.y == this.mario.y &&
    (this.enemies.x - this.mario.x) <= 28.9 &&
    (this.enemies.x - this.mario.x)>= -20 
  ){
    this.mario.setCollideWorldBounds(false)
    this.mario.isDead = true
    this.mario.anims.play('mario-dead',true)
    over.volume = 0.2
    over.play()
    setTimeout(()=>{
        this.mario.setVelocityY(-550)
    },400)
  
    setTimeout(()=>{
        this.scene.restart()
    },3000)
  

}
if(this.mario.y >= (this.enemies.y - this.enemies.height-7) &&
  (this.enemies.x - this.mario.x) <= 28.9 &&
  (this.enemies.x - this.mario.x)>= -20 
){ 
  overEnemy.play()
  this.enemies
  .setVelocityX(300)
  .setCollideWorldBounds(false);
  this.enemies.isDead = true;

  setTimeout(()=>{
    this.enemies.y += +30; 
  },500)
  

}if(this.enemies.isDead)return
if(this.enemies.x >= 430){
  this.enemies.setVelocityX(-100)
  this.enemies.flipX = false
}else if(this.enemies.x >= 430 && this.enemies.y >= 400){
  this.enemies.setVelocityX(0)
}
if(this.enemies.x <= 30 ){
  this.enemies.setVelocityX(100)
  this.enemies.flipX = true
}else if(this.enemies.x <= 30 && this.enemies.y >= 400){
  this.enemies.setVelocityX(0)
}


console.log(this.mario.x);

}

