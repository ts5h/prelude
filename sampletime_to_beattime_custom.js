// small helper to convert unstretched time into stretched time

inlets = 4;
outlets = 1;

var buffer_length = 0;

var loop_min = 0;
var loop_max = 0;

var current_length = 0;
var current_pos = 0;


function msg_float(f) {

	// loop_min
	if (inlet === 1) {
		loop_min = f;
	}

	// loop_max
	if (inlet === 2) {
		loop_max = f;
	}

	// buffer_length
	if (inlet === 3) {
		buffer_length = f;
	}


	// position
	if (inlet === 0) {
		current_length = loop_max - loop_min;

		if (current_length > 0) {
			current_pos = current_length * f;
			current_pos += loop_min;

			outlet(0, current_pos / buffer_length);

		} else {
			outlet(0, 0);
		}
	}
}
