module.exports = [
    {
        label: 'Electron',
        submenu: [
            {label: 'Item 1'},
            {label: 'Item 2', submenu: [{ label: 'sub item 1'}]},
            {label: 'Item 3'},
        ]
    },
    {
        label: 'Edit',
        submenu: [
            {role: 'undo'},
            {role: 'redo'},
            {role: 'copy'},
            {role: 'paste'}
        ]
    },
    {
        label: 'Actions',
        submenu: [
            {
                label: 'Devtools',
                role: 'toggleDevTools'
            },
            {
                role: 'toggleFullScreen'
            },
            {
                label: 'Action 2',
                enabled: false
            },
            {
                label: 'Action 3',
                click: () => {console.log('Hello from Main Menu')},
                accelerator: 'Shift+Alt+G'
            },
        ]
    }
]