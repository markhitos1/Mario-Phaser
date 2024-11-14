import {createAnimations} from './animations.js'
import {playGame} from './estructure.js'
// global phaser
const pantallaX = window.innerWidth;
const pantallaY = window.innerHeight;
const overEnemy = new Audio('assets/sound/effects/goomba-stomp.wav');
const over = new Audio('/assets/sound/music/gameover.mp3');
const music1 = new Audio("/assets/sound/music/overworld/theme.mp3");
const victory = new Audio('assets/sound/music/win.wav')

window.setTimeout(()=>{
  music1.loop = true
  music1.play()
},5200)

let hasJumped = false;//para que no repita musica de victoria

var a,b,c,a2,b2,c2;

if (pantallaX>= 1000 && pantallaX >= 550) {
   a = 3;
   a2 = 2
   b = 1.5
   b2 = 1
   c = 0.5
   c2= 0.4
}else if(pantallaX>= 800 && pantallaX >= 550){
  a = 2.5;
  a2= 1.7
  b = 1.5
  b2 = 1
  c = 0.4
}else{
  a = 2.2;
  a2= 1.3
  b = 1.1
  b2 = 1
  c = 0.3
}

console.log('pantalla '+ a);



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
         debug: false
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
      'cloud2',
      'assets/scenery/overworld/cloud2.png'
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
      'assets/entities/overworld/goomba.png',
      {frameWidth: 16, frameHeight: 16}
    )
    this.load.image(
      'start',
      'assets/scenery/sign.png'
   )
   this.load.image(
    'escalones',
    'assets/blocks/overworld/immovableBlock.png'
   )
   
}

function create (){

 this.floor = this.physics.add.staticGroup()


 


 console.log( pantallaY /2);

  //nubes
   this.add.image(100,50,'cloud2')
   .setOrigin(0,0)
   .setScale(c)

   this.add.image(260,60,'cloud1')
   .setOrigin(0,0)
   .setScale(c)
   this.add.image(450,30,'cloud1')
   .setOrigin(0,0)
   .setScale(c)
   this.add.image(620,70,'cloud2')
   .setOrigin(0,0)
   .setScale(c)
   this.add.image(850,60,'cloud1')
   .setOrigin(0,0)
   .setScale(c)
   this.add.image(990,90,'cloud1')
   .setOrigin(0,0)
   .setScale(c)
   this.add.image(1080,30,'cloud2')
   .setOrigin(0,0)
   .setScale(c)
   this.add.image(1220,60,'cloud1')
   .setOrigin(0,0)
   .setScale(c)
   this.add.image(1390,40,'cloud1')
   .setOrigin(0,0)
   .setScale(c)
   this.add.image(1570,70,'cloud1')
   .setOrigin(0,0)
   .setScale(c)
   this.add.image(1690,10,'cloud2')
   .setOrigin(0,0)
   .setScale(c)
   this.add.image(1890,80,'cloud1')
   .setOrigin(0,0)
   .setScale(c)
   this.add.image(2080,30,'cloud1')
   .setOrigin(0,0)
   .setScale(c)
   this.add.image(2280,90,'cloud2')
   .setOrigin(0,0)
   .setScale(c)
   this.add.image(2480,10,'cloud1')
   .setOrigin(0,0)
   .setScale(c)
   this.add.image(2680,50,'cloud2')
   .setOrigin(0,0)
   .setScale(c)
   this.add.image(2890,80,'cloud1')
   .setOrigin(0,0)
   .setScale(c)




//bloque de inicio

 this.floor
.create(0,config.height , 'floorbricks')
.setOrigin(0,0)
.setScale(1)
.refreshBody()
// calculos del suelo
const bloquesY = this.textures.list.floorbricks.frames.__BASE.cutHeight+16;

//motañas

this.add.image(80, pantallaY - bloquesY ,'mountain')
.setOrigin(0,1)
.setScale(1)

this.add.image(180,( pantallaY - bloquesY ),'mountain2')
.setOrigin(0,1)
.setScale(1)

this.add.image(280,( config.height - bloquesY ),'mountain')
.setOrigin(0,1)
.setScale(1)

this.add.image(1200,( config.height - bloquesY ),'mountain')
.setOrigin(0,1)
.setScale(1)

this.add.image(1340,( config.height - bloquesY ),'mountain2')
.setOrigin(0,1)
.setScale(1)

this.add.image(1440,( config.height - bloquesY ),'mountain')
.setOrigin(0,1)
.setScale(0.65)

this.add.image(1540,( config.height - bloquesY ),'mountain2')
.setOrigin(0,1)
.setScale(0.54)

// bloques de mapa

this.floor
.create(0, config.height , 'floorbricks')
.setOrigin(0,1)
.setScale(b)
.refreshBody()

 this.floor
   .create(128, config.height, 'floorbricks')
   .setOrigin(0,1)
   .setScale(b)
   .refreshBody()
  
   this.floor
   .create(240, config.height , 'floorbricks')
   .setOrigin(0,1)
   .setScale(b)
   .refreshBody()  

   this.floor
   .create(360, config.height , 'floorbricks')
   .setOrigin(0,1)
   .setScale(b)
   .refreshBody()  
   
   this.floor
   .create(465, config.height , 'floorbricks')
   .setOrigin(0,1)
   .setScale(b)
   .refreshBody()  

   this.floor
   .create(560, config.height -90, 'floorbricks')
   .setOrigin(0,1)
   .setScale(b)
   .refreshBody() 
   
   this.floor
   .create(740, config.height -90, 'floorbricks')
   .setOrigin(0,1)
   .setScale(b)
   .refreshBody()  

   this.floor
   .create(909, config.height -90, 'floorbricks')
   .setOrigin(0,1)
   .setScale(b)
   .refreshBody()  
   
   this.floor
   .create(1185, config.height , 'floorbricks')
   .setOrigin(0,1)
   .setScale(b)
   .refreshBody()  
   
   this.floor
   .create(1313, config.height , 'floorbricks')
   .setOrigin(0,1)
   .setScale(b)
   .refreshBody()
    
   this.floor
   .create(1441, config.height , 'floorbricks')
   .setOrigin(0,1)
   .setScale(b)
   .refreshBody()  
      
   this.floor
   .create(1569, config.height , 'floorbricks')
   .setOrigin(0,1)
   .setScale(b)
   .refreshBody()

   this.floor
   .create(1669, config.height , 'floorbricks')
   .setOrigin(0,1)
   .setScale(b)
   .refreshBody()

   this.floor
   .create(1798, config.height , 'floorbricks')
   .setOrigin(0,1)
   .setScale(b)
   .refreshBody()
   this.floor
   .create(1990, config.height , 'floorbricks')
   .setOrigin(0,1)
   .setScale(b)
   .refreshBody()  
   this.floor
   .create(2090, config.height , 'floorbricks')
   .setOrigin(0,1)
   .setScale(b)
   .refreshBody()  
   this.floor
   .create(2190, config.height , 'floorbricks')
   .setOrigin(0,1)
   .setScale(b)
   .refreshBody()  
   this.floor
   .create(2290, config.height , 'floorbricks')
   .setOrigin(0,1)
   .setScale(b)
   .refreshBody() 
   this.floor
   .create(2390, config.height , 'floorbricks')
   .setOrigin(0,1)
   .setScale(b)
   .refreshBody()
   this.floor
   .create(2490, config.height , 'floorbricks')
   .setOrigin(0,1)
   .setScale(b)
   .refreshBody() 
   this.floor
   .create(2590, config.height , 'floorbricks')
   .setOrigin(0,1)
   .setScale(b)
   .refreshBody() 
   this.floor
   .create(2690, config.height , 'floorbricks')
   .setOrigin(0,1)
   .setScale(b)
   .refreshBody()  
   this.floor
   .create(2790, config.height , 'floorbricks')
   .setOrigin(0,1)
   .setScale(b)
   .refreshBody()     
   this.floor
   .create(2890, config.height , 'floorbricks')
   .setOrigin(0,1)
   .setScale(b)
   .refreshBody()    

  //tubos
  // this.floor
  //  .create(450, ( config.height - bloquesY ), 'pipe1')
  //  .setOrigin(0,1)
  //  .refreshBody()
    
   this.tubos2 = this.physics.add.sprite(0,( pantallaY - (bloquesY+1) ),'pipe1')
   .setOrigin(0,1)
   .setCollideWorldBounds(true)
   .setGravityY(0)
   .setScale(b)
   .refreshBody()
   this.tubos = this.physics.add.sprite(445,( pantallaY - (bloquesY+1) ),'pipe1')
   .setOrigin(0,1)
   .setCollideWorldBounds(true)
   .setGravityY(0)
   .setScale(b)
   .refreshBody()
   this.tubos3 = this.physics.add.sprite(2445,( pantallaY - (bloquesY+1) ),'pipe1')
   .setOrigin(0,1)
   .setCollideWorldBounds(true)
   .setGravityY(0)
   .setScale(b)
   .refreshBody()
   //bloks de escalones

   this.floor
   .create(1772,config.height - bloquesY , 'escalones')
   .setOrigin(0,1)
   .setScale(2)
   .refreshBody()  

   this.floor
   .create(1804,config.height - bloquesY , 'escalones')
   .setOrigin(0,1)
   .setScale(2)
   .refreshBody()  
   
   this.floor
   .create(1836,config.height - bloquesY , 'escalones')
   .setOrigin(0,1)
   .setScale(2)
   .refreshBody()  
   this.floor
  .create(1868,config.height - bloquesY , 'escalones')
  .setOrigin(0,1)
  .setScale(2)
  .refreshBody()  

   this.floor
   .create(1900,config.height - bloquesY , 'escalones')
   .setOrigin(0,1)
   .setScale(2)
   .refreshBody()  
  this.floor
  .create(1932,config.height - bloquesY , 'escalones')
  .setOrigin(0,1)
  .setScale(2)
  .refreshBody()  
  // segunda sila escalones 
  this.floor
   .create(1804,config.height - (bloquesY + 32), 'escalones')
   .setOrigin(0,1)
   .setScale(2)
   .refreshBody()  
   this.floor
   .create(1836,config.height - (bloquesY + 32), 'escalones')
   .setOrigin(0,1)
   .setScale(2)
   .refreshBody()  
   this.floor
  .create(1868,config.height - (bloquesY +32) , 'escalones')
  .setOrigin(0,1)
  .setScale(2)
  .refreshBody()  

   this.floor
   .create(1900,config.height - (bloquesY +32) , 'escalones')
   .setOrigin(0,1)
   .setScale(2)
   .refreshBody()  
  this.floor
  .create(1932,config.height - (bloquesY + 32) , 'escalones')
  .setOrigin(0,1)
  .setScale(2)
  .refreshBody()  

  //tercer fila escalones
 
  this.floor
  .create(1836,config.height - (bloquesY + 64), 'escalones')
  .setOrigin(0,1)
  .setScale(2)
  .refreshBody()  
  this.floor
 .create(1868,config.height - (bloquesY + 64) , 'escalones')
 .setOrigin(0,1)
 .setScale(2)
 .refreshBody()  

  this.floor
  .create(1900,config.height - (bloquesY + 64) , 'escalones')
  .setOrigin(0,1)
  .setScale(2)
  .refreshBody()  
 this.floor
 .create(1932,config.height - (bloquesY + 64) , 'escalones')
 .setOrigin(0,1)
 .setScale(2)
 .refreshBody()  
//  cuarta fila escalones
this.floor
.create(1868,config.height - (bloquesY + 96) , 'escalones')
.setOrigin(0,1)
.setScale(2)
.refreshBody()  

 this.floor
 .create(1900,config.height - (bloquesY + 96) , 'escalones')
 .setOrigin(0,1)
 .setScale(2)
 .refreshBody()  
this.floor
.create(1932,config.height - (bloquesY + 96) , 'escalones')
.setOrigin(0,1)
.setScale(2)
.refreshBody()  
// QUINTA FILA ESCALONES
this.floor
.create(1900,config.height - (bloquesY + 128) , 'escalones')
.setOrigin(0,1)
.setScale(2)
.refreshBody()  
this.floor
.create(1932,config.height - (bloquesY + 128) , 'escalones')
.setOrigin(0,1)
.setScale(2)
.refreshBody()  

   //castillo final
   this.add.image(2810,( config.height - (bloquesY) ),'castle')
   .setOrigin(0,1)
   .setScale(a2)
 

  this.enemies =  this.physics.add.sprite( 200,( pantallaY /2),'enemy')
  .setOrigin(0,1)
   .setCollideWorldBounds(true)
   .setGravityY(300)
   .setScale(a2)
   .setVelocityX(90)
   this.enemies2 =  this.physics.add.sprite( 2300,( pantallaY /2),'enemy2')
  .setOrigin(0,1)
   .setCollideWorldBounds(true)
   .setGravityY(300)
   .setScale(a2)
   .setVelocityX(90)

  this.anims.create({
    key:'enemy-walk',
    frames: this.anims.generateFrameNumbers(
        'enemy',
        {frames: [0,1]}
    ),
    frameRate: 3,
    repeat: -1
 }) 
 this.enemies.anims.play('enemy-walk');

 this.anims.create({
  key:'enemy-walk2',
  frames: this.anims.generateFrameNumbers(
      'enemy2',
      {frames: [0,1]}
  ),
  frameRate: 3,
  repeat: -1
}) 
this.enemies2.anims.play('enemy-walk2')


  //  mario bro
   this.mario =  this.physics.add.sprite( 10,( pantallaY /2),'mario')
   .setOrigin(0,1)
   .setCollideWorldBounds(true)
   .setGravityY(300)
   .setScale(a)
   
   this.physics.world.setBounds(0,0,3000,config.height)
   this.physics.add.collider(this.mario, this.floor)
   this.physics.add.collider(this.tubos, this.floor)
   this.physics.add.collider(this.tubos2, this.floor)
   this.physics.add.collider(this.tubos3, this.floor)
   this.physics.add.collider(this.mario, this.tubos)
   this.physics.add.collider(this.mario, this.enemies)
   this.physics.add.collider(this.mario, this.enemies2)
   this.physics.add.collider(this.enemies, this.floor)
   this.physics.add.collider(this.enemies2, this.floor)
   this.physics.add.collider(this.mario, this.tubos2)
   this.physics.add.collider(this.mario, this.tubos3)

   this.cameras.main.setBounds(0,0,3000, config.height)
   this.cameras.main.startFollow(this.mario)
   createAnimations(this)

   this.keys = this.input.keyboard.createCursorKeys()

  //playGame(this)

 
}



function update(){
  
    // mario y los objetos
   if(this.mario.x >= 408 && 
      this.mario.x <= 425 && 
      this.mario.y >= (this.tubos.y - this.tubos.height+2)
   ){
  this.mario.x = 408
  }else if(this.mario.x >= 430 &&
           this.mario.x <= 478 &&
           this.mario.y >= (this.tubos.y - this.tubos.height+2)
  ){
  this.mario.x = 478
  }else if(this.mario.x >= 3 &&
         this.mario.x <= 28 &&
         this.mario.y >= (this.tubos2.y - this.tubos2.height+2)
  ){
  this.mario.x = 28
  
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
  
  // mario toca enemy
  if( this.enemies.y == this.mario.y &&
    (this.mario.x + this.mario.width) >= ( this.enemies.x - this.enemies.width-16) &&
    (this.mario.x - this.mario.width) <= ( this.enemies.x +14)
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
// muerte enemigo1
if(( this.enemies.y - this.mario.y ) <= (this.enemies.height * 2 ) && //47.5 a 47.3
  (this.enemies.x - this.mario.x) <= 50 &&      //LIMITE IZQUIERDA 50
  (this.enemies.x - this.mario.x) >= -22        //LIMITE DERECHA -20
){ 
  overEnemy.play()
  this.enemies
  .setVelocityX(300)
  .setCollideWorldBounds(false);
  this.enemies.isDead = true;

  setTimeout(()=>{
    this.enemies.y += +30; 
  },500)
  

}
// muerte enemi2
if (
  (this.enemies2.y - this.mario.y) <= (this.enemies2.height * 2) && // Límite de proximidad en Y
  (this.enemies2.x - this.mario.x) <= 50 && // Límite izquierdo en X
  (this.enemies2.x - this.mario.x) >= -22   // Límite derecho en X
) { 
  overEnemy.play();
  this.enemies2
    .setVelocityX(300)
    .setCollideWorldBounds(false);
  this.enemies2.isDead = true;

  setTimeout(() => {
    this.enemies2.y += 30; 
  }, 500);
}
// victoria de Mario
if (this.mario.x >= 2800 && !hasJumped) {
  this.mario.setVelocityY(-300);
  this.mario.anims.play('mario-jump', true);
  victory.play()
   victory.volume = 0.7;
  music1.pause()
  hasJumped = true;
  setTimeout(()=>{
    this.scene.restart()
  },5000)

}


if(this.enemies.isDead && this.enemies2.isDead)return //elimina 

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
// enemigo2
 
 if(this.enemies2.isDead)return //elimina a los personajes   

// Movimiento hacia la izquierda si la posición x alcanza el límite superior (2400)
if (this.enemies2.x >= 2430) {
  this.enemies2.setVelocityX(-100);
  this.enemies2.flipX = false;
} 
// Detener al enemigo si está en el límite superior (2400) y y está en una posición mayor o igual a 400
else if (this.enemies2.x >= 2430 && this.enemies2.y >= 400) {
  this.enemies2.setVelocityX(0);
}

// Movimiento hacia la derecha si la posición x alcanza el límite inferior (2100)
if (this.enemies2.x <= 1970) {
  this.enemies2.setVelocityX(100);
  this.enemies2.flipX = true;
} 
// Detener al enemigo si está en el límite inferior (2100) y y está en una posición mayor o igual a 400
else if (this.enemies2.x <= 1970 && this.enemies2.y >= 400) {
  this.enemies2.setVelocityX(0);
}




}


