var SCREEN_WIDTH = 1024;
var SCREEN_HEIGHT = 768;

var TYLER_WIDTH = 32;
var TYLER_HEIGHT = 32;

var BG_WIDTH = 512;
var BG_HEIGHT = 512;

var game = new Phaser.Game(SCREEN_WIDTH, SCREEN_HEIGHT, Phaser.AUTO, "bearded-dubstep", {
	
	preload:preload, create:create, update:update
});

var bg;
var tyler;
var tylerSpeed = 4;

function preload()
{
	game.load.image("Tyler", "Images/Tyler.png");
	game.load.image("BG", "Images/BG.png");
}

function create()
{
	bg = game.add.sprite((SCREEN_WIDTH - BG_WIDTH) / 2, (SCREEN_HEIGHT - BG_HEIGHT) / 2, "BG");
	tyler = game.add.sprite((SCREEN_WIDTH - TYLER_WIDTH) / 2, (SCREEN_HEIGHT - TYLER_HEIGHT) / 2, "Tyler");
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
	
		bg.x = bg.x + moveAmount.x * tylerSpeed;
		bg.y = bg.y + moveAmount.y * tylerSpeed;
	}
	
// Collision
	if (bg.x < tyler.x + TYLER_WIDTH - BG_WIDTH)
	{
		bg.x = tyler.x + TYLER_WIDTH - BG_WIDTH;
	}
}

