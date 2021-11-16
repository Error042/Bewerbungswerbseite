const transRed = KUTE.fromTo(
    '#translate13',
    { path: '#translate13'},
    { path: '#translate14'},
    { repeat: 999, duration: 8000, yoyo: true}
)

const transRed2 = KUTE.fromTo(
    '#translate23',
    { path: '#translate23'},
    { path: '#translate24'},
    { repeat: 999, duration: 7000, yoyo: true}
)

const transRed3 = KUTE.fromTo(
    '#translate33',
    { path: '#translate33'},
    { path: '#translate34'},
    { repeat: 999, duration: 6000, yoyo: true}
)

const transRed4 = KUTE.fromTo(
    '#translate43',
    { path: '#translate43'},
    { path: '#translate44'},
    { repeat: 999, duration: 5000, yoyo: true}
)

const transRed5 = KUTE.fromTo(
    '#translate53',
    { path: '#translate53'},
    { path: '#translate54'},
    { repeat: 999, duration: 4000, yoyo: true}
)

transRed.start()
transRed2.start()
transRed3.start()
transRed4.start()
transRed5.start()