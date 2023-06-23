// const { app, BrowserWindow } = require('electron');

// function createWindow() {
//   const mainWindow = new BrowserWindow({
//     width: 800,
//     height: 600,
//   });

//   mainWindow.loadURL('http://localhost:5173'); // Assuming your React app is running on localhost:3000

//   mainWindow.on('closed', () => {
//     app.quit();
//   });
// }

// app.on('ready', createWindow);


const { app, BrowserWindow } = require('electron')

function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    }
  })

  win.loadURL('http://localhost:5173/')
}

app.whenReady().then(createWindow)