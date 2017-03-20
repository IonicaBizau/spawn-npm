
# spawn-npm

 [![Support me on Patreon][badge_patreon]][patreon] [![Buy me a book][badge_amazon]][amazon] [![PayPal][badge_paypal_donate]][paypal-donations] [![Version](https://img.shields.io/npm/v/spawn-npm.svg)](https://www.npmjs.com/package/spawn-npm) [![Downloads](https://img.shields.io/npm/dt/spawn-npm.svg)](https://www.npmjs.com/package/spawn-npm)

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


## :sparkling_heart: Support my projects

I open-source almost everything I can, and I try to reply everyone needing help using these projects. Obviously,
this takes time. You can integrate and use these projects in your applications *for free*! You can even change the source code and redistribute (even resell it).

However, if you get some profit from this or just want to encourage me to continue creating stuff, there are few ways you can do it:

 - Starring and sharing the projects you like :rocket:
 - [![PayPal][badge_paypal]][paypal-donations]—You can make one-time donations via PayPal. I'll probably buy a ~~coffee~~ tea. :tea:
 - [![Support me on Patreon][badge_patreon]][patreon]—Set up a recurring monthly donation and you will get interesting news about what I'm doing (things that I don't share with everyone).
 - **Bitcoin**—You can send me bitcoins at this address (or scanning the code below): `1P9BRsmazNQcuyTxEqveUsnf5CERdq35V6`

    ![](https://i.imgur.com/z6OQI95.png)

Thanks! :heart:


## :dizzy: Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:


 - [`babel-it`](https://github.com/IonicaBizau/babel-it#readme)—Babelify your code before `npm publish`.
 - [`bloggify-plugin-class`](https://github.com/IonicaBizau/bloggify-plugin-class#readme)—A library for managing plugin objects.
 - [`git-module-installer`](https://github.com/IonicaBizau/git-module-installer#readme)—Clone git repositories and install their npm dependencies.
 - [`ship-release`](https://github.com/IonicaBizau/ship-release#readme)—Publish new versions on GitHub and npm with ease.
 - [`tester-init`](https://github.com/IonicaBizau/tester-init#readme)—Init tests for tester.
 - [`tilda-init`](https://github.com/IonicaBizau/tilda-init#readme)—Init cli applications.

## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[badge_patreon]: http://ionicabizau.github.io/badges/patreon.svg
[badge_amazon]: http://ionicabizau.github.io/badges/amazon.svg
[badge_paypal]: http://ionicabizau.github.io/badges/paypal.svg
[badge_paypal_donate]: http://ionicabizau.github.io/badges/paypal_donate.svg
[patreon]: https://www.patreon.com/ionicabizau
[amazon]: http://amzn.eu/hRo9sIZ
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(https%3A%2F%2Fionicabizau.net)&year=2016#license-mit
[website]: https://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
