const transBlue = KUTE.fromTo(
    '#translate11',
    { path: '#translate11'},
    { path: '#translate12'},
    { repeat: 999, duration: 6000, yoyo: true}
)

const transBlue2 = KUTE.fromTo(
    '#translate21',
    { path: '#translate21'},
    { path: '#translate22'},
    { repeat: 999, duration: 5000, yoyo: true}
)

const transBlue3 = KUTE.fromTo(
    '#translate31',
    { path: '#translate31'},
    { path: '#translate32'},
    { repeat: 999, duration: 4000, yoyo: true}
)

const transBlue4 = KUTE.fromTo(
    '#translate41',
    { path: '#translate41'},
    { path: '#translate42'},
    { repeat: 999, duration: 3000, yoyo: true}
)

transBlue.start()
transBlue2.start()
transBlue3.start()
transBlue4.start()