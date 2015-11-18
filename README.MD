### Preinstall

```
npm install browserify -g
npm install watchify -g
```

### Build

See [package.json](https://github.com/maximus8891/boilerplate-flux/blob/master/package.json)
```
npm run build
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