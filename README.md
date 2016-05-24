
# spawn-npm

 [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![AMA](https://img.shields.io/badge/ask%20me-anything-1abc9c.svg)](https://github.com/IonicaBizau/ama) [![Version](https://img.shields.io/npm/v/spawn-npm.svg)](https://www.npmjs.com/package/spawn-npm) [![Downloads](https://img.shields.io/npm/dt/spawn-npm.svg)](https://www.npmjs.com/package/spawn-npm) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> Run npm commands by creating child processes.

## :cloud: Installation

```sh
$ npm i --save spawn-npm
```


## :clipboard: Example



```js
const spawnNpm = require("spawn-npm");

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
```

## :memo: Documentation


### `spawnNpm(command, options, spawnOptions, cb)`
Creates a spawn process running `npm <command>`.

#### Params
- **String** `command`: The npm command (e.g. `"install"`).
- **Object** `options`: An object parsed by [`oargv`](https://github.com/IonicaBizau/node-oargv).
- **Object|String** `spawnOptions`: The spawn options object. The working directory where to run the command.
- **Function** `cb`: The callback function.

#### Return
- **Process** The child process.



## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## :dizzy: Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:


 - [`babel-it`](https://github.com/IonicaBizau/babel-it#readme)—A cli tool to babelify your code before npm publish.
 - [`git-module-installer`](https://github.com/IonicaBizau/git-module-installer#readme)—Clone git repositories and install their npm dependencies.
 - [`ship-release`](https://github.com/IonicaBizau/ship-release#readme)—Publish new versions on GitHub and npm with ease.

## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2016#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
