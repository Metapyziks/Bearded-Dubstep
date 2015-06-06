var SCREEN_WIDTH = 512;
var SCREEN_HEIGHT = 384;

var TYLER_WIDTH = 14;
var TYLER_HEIGHT = 6;
var TYLER_CENTER_X = 0.5;
var TYLER_CENTER_Y = 25/32;

var BG_WIDTH = 6400;
var BG_HEIGHT = 6400;

var game = new Phaser.Game(SCREEN_WIDTH, SCREEN_HEIGHT, Phaser.AUTO, "bearded-dubstep", {
	
	preload:preload, create:create, update:update
});

var bg;
var tyler;
var tylerSpeed = 4;

function preload()
{
	game.load.image("Tyler", "Images/Tyler3.png");
	game.load.image("BG", "Images/BG2.png");
}


function create()
{
	game.world.setBounds(0, 0, BG_WIDTH, BG_HEIGHT);
	bg = game.add.sprite(0, 0, "BG");
	tyler = game.add.sprite(BG_WIDTH / 2, BG_HEIGHT / 2, "Tyler");
	tyler.anchor.set(TYLER_CENTER_X, TYLER_CENTER_Y);
	game.camera.follow(tyler);
}


function update()
{
	var moveAmount = {x:0, y:0};
	
	if(game.input.keyboard.isDown(Phaser.Keyboard.A))
	{
		moveAmount.x = moveAmount.x + 1;
	}
	
	if(game.input.keyboard.isDown(Phaser.Keyboard.D))
	{
		moveAmount.x = moveAmount.x - 1;
	}
	
	if(game.input.keyboard.isDown(Phaser.Keyboard.W))
	{
		moveAmount.y = moveAmount.y + 1;
	}
	
	if(game.input.keyboard.isDown(Phaser.Keyboard.S))
	{
		moveAmount.y = moveAmount.y - 1;
	}
	
	var moveSpeed = Math.sqrt(moveAmount.x * moveAmount.x + moveAmount.y * moveAmount.y);
	
	if(moveSpeed != 0)
	{
		moveAmount.x = moveAmount.x / moveSpeed;
		moveAmount.y = moveAmount.y / moveSpeed;
	
		tyler.x = tyler.x + moveAmount.x * tylerSpeed;
		tyler.y = tyler.y + moveAmount.y * tylerSpeed;
	}
	
	// Collision
/*
	// Right
	if (bg.x < tyler.x + TYLER_WIDTH * 0.5 - BG_WIDTH)
	{
		bg.x = tyler.x + TYLER_WIDTH * 0.5 - BG_WIDTH;
	}
	
	// Left
	if (bg.x > tyler.x - TYLER_WIDTH * 0.5)
	{
		bg.x = tyler.x - TYLER_WIDTH * 0.5;
	}
	
	// Up
	if (bg.y > tyler.y - TYLER_HEIGHT * 0.5)
	{
		bg.y = tyler.y - TYLER_HEIGHT * 0.5;
	}
	
	// Down
	if (bg.y < tyler.y + TYLER_HEIGHT * 0.5 - BG_HEIGHT)
	{
		bg.y = tyler.y + TYLER_HEIGHT * 0.5 - BG_HEIGHT;
	}
	
	
*/	
}

