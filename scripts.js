var SCREEN_WIDTH = 512;
var SCREEN_HEIGHT = 384;

var SCALE = 2;

var TYLER_WIDTH = 14;
var TYLER_HEIGHT = 6;
var TYLER_CENTER_X = 0.5;
var TYLER_CENTER_Y = 25/32;

var BG_WIDTH = 128 * 16;
var BG_HEIGHT = 94 * 16;

var game = new Phaser.Game(SCREEN_WIDTH * SCALE, SCREEN_HEIGHT * SCALE, Phaser.AUTO, "bearded-dubstep", {
	
	preload:preload, create:create, update:update, render:render
}, false, false);


var map;

var objectsLayer;

var tyler;
var tylerSpeed = 2;


var debugOn = false;

function toggleDebug(enableDebug)
{
	console.log("working " + enableDebug);
	debugOn = enableDebug;
	objectsLayer.debug = enableDebug;
}


var pressedKeys = {};

function justPressed(keyCode)
{
	if(!game.input.keyboard.isDown(keyCode))
	{
		pressedKeys[keyCode] = false;
		return false;
	}
	
	if(pressedKeys[keyCode])
	{
		return false;
	}
	
	
	
	pressedKeys[keyCode] = true;
	return true;
}


function preload()
{
	game.load.image("Empty", "Images/empty.png");
	game.load.tilemap("WorldBG", "Maps/World.json", null, Phaser.Tilemap.TILED_JSON);
	game.load.atlas("Tyler", "Images/mainchar.png", "Animations/mainchar.json");
	game.load.image("Tiles", "Images/Tilemap.png");
}




function create()
{
	game.canvas.oncontextmenu = function(e){e.preventDefault();};

    game.camera.scale.set(SCALE);

	game.physics.startSystem(Phaser.Physics.ARCADE);
	
	map = game.add.tilemap("WorldBG", 16, 16);
	map.addTilesetImage("Tiles");
	
	map.createLayer(0);
	objectsLayer = map.createLayer(1);
	
	map.setCollisionBetween(5, 7, true, objectsLayer);
	map.setCollisionBetween(14, 16, true, objectsLayer);
	map.setCollisionBetween(19, 25, true, objectsLayer);
	map.setCollisionBetween(28, 29, true, objectsLayer);
	map.setCollisionBetween(32, 35, true, objectsLayer);
	
	objectsLayer.resizeWorld();
	
	tyler = game.add.sprite(BG_WIDTH / 2, BG_HEIGHT / 2, "Tyler");
	tyler.anchor.set(TYLER_CENTER_X, TYLER_CENTER_Y);
	tyler.animations.add("WalkD", Phaser.Animation.generateFrameNames("mainchar_dwalk", 0, 7, "", 2), 10, false);
    game.physics.enable(tyler);
    tyler.body.setSize(16, 8, 0, 0);
    tyler.body.collideWorldBounds = true;
	
    game.camera.follow(tyler, Phaser.Camera.FOLLOW_TOPDOWN_TIGHT);
}




function update()
{	
	game.physics.arcade.collide(tyler, objectsLayer);
	var moveAmount = {x:0, y:0};
	
	
	if(justPressed(Phaser.Keyboard.P))
	{
		toggleDebug(!debugOn);
	}
	
	
	
	
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
		tyler.animations.play("WalkD");
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
	
		tyler.body.velocity.x = moveAmount.x * tylerSpeed * 60;
		tyler.body.velocity.y = moveAmount.y * tylerSpeed * 60;
		
	}
	else
	{
		tyler.body.velocity.x = 0;
		tyler.body.velocity.y = 0;
	}
}


function render()
{
	
	if(debugOn)
	{
		game.debug.bodyInfo(tyler, 8,8);
	}
	else
	{
		game.debug.reset();
	}
}
