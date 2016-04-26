## Documentation

You can see below the API reference of this module.

### `spawnNpm(command, options, spawnOptions, cb)`
Creates a spawn process running `npm <command>`.

#### Params
- **String** `command`: The npm command (e.g. `"install"`).
- **Object** `options`: An object parsed by [`oargv`](https://github.com/IonicaBizau/node-oargv).
- **Object|String** `spawnOptions`: The spawn options object. The working directory where to run the command.
- **Function** `cb`: The callback function.

#### Return
- **Process** The child process.

