### Summary
A simple boilerplate of the Flux architecture supporting asynchronous dispatches.

### Build
See [package.json](https://github.com/maximus8891/boilerplate-flux/blob/master/package.json)
Builds the script and inits a watcher.
```
npm run build
```

### Run
```
npm run live
```

### Flow
```
                                   +---------+
                                   |         |
                                   |   data  |
                                   |         |
                                   +----+----+
                                        |
                                        |
                                        |
   +---------+                     +----v----+
   |         |                     |         |
   |   main  |                     |  Action |
   |         |                     |         |
   +----+----+                     +----+----+
        |                               |
        |                               |
        |                               |
   +----v----+     +---------+     +----v----+
   |         |     |         |     |         |
   |   App   <-----+  Store  <-----+   Disp  |
   |         |     |         |     |         |
   +----+----+     +---------+     +----^----+
        |                               |
        |                               |
        |                               |
   +----v----+                     +----+----+
   |         |                     |         |
   |  Table  +--------------------->  Action |
   |         |                     |         |
   +---------+                     +---------+

```