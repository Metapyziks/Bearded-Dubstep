var game = new Phaser.Game(512, 512, Phaser.AUTO, "bearded-dubstep", {
	
	preload:preload, create:create, update:update
});

var tyler;
var tylerSpeed = 4;

function preload()
{
	game.load.image("BG", "Images/Tyler.png");
	game.load.image("Tyler", "Images/BG.png");
}

function create()
{
	tyler = game.add.sprite(0, 0, "Tyler");
	game.add.sprite(240, 240, "BG");
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
	
	if (tyler.x > 512 - 32) 
	{
		tyler.x = 512 - 32;
	}
}

