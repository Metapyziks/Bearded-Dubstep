var SCREEN_WIDTH = 512;
var SCREEN_HEIGHT = 384;

var TYLER_WIDTH = 14;
var TYLER_HEIGHT = 6;
var TYLER_CENTER_X = 0.5;
var TYLER_CENTER_Y = 25/32;

var BG_WIDTH = 128 * 16;
var BG_HEIGHT = 94 * 16;

var game = new Phaser.Game(SCREEN_WIDTH, SCREEN_HEIGHT, Phaser.AUTO, "bearded-dubstep", {
	
	preload:preload, create:create, update:update
});

var map;

var tyler;
var tylerSpeed = 4;


function cameraFollowTyler()
{
	game.camera.x = Math.round(tyler.x - SCREEN_WIDTH * 0.5);
	game.camera.y = Math.round(tyler.y - SCREEN_HEIGHT * 0.5);
}




function preload()
{
	game.load.tilemap("WorldBG", "Maps/World.json", null, Phaser.Tilemap.TILED_JSON);
	game.load.image("Tyler", "Images/Tyler3.png");
	game.load.image("Tiles", "Images/Tilemap.png");
}




function create()
{
	map = game.add.tilemap("WorldBG", 16, 16);
	map.addTilesetImage("Tiles");
	map.createLayer(0).resizeWorld();
	map.createLayer(1);
	
	tyler = game.add.sprite(BG_WIDTH / 2, BG_HEIGHT / 2, "Tyler");
	tyler.anchor.set(TYLER_CENTER_X, TYLER_CENTER_Y);
	cameraFollowTyler();
}




function update()
{
	var moveAmount = {x:0, y:0};
	
	if(game.input.keyboard.isDown(Phaser.Keyboard.D))
	{
		moveAmount.x = moveAmount.x + 1;
	}
	
	if(game.input.keyboard.isDown(Phaser.Keyboard.A))
	{
		moveAmount.x = moveAmount.x - 1;
	}
	
	if(game.input.keyboard.isDown(Phaser.Keyboard.S))
	{
		moveAmount.y = moveAmount.y + 1;
	}
	
	if(game.input.keyboard.isDown(Phaser.Keyboard.W))
	{
		moveAmount.y = moveAmount.y - 1;
	}
	
	var moveSpeed = Math.sqrt(moveAmount.x * moveAmount.x + moveAmount.y * moveAmount.y);
	
	if(moveSpeed != 0)
	{
		moveAmount.x = moveAmount.x / moveSpeed;
		moveAmount.y = moveAmount.y / moveSpeed;
	
		tyler.x = Math.round(tyler.x + moveAmount.x * tylerSpeed);
		tyler.y = Math.round(tyler.y + moveAmount.y * tylerSpeed);
		
		cameraFollowTyler();
	}
}