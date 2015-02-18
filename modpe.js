// modpe.js
//

/**
 * ModPE namespace.
 * Contains misc. functions that aren't in any
 * other namespace.
 * Do not construct. Access functions in a static manner,
 * e.g <code>ModPE.&lt;function&gt;(&lt;params&gt;);</code>
 * 
 * @namespace ModPE
 */
var ModPE = {

	/**
	 * Return the current version of Minecraft the user is using.
	 * The version numbering of Minecraft is based on 3 numbers separated by a dot, for example "0.10.5".
	 *
	 * @return {string} The version of Minecraft the user is using in the form: int.int.int
	 */
	getMinecraftVersion: function() {},

	/**
	 * Modifies the currently loaded language file.
	 * Can be used to modify item names, user interface
	 * text, etc.
	 * All the Minecraft key names can be found in the "en_US.lang" file stored in the assets of the app inside tha "lang" folder.
	 * 
	 * @param  {string} key Name of the key in the language file.
	 * @param  {string} value What to replace it with.
	 */
	langEdit: function(key, value) {},

	/**
	 * Leaves the current level, if we are loaded
	 * into a level.
	 */
	leaveGame: function() {},

	/**
	 * Prints to the Android log.
	 * 
	 * @param  {string} string The text to print.
	 */
	log: function(string) {},

	/**
	 * Overrides a loaded texture with one from an
	 * external source via URL.
	 * 
	 * @param  {string} url URL to resource.
	 * @param  {string} textureName Filename of asset to modify.
	 */
	overrideTexture: function(url, textureName) {},

	/**
	 * Reads data saved by <code>ModPE.saveData</code>, from the
	 * same script. (Each script has their own
	 * configuration files.)
	 * 
	 * @param  {string} key The name of the key.
	 */
	readData: function(key) {},

	/**
	 * Removes data saved by <code>ModPE.saveData</code>, from the
	 * same script. (Each script has their own
	 * configuration files.)
	 * 
	 * @param  {string} key The name of the key.
	 */
	removeData: function(key) {},

	/** 
	 * Resets the Field Of View of the player to the default value
	 */
	resetFov: function() {},

	/** 
	 * Resets any modified resources to the default ones
	 * found in the currently applied texture pack.
	 */
	resetImages: function() {},

	/**
	 * Saves data to this script's configuration file.
	 * Data can be loaded via <code>ModPE.readData(key)</code> and
	 * removed by <code>ModPE.removeData(key)</code>.
	 * 
	 * @param  {string} key The name of the key.
	 * @param  {string} value Value to store.
	 */
	saveData: function(key, value) {},

	/**
	 * Loads a level with the specified directory,
	 * name, seed, and gamemode.
	 * 
	 * @param  {string} dir The directory of the world.
	 * @param  {string} name The name of the world.
	 * @param  {int} seed The seed to use.
	 * @param  {int} gamemode The gamemode.
	 */
	selectLevel: function(dir, name, seed, gamemode) {},

	/**
	 * Sets the point of view to another entity.
	 * 
	 * @param {int} entity Entity to set point of view to.
	 */
	setCamera: function(entity) {},

	/**
	 * Creates a new edible item.
	 * 
	 * @param {int} id ID for the new item to be created.
	 * @param {string} iconName Icon name for the new item.
	 * @param {int} halfHearts The amount of half-hearts to heal.
	 * @param {int} iconSubIndex Icon sub-index to use.
	 * @param {string} name Name for the new item.
	 * @param {int} maxStack Maximum allowed quantity of this item in one stack.
	 */
	setFoodItem: function(id, iconName, halfHearts, iconSubIndex, name, maxStack) {},

	/**
	 * Sets the Field Of View of the player.
	 * 
	 * @param {int} fov Field Of View to set to the player
	 */
	setFov: function(fov) {},

	/** 
	 * Changes the TPS (Ticks Per Second) in the game.
	 * The default is 20, changing it higher will
	 * accelerate the game, vice versa for setting it lower.
	 *
	 * @param {int} tps New TPS.
	 */
	setGameSpeed: function(tps) {},

	/**
	 * Creates a new item.
	 * 
	 * @param {int} id ID for the new item to be created.
	 * @param {string} iconName Icon name for the new item.
	 * @param {int} iconSubIndex Icon sub-index to use.
	 * @param {string} name Name for the new item.
	 * @param {int} maxStack Maximum allowed quantity of this item in one stack.
	 */
	setItem: function(id, iconName, iconSubIndex, name, maxStack) {},

	/**
	 * Sets the new items spritesheet.
	 * 
	 * @param {string} url URL to new spritesheet.
	 */
	setItems: function(url) {},

	/**
	 * Sets the terrain spritesheet.
	 * 
	 * @param {string} url URL to new spritesheet.
	 */
	setTerrain: function(url) {},

	/**
	 * Shows a new tip message.
	 * It will fade unless you invoke it again.
	 * It is what the game uses to show item name tooltips.
	 * 
	 * @param  {string} message Message to display.
	 */
	showTipMessage: function(message) {},

	/**
	 * Takes a screenshot and saves it to <code>file</code>.
	 * Say cheese!
	 * 
	 * @param  {string} file The filename of the new screenshot.
	 */
	takeScreenshot: function(file) {}
};

/**
 * Level namespace.
 * Contains level-related functions.
 * Do not construct. Access functions in a static manner,
 * e.g <code>Level.&lt;function&gt;(&lt;params&gt;);</code>
 * 
 * @namespace Level
 */
var Level = {

	/**
	 * Add a particle in the world in the desired position.
	 * Based on ParticleType.java from BlockLauncher, the available particle types are: blockcrack 1; crit 2; smoke 3; cloud 4; flame 5; lava 6; redstone 8; itemcrack 9; snowballpoof 10; mobFlame 13; heart 14;
	 * Particle types can also be accessed by writing <code>ParticleType.nameOfTheParticle</code>, for example "ParticleType.redstone".
	 * 
	 * @param  {int} particleType The particle type to add
	 * @param  {int} x X coordinate
	 * @param  {int} y Y coordinate
	 * @param  {int} z Z coordinate
	 * @param  {float} velX The speed of the particle on the X axis
	 * @param  {float} velY The speed of the particle on the Y axis
	 * @param  {float} velZ The speed of the particle on the Z axis
	 * @param  {int} size The size of the particle (not all particles support size)
	 */
	addParticle: function(particleType, x, y, z, velX, velY, velZ, size) {},

	/**
	 * Destroys a block in the world, includes sound
	 * and particles.
	 * 
	 * @param  {int} x X coordinate
	 * @param  {int} y Y coordinate
	 * @param  {int} z Z coordinate
	 * @param  {boolean} drop Should drop block?
	 */
	destroyBlock: function(x, y, z, drop) {},

	/**
	 * Drops an item.
	 * 
	 * @param  {int} x X coordinate.
	 * @param  {int} y Y coordinate.
	 * @param  {int} z Z coordinate.
	 * @param  {float} range How far away the item can spawn.
	 * @param  {int} id Item/Block ID.
	 * @param  {int} count Count of item/block.
	 * @param  {int} damage Damage of item/block
	 * @return {int} The item that dropped in entity form.
	 */
	dropItem: function(x, y, z, range, id, count, damage) {},

	/**
	 * KABOOM! Causes an explosion in the world.
	 * 
	 * @param  {int} x X coordinate.
	 * @param  {int} y Y coordinate.
	 * @param  {int} z Z cpordinate.
	 * @param  {float} radius How big the explosion will be.
	 */
	explode: function(x, y, z, radius) {},

	/**
	 * Returns IP address of level?
	 *
	 * @return {string} IP address?
	 */
	getAddress: function() {},

	/**
	 * Returns the light level of a certain position
	 * in the world.
	 * 
	 * @param  {int} x X coordinate
	 * @param  {int} y Y coordinate
	 * @param  {int} z Z coordinate
	 * @return {int} Light level
	 */
	getBrightness: function(x, y, z) {},

	/**
	 * Returns the ID of an item in a chest by slot.
	 * 
	 * @param  {int} x X coordinate
	 * @param  {int} y Y coordinate
	 * @param  {int} z Z coordinate
	 * @param  {int} slot The slot index.
	 * @return {int} The ID of the item in the slot.
	 */
	getChestSlot: function(x, y, z, slot) {},

	/**
	 * Returns the number of items in a chest by slot.
	 * 
	 * @param  {int} x X coordinate
	 * @param  {int} y Y coordinate
	 * @param  {int} z Z coordinate
	 * @param  {int} slot The slot index.
	 * @return {int} The numbers of items in the slot.
	 */
	getChestSlotCount: function(x, y, z, slot) {},

	/**
	 * Returns the damage of an item in a chest by slot.
	 * 
	 * @param  {int} x X coordinate
	 * @param  {int} y Y coordinate
	 * @param  {int} z Z coordinate
	 * @param  {int} slot The slot index.
	 * @return {int} The damage of the item in the slot.
	 */
	getChestSlotData: function(x, y, z, slot) {},

	/**
	 * Returns the current game mode of the world the user is playing in.
	 * Game Mode 0 is Survival, Game Mode 1 is Creative.
	 * 
	 * @return {int} The current game mode of the world the user is playing in
	 */
	getGameMode: function() {},

	/**
	 * Returns the text of the selected line of the sign at a certain position in the world.
	 * 
	 * @param  {int} x X coordinate
	 * @param  {int} y Y coordinate
	 * @param  {int} z Z coordinate
	 * @param  {int} line The line to read (must be in the range of 0 to 3)
	 * @return {string} The line of text of the sign
	 */
	getSignText: function(x, y, z, line) {},

	/**
	 * Returns the ID of a block at a certain position
	 * 
	 * @param  {int} x X coordinate
	 * @param  {int} y Y coordinate
	 * @param  {int} z Z coordinate
	 * @return {int} The ID of the block.
	 */
	getTile: function(x, y, z) {}
};
