// Modules
const {app, BrowserWindow, session, dialog, globalShortcut} = require('electron')
const windowStateKeeper = require('electron-window-state')

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow
// secondaryWindow

// Create a new BrowserWindow when `app` is ready
function createWindow () {
    let winState = windowStateKeeper({
        defaultWidth: 1000, defaultHeight: 800
    })

    /*let defaultSes = session.defaultSession
    let getCookies = () => {
      defaultSes.cookies.get({}, (err, cookies) => {
        console.log(cookies)
      })
    }*/

    mainWindow = new BrowserWindow({
        width: winState.width, height: winState.height,
        x: winState.x, y: winState.y,
        webPreferences: { nodeIntegration: true },
        titleBarStyle: "hidden",
        show: false
    })

    /*secondaryWindow = new BrowserWindow({
      width: 600, height: 300,
      webPreferences: {
        nodeIntegration: true,
        partition: 'persist:part1'
      },
      parent: mainWindow
    })*/

    let ses = mainWindow.webContents.session
    // let ses2 = secondaryWindow.webContents.session

    // console.log(Object.is(ses, ses2))
    // getCookies();

    // Load index.html into the new BrowserWindow
    mainWindow.loadFile('index.html')
    // secondaryWindow.loadFile('secondary.html')
    winState.manage(mainWindow)

    // Open DevTools - Remove for PRODUCTION!
    mainWindow.webContents.openDevTools();
    // secondaryWindow.webContents.openDevTools();

    globalShortcut.register('G', () => {
        console.log('User pressed G')
    })

    mainWindow.webContents.on('did-finish-load', () => {
        /*dialog.showOpenDialog(mainWindow, {
          buttonLabel: 'Select a photo',
          defaultPath: app.getPath('home'),
          properties: ['multiSelections']
        }).then(r => console.log(r))*/

        // const answers = ['Yes', 'No', 'Maybe']

        /*dialog.showMessageBox({
          title: 'Message Box',
          message: 'Please select an option',
          detail: 'Message details',
          buttons: answers
        }).then(r => {
          console.log(`User selected: ${answers[r.response]}`)
        })*/
    })

    mainWindow.once('ready-to-show', mainWindow.show)
    // let wc = mainWindow.webContents

    // Listen for window being closed
    mainWindow.on('closed',  () => {
        mainWindow = null
    })

    /*secondaryWindow.on('closed',  () => {
      mainWindow = null
    })*/
}

// Electron `app` is ready
app.on('ready', () => {
    /*console.log(app.getPath("desktop"))
    console.log(app.getPath("music"))
    console.log(app.getPath("temp"))
    console.log(app.getPath("userData"))*/
    createWindow()
})



// Quit when all windows are closed - (Not macOS - Darwin)
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})

// When app icon is clicked and app is running, (macOS) recreate the BrowserWindow
app.on('activate', () => {
    if (mainWindow === null) createWindow()
})
