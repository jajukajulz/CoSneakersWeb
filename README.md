# CoSneakersWeb
JavaScript powered Web Front End (running of node js and express server) with a JSON DB store. When the Web Application is loaded, the sneaker data in the JSON file is imported and displayed in a Sneaker List (which is a Material Design Bootstrap Datatable) that is sortable and searchable. In addition, there is a form that allows for dynamically adding new sneaker data to the Sneaker List - either in memory (lost on refresh) or persisted to the JSON store. On successful addition of a new sneaker, a success notification pops up. Similarly, on failure to add a new sneaker, a failure notification appears.  

## Built using
- HTML5
- Bootstrap v4.3.1 (https://getbootstrap.com/)
- Material Design for Bootstrap Free v4.8.8 (https://mdbootstrap.com/)
- Font Awesome Free 5.8.2 by @fontawesome (https://fontawesome.com)
- jQuery v3.4.1 ((c) JS Foundation and other contributors)
- toastr v2.1.3 (https://codeseven.github.io/toastr/)
- Node JS v10.16.0 (https://nodejs.org/en/)
- Express JS 4.17.1 (https://expressjs.com/)

## Installation (Development Environment)
In order to run CoSneakersWeb:

1. Clone the repository and CD into it. 
```
$git clone https://github.com/jajukajulz/CoSneakersWeb && cd CoSneakersWeb
```

2. Install node dependencies.
```
$npm install
```

3. Start the web server (Express) and navigate to http://localhost:3000/ in your browser.
```
$npm run dev
```


## Notes on Libraries
- Using `browserify` and `watchify` to improve client-side-javascript workflow

- `browserify` - a tool for bundling javascript modules written in `node.js` style for the browser. `browserify` not only concatenates your javascript libraries to a single bundle but can also transform your coffesscript, typescript, jsx etc files to javascript and then also add them to the bundle.

- `watchify` - using watchify, you can watch your `app.js` for changes (the changes may also be in the files included from `app.js`) and automatically generate the resulting `bundle.js`.

- `uglify-js` - for production we’d like our `bundle.js` to be minified — or uglyfied as it’s being said in the javascript world.

- `nodemon` - a utility that will monitor for any changes in source code and automatically restart your development server. 

- For creating our production bundle, we’ll use browserify and uglify i.e. run the build script `"build": "browserify src/js/app.js | uglifyjs -mc warnings=false > src/js/bundle.js"` before deploying to production:
```
$npm run build 
```
