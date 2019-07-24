let onoff = require("onoff");

let Gpio = onoff.Gpio;
let led = new Gpio(17, "out"),
    sensor = new Gpio(4, "in", "both"),
    interval;

// sensor switch on/off
sensor.watch(function (err, value) {
    if (err) exit(err);
    console.log(value ? 'Switch on' : 'Switch off');
});

// LED signal = 1
led.write(1, function(){});

// process interrupt
process.on('SIGINT', function () {
    clearInterval(interval);
    sensor.unexport();
    led.writeSync(0);
    led.unexport();
    console.log('Exit');
    process.exit();
});
