const electron = require('electron');
const url = require('url');
const path = require('path');

const {app, BrowserWindow} = electron;

let mainWindow;

// Listen to the app when raedy
app.on('ready', ()=>{
    
    // create the main  window
    mainWindow = new BrowserWindow({});

    // load the html
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, "index.html"),
        protocol: 'file:',
        slashes: true       // file://dirname/index.html
    }));


});