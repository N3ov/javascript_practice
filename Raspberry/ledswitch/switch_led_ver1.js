let onoff = require("onoff");

let Gpio = onoff.Gpio,
	led = new Gpio(4, "out"),
	interval;

let sensor = new Gpio(17, "in", "both");

sensor.watch( (err, value) => {

	if(err)  exit(err);
	console.log(value ? "change LED state to: 1" : "change LED state to: 0");
	console.log(value ? "there is someone!" : "not anymore!");
});
/*
interval = setInterval( () => {

	let value = led.readSync() ^ 1;
	led.write(value, function(){});

}, 2000);
*/

led.write(1, function(){});

process.on("SIGINT", () => {

	clearInterval(interval);
	
	sensor.unexport();
	
	led.writeSync(0);
	led.unexport();
	
	console.log("Bye, bye!");
	
	process.exit();
});
