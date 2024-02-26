var config = {
    type: Phaser.AUTO,
    width: 2880,
    height: 2560,

    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);


function preload () {
    this.load.image("tiles","/assets/TileSet1.png");
    this.load.tilemapTiledJSON("city","/scripts/Map1.json");
}

function create () {
    map = this.make.tilemap({ key: "city"})
    tileset = map.addTilesetImage("TileSet1", "tiles")

    map.createLayer('Base', tileset)
    map.createLayer('RoadsCollision', tileset)
    map.createLayer('Roads', tileset)
    map.createLayer('RoadBlocks', tileset)
    map.createLayer('Nature', tileset)
    map.createLayer('House', tileset)
    map.createLayer('RoadDecs', tileset)
}

function update () {
}