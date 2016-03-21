"use strict";

const spawn = require("child_process").spawn
    , oargv = require("oargv")
    ;

/**
 * spawnNpm
 * Creates a spawn process running `npm <command>`.
 *
 * @name spawnNpm
 * @function
 * @param {String} command The npm command (e.g. `"install"`).
 * @param {Object} options An object parsed by
 * [`oargv`](https://github.com/IonicaBizau/node-oargv).
 * @param {Object|String} spawnOptions The spawn options object. The working
 * directory where to run the command.
 * @returns {Process} The child process.
 */
module.exports = function spawnNpm (command, options, spawnOptions) {

    if (!spawnOptions && typeof options === "string") {
        spawnOptions = options;
        options = {};
    }

    if (typeof spawnOptions === "string") {
        spawnOptions = {
            cwd: spawnOptions
        };
    }

    let args = oargv(options, command);
    return spawn("npm", args, spawnOptions);
};
