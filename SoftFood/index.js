'use strict'

const { app, BrowserWindow } = require ('electron');

app.on ('ready', () => {
    const win = new BrowserWindow ({
        icon:'img/logo2.png',
        webPreferences: {
            
            nodeIntegration: true,
            contextIsolation: false,
        }
    });
    win.loadFile('login.html');
    win.show();
    win.on ('closed', () => {
        app.quit();
    });
});
