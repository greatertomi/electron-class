// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

const {ipcRenderer} = require('electron');

document.getElementById('talk').addEventListener('click', e => {
  ipcRenderer.send('channel1', 'Hello from main window');
});

ipcRenderer.on('channel1-response', (e, args) => {
  console.log(args)
});

ipcRenderer.on('mailbox', (e, args) => {
  console.log(args)
});

// <button type="button" id="talk">Talk to main process</button>
