"use strict";

const spawnNpm = require("../lib");

// Install globally the git-stats
let proc = spawnNpm("install", {
    g: true
  , _: ["git-stats@latest"]
});

// Pipe the output in the console
proc.stdout.pipe(process.stdout);
proc.stderr.pipe(process.stderr);

// After close, do something
proc.on("close", () => {
    console.log("Done.");

    // Add the latest oargv version as dependency to this package
    spawnNpm("install", {
        save: true
      , _: ["oargv@latest"]
    }, {
        cwd: `${__dirname}/..`
    });
});
