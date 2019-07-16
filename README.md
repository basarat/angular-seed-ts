# Angular Seed TypeScript

[![Greenkeeper badge](https://badges.greenkeeper.io/basarat/angular-seed-ts.svg)](https://greenkeeper.io/)

This is based on https://github.com/angular/angular-seed.

## Running
The following are specific to TypeScript

Setup TypeScript:
```bash
npm install typescript -g
npm install tsd -g
```
Start the TypeScript compiler in watch mode in and **leave it running**: 

```bash
tsc --watch 
```

That's it. You have typescript setup and ready to go. You can follow the steps of JavaScript ([README-JS](./README-JS.md)) from this point on in a new window starting at the install dependencies section.

**TIP**: *Abbriged the remaining JS steps for a quick start:*
```bash
npm install 
npm start
```
and visit : http://localhost:8000/app/

## Upgrading
The following is the list of modifications made to change the JS project to a TS Project: 
* Moved original README.md to README-JS.md and added this README.md
* Installed TypeScript typings for angular and related libs `tsd install angular jquery jasmine karma-jasmine angular-mocks angular-protractor selenium-webdriver --save`
* Added a `tsconfig.json` with contents:
```json
{
        "files": [
            list of files
        ]
}
```
NOTE: Files are needed at the moment but you can replace this with `"exclude": "node_modules"` hopefully in the next release of TypeScript.
* Renamed the `.js` files to `.ts`. 
* As a sample : Converted controller `View1` and `View2` *functions* to *classes* and added a type annotation to use these from tests in a type checked way.
* run `tsc --watch`

You will notice that stuff like `angular`, `mocks` etc will light up with intellisence and you will get errors if you try to misuse these.