const electron = require('electron');
const url = require('url');
const path = require('path');
const ejs = require('ejs-electron');

const {app, BrowserWindow, Menu} = electron;

let mainWindow;

// Listen to the app when raedy
app.on('ready', ()=>{
    
    // create the main  window
    mainWindow = new BrowserWindow({});

    // load the ejs
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, "index.ejs"),
        protocol: 'file:',
        slashes: true       // file://dirname/index.ejs
    }));
    
    // remove the menu when finished
    // Menu.setApplicationMenu(null);
});