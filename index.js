const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const { download } = require('electron-dl');
const path = require('path');
const url = require('url');
const fs = require('fs');

const ipcMain = electron.ipcMain;

let mainWindow;

function createWindow() {
	mainWindow = new BrowserWindow({ width: 550, height: 360, resizable: false, icon: path.join(__dirname, '/app/icons/64x64.png')});
    //mainWindow.loadURL('http://localhost:3007');
    mainWindow.loadURL('file://' + __dirname + '/app/index.html');

    // Open the DevTools.
    //mainWindow.webContents.openDevTools();
    mainWindow.on('close', function(event) {
        //mainWindow.webContents.session.clearStorageData()
    });
    mainWindow.on('closed', function() {
        mainWindow = null;
    })
}

app.on('ready', createWindow)

app.on('window-all-closed', function() {
    if (process.platform !== 'darwin') {
        app.quit();
    }
})

app.on('activate', function() {
    if (mainWindow === null) {
        createWindow();
    }
})


