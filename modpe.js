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
	 * Connects to and joins a new server.
	 * 
	 * @param  {string} address The IP address to connect to.
	 * @param  {int} port The port to use.
	 */
	joinServer: function(address, port) {},

	/**
	 * Modifies the currently loaded language file.
	 * Can be used to modify item names, user interface
	 * text, etc.
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
	 * Sets the point of view to another entity.
	 * 
	 * @param {int} entity Entity to set point of view to.
	 */
	setCamera: function(entity) {},

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
};