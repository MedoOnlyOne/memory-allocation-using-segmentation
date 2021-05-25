const electron = require('electron');
const url = require('url');
const path = require('path');
var electronEjs = require('electron-ejs');

const {app, BrowserWindow, Menu} = electron;

var ejs = new electronEjs();

let mainWindow;

// Listen to the app when raedy
app.on('ready', ()=>{
    // create the main  window
    mainWindow = new BrowserWindow({});

    // load the ejs
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, "views/index.ejs"),
        protocol: 'file:',
        slashes: true       // file://dirname/index.ejs
    }));
    
    // remove the menu when finished
    // Menu.setApplicationMenu(null);

    // quit the program when the main window is closed
    mainWindow.on('closed', ()=>{
        app.quit();
    });
});

