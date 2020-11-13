// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const {remote, desktopCapturer} = require('electron')

const {dialog, BrowserWindow} = remote

const button = document.getElementById('test-button')

button.addEventListener('click', e => {
    // dialog.showMessageBox({message: 'Dialog invoked from renderer process'})
    /*let secWin = new BrowserWindow({
        width: 400, height: 350
    })
    secWin.loadFile('secondary.html')*/
    console.log(remote.getGlobal('myglob'))
})

desktopCapturer.getSources({types: ['screen']})
    .then(sources => {
        console.log(sources)
    })
    .catch(err => {
        console.log(err)
    })
