# Webpack demo

## necessary tools

if you do not have node and npm installed you could use this docker image

*prerequisite:* install docker

run the following command:
```
docker build \
  --build-arg USER_ID=$(id -u) \
  --build-arg GROUP_ID=$(id -g) \
  -t webpack_demo .
```

launch the container:
```
docker run -d --rm -v "$(pwd)":/code -p 8080:8080 -p 8888:8888 --name=webpack_demo webpack_demo sh -c 'sleep 99d'
```

connect inside the container
```
docker exec -it --user=node webpack_demo sh
```

## Webpack

### what is webpack ?

Webpack is a module bundler. It takes disparate dependencies, creates modules for them and bundles the entire network up into manageable output files. This is especially useful for Single Page Applications (SPAs), which is the defacto standard for Web Applications today.

Webpack will create from your source code a dependency graph.
Then webpack can convert these dependencies into modules. 
Also Webpack is able to manage these dependencies for us (download them when needed)

### how webpack works ?

Webpack will parse your js files and make a dependency graph. For formats that are not javascript, webpack via plugins provides loaders used to convert a givent format (eg: scss, css, vue, ...) to javascript format

## Tutorial

### Part 1: Webpack base configuration

```sh
# jump to the directory 1_base
cd 1_base
# install node modules
npm ci
# run the project in dev mode
npm run dev
```
you can [open the project in browser](http://localhost:8080)

```sh
# build the project
npm run build
```

Video:
* show webpack configuration
* show that app is working
* show that Hot reloading and watch are working
* show that debug with sourcemap is working
* show vue plugin is working

Points of attention:
- .babelrc modules property set to false in order to user es6 import/export, it will be useful for [Tree shaking](https://webpack.js.org/guides/tree-shaking/) to work
- 
### Part 2: bigger app and Webpack prod config

Aim 1: add highcharts lib on App1 and powerbi lib on App2 and see performance issues
Aim 2: cut the web config in two config files (prod & development)

configure prod environment :
- remove web-dev-server
- remove HotModuleReplacementPlugin
- remove source mapping
- set mode production ([webpack mode documentation](https://webpack.js.org/configuration/mode/))
  - add some performance hints
  - add some optimizations
  - add cache
  - fails on error
  - minimize script (webpack 5 uses TerserPlugin by default) 

Video:
* show differences between 2 folders
* show size of the bundle
* show difference between prod and dev mode
* first bundle analysis

### Part 3: Minification & Lazy loading

Aim: limit the size of the bundle

Video:
* discover that TerserPlugin is already applied in production mode
* show differences between 2 folders
* show size of the bundle
* show bundle analysis difference

### Part 4: add Jest
TODO

### Part 5: add Loading component

Aim: add a component that will show the user that application is loading

TODO integrate https://vuejs.org/v2/guide/components-dynamic-async.html#Handling-Loading-State

### Part 6: change browser support
Aim: change browser support and see impact on bundle size

Video:
* move browser list to package.json
* explain last 2 major versions including actually ie10 (can be checked with debug in .babelrc)
* browser list is taken into account by webpack, without that arrow functions would not have been converted by babel
* show bundle analysis difference

## cleaning
execute the following commands:
```
docker kill webpack_demo
docker image rm webpack_demo
```


## Acknowledgments

inspired by [https://www.valentinog.com/blog/webpack/](https://www.valentinog.com/blog/webpack/)

## TODO
webpack book https://survivejs.com/webpack/foreword/

images from ?
https://medium.com/ag-grid/webpack-tutorial-understanding-how-it-works-f73dfa164f01#:~:text=Webpack%20is%20a%20module%20bundler,standard%20for%20Web%20Applications%20today.

https://dev.to/sadarshannaiynar/demystifying-webpack-2f5n
