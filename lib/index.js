"use strict";

const spawn = require("spawno")
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
 * @param {Function} cb The callback function.
 * @returns {Process} The child process.
 */
module.exports = function spawnNpm (command, options, spawnOptions, cb) {

    if (typeof options === "function") {
        cb = options;
        options = {};
        spawnOptions = {};
    }

    if (typeof spawnOptions === "function") {
        cb = spawnOptions;
        spawnOptions = {};
    }

    if (typeof options === "string") {
        spawnOptions = options;
        options = {};
    }

    if (typeof spawnOptions === "string") {
        spawnOptions = {
            cwd: spawnOptions
        };
    }

    spawnOptions = spawnOptions || {};
    options = options || {};

    let args = oargv(options, command);
    return spawn("npm", args, spawnOptions, cb);
};
