### Summary
A simple boilerplate of the Flux architecture supporting asynchronous dispatches.

### Build
Build the script and init a watcher.
```
npm run build
```
See [package.json](https://github.com/maximus8891/boilerplate-flux/blob/master/package.json)

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