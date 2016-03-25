// Remote control of BeagleBone USR LED
// Server-side Node.JS code.
// Jaakko Ala-Paavola, 2013-08-14
var b = require('bonescript');
var app = require('http').createServer(httpserver);
var io = require('socket.io').listen(app);
var fs = require('fs');
 
app.listen(8070);

////////////////////////////////////////////////////////////////////////////////
var RL00 = "P8_39";
var RL01 = "P8_42";
var RL02 = "P8_41";
var RL03 = "P8_44";
var RL04 = "P8_43";
var RL05 = "P8_46";
var RL06 = "P8_45";
var RL07 = "P8_34";
var RL08 = "P8_33";
var RL09 = "P8_36";
var RL10 = "P8_35";
var RL11 = "P8_38";
var RL12 = "P8_37";
var RL13 = "P8_40";
var LED_USR0 = "P8_27";
var LED_USR1 = "P8_30";
var LED_USR2 = "P8_29";
var LED_USR3 = "P8_32";
var LED_USR4 = "P8_31";
var OUT_RUN  = "P9_28";
var OUT_ERROR = "P9_27"; 
var OUT_SOUND = "P9_21";
b.pinMode(RL00, b.OUTPUT); 
b.pinMode(RL01, b.OUTPUT); 
b.pinMode(RL02, b.OUTPUT); 
b.pinMode(RL03, b.OUTPUT); 
b.pinMode(RL04, b.OUTPUT); 
b.pinMode(RL05, b.OUTPUT); 
b.pinMode(RL06, b.OUTPUT); 
b.pinMode(RL07, b.OUTPUT); 
b.pinMode(RL08, b.OUTPUT); 
b.pinMode(RL09, b.OUTPUT); 
b.pinMode(RL10, b.OUTPUT); 
b.pinMode(RL11, b.OUTPUT); 
b.pinMode(RL12, b.OUTPUT); 
b.pinMode(RL13, b.OUTPUT); 
b.pinMode(LED_USR0, b.OUTPUT);          
b.pinMode(LED_USR1, b.OUTPUT); 
b.pinMode(LED_USR2, b.OUTPUT); 
b.pinMode(LED_USR3, b.OUTPUT); 
b.pinMode(LED_USR4, b.OUTPUT);
b.pinMode(OUT_RUN, b.OUTPUT); 
b.pinMode(OUT_ERROR, b.OUTPUT); 
b.pinMode(OUT_SOUND, b.OUTPUT);
io.sockets.on('connection', function (socket) {
    socket.on('RL00', function (data) {           
        console.log(data);
        if (data == 'on')   {  b.digitalWrite(RL00, b.HIGH);    }
        else                {  b.digitalWrite(RL00, b.LOW);     }
    });
});
io.sockets.on('connection', function (socket) {
    socket.on('RL01', function (data) {           
        console.log(data);
        if (data == 'on')   {  b.digitalWrite(RL01, b.HIGH);    }
        else                {  b.digitalWrite(RL01, b.LOW);     }
    });
});
io.sockets.on('connection', function (socket) {
    socket.on('RL02', function (data) {           
        console.log(data);
        if (data == 'on')   {  b.digitalWrite(RL02, b.HIGH);    }
        else                {  b.digitalWrite(RL02, b.LOW);     }
    });
});
io.sockets.on('connection', function (socket) {
    socket.on('RL03', function (data) {           
        console.log(data);
        if (data == 'on')   {  b.digitalWrite(RL03, b.HIGH);    }
        else                {  b.digitalWrite(RL03, b.LOW);     }
    });
});
io.sockets.on('connection', function (socket) {
    socket.on('RL04', function (data) {           
        console.log(data);
        if (data == 'on')   {  b.digitalWrite(RL04, b.HIGH);    }
        else                {  b.digitalWrite(RL04, b.LOW);     }
    });
});
io.sockets.on('connection', function (socket) {
    socket.on('RL05', function (data) {           
        console.log(data);
        if (data == 'on')   {  b.digitalWrite(RL05, b.HIGH);    }
        else                {  b.digitalWrite(RL05, b.LOW);     }
    });
});
io.sockets.on('connection', function (socket) {
    socket.on('RL06', function (data) {           
        console.log(data);
        if (data == 'on')   {  b.digitalWrite(RL06, b.HIGH);    }
        else                {  b.digitalWrite(RL06, b.LOW);     }
    });
});
io.sockets.on('connection', function (socket) {
    socket.on('RL07', function (data) {           
        console.log(data);
        if (data == 'on')   {  b.digitalWrite(RL07, b.HIGH);    }
        else                {  b.digitalWrite(RL07, b.LOW);     }
    });
});
io.sockets.on('connection', function (socket) {
    socket.on('RL08', function (data) {           
        console.log(data);
        if (data == 'on')   {  b.digitalWrite(RL08, b.HIGH);    }
        else                {  b.digitalWrite(RL08, b.LOW);     }
    });
});
io.sockets.on('connection', function (socket) {
    socket.on('RL09', function (data) {           
        console.log(data);
        if (data == 'on')   {  b.digitalWrite(RL09, b.HIGH);    }
        else                {  b.digitalWrite(RL09, b.LOW);     }
    });
});
io.sockets.on('connection', function (socket) {
    socket.on('RL10', function (data) {           
        console.log(data);
        if (data == 'on')   {  b.digitalWrite(RL10, b.HIGH);    }
        else                {  b.digitalWrite(RL10, b.LOW);     }
    });
});
io.sockets.on('connection', function (socket) {
    socket.on('RL11', function (data) {           
        console.log(data);
        if (data == 'on')   {  b.digitalWrite(RL11, b.HIGH);    }
        else                {  b.digitalWrite(RL11, b.LOW);     }
    });
});
io.sockets.on('connection', function (socket) {
    socket.on('RL12', function (data) {           
        console.log(data);
        if (data == 'on')   {  b.digitalWrite(RL12, b.HIGH);    }
        else                {  b.digitalWrite(RL12, b.LOW);     }
    });
});
io.sockets.on('connection', function (socket) {
    socket.on('RL13', function (data) {           
        console.log(data);
        if (data == 'on')   {  b.digitalWrite(RL13, b.HIGH);    }
        else                {  b.digitalWrite(RL13, b.LOW);     }
    });
});
io.sockets.on('connection', function (socket) {
    socket.on('LED_USR0', function (data) {           
        console.log(data);
        if (data == 'on')   {  b.digitalWrite(LED_USR0, b.HIGH);    }
        else                {  b.digitalWrite(LED_USR0, b.LOW);     }
    });
});
io.sockets.on('connection', function (socket) {
    socket.on('LED_USR1', function (data) {           
        console.log(data);
        if (data == 'on')   {  b.digitalWrite(LED_USR1, b.HIGH);    }
        else                {  b.digitalWrite(LED_USR1, b.LOW);     }
    });
});
io.sockets.on('connection', function (socket) {
    socket.on('LED_USR2', function (data) {           
        console.log(data);
        if (data == 'on')   {  b.digitalWrite(LED_USR2, b.HIGH);    }
        else                {  b.digitalWrite(LED_USR2, b.LOW);     }
    });
});
io.sockets.on('connection', function (socket) {
    socket.on('LED_USR3', function (data) {           
        console.log(data);
        if (data == 'on')   {  b.digitalWrite(LED_USR3, b.HIGH);    }
        else                {  b.digitalWrite(LED_USR3, b.LOW);     }
    });
});
io.sockets.on('connection', function (socket) {
    socket.on('LED_USR4', function (data) {           
        console.log(data);
        if (data == 'on')   {  b.digitalWrite(LED_USR4, b.HIGH);    }
        else                {  b.digitalWrite(LED_USR4, b.LOW);     }
    });
});
io.sockets.on('connection', function (socket) {
    socket.on('OUT_RUN', function (data) {           
        console.log(data);
        if (data == 'on')   {  b.digitalWrite(OUT_RUN, b.HIGH);    }
        else                {  b.digitalWrite(OUT_RUN, b.LOW);     }
    });
});
io.sockets.on('connection', function (socket) {
    socket.on('OUT_ERROR', function (data) {           
        console.log(data);
        if (data == 'on')   {  b.digitalWrite(OUT_ERROR, b.HIGH);    }
        else                {  b.digitalWrite(OUT_ERROR, b.LOW);     }
    });
});
io.sockets.on('connection', function (socket) {
    socket.on('OUT_SOUND', function (data) {           
        console.log(data);
        if (data == 'on')   {  b.digitalWrite(OUT_SOUND, b.HIGH);    }
        else                {  b.digitalWrite(OUT_SOUND, b.LOW);     }
    });
});

////////////////////////////////////////////////////////////////////////////////
var IN00 = "P8_17";
var IN01 = "P8_16";
var IN02 = "P8_15";
var IN03 = "P8_14";
var IN04 = "P8_18";
var IN05 = "P8_19";
var IN06 = "P8_26";
var IN07 = "P8_28";
var IN08 = "P8_7";
var IN09 = "P8_8";
var IN10 = "P8_9";
var IN11 = "P8_10";
var IN12 = "P8_11";
var IN13 = "P8_12";
var IN14 = "P8_13";
b.pinMode(IN00, b.INPUT);
b.pinMode(IN01, b.INPUT);
b.pinMode(IN02, b.INPUT);
b.pinMode(IN03, b.INPUT);
b.pinMode(IN04, b.INPUT);
b.pinMode(IN05, b.INPUT);
b.pinMode(IN06, b.INPUT);
b.pinMode(IN07, b.INPUT);
b.pinMode(IN08, b.INPUT);
b.pinMode(IN09, b.INPUT);
b.pinMode(IN10, b.INPUT);
b.pinMode(IN11, b.INPUT);
b.pinMode(IN12, b.INPUT);
b.pinMode(IN13, b.INPUT);
b.pinMode(IN14, b.INPUT);
io.sockets.on('connection', function (socket) {
    socket.on('read_input', function (data) { 
        console.log(data);
        var value_read_input = 0;
        value_read_input += b.digitalRead(IN00)*1;
        value_read_input += b.digitalRead(IN01)*10;
        value_read_input += b.digitalRead(IN02)*100;
        value_read_input += b.digitalRead(IN03)*1000;
        value_read_input += b.digitalRead(IN04)*10000;
        value_read_input += b.digitalRead(IN05)*100000;
        value_read_input += b.digitalRead(IN06)*1000000;
        value_read_input += b.digitalRead(IN07)*10000000;
        value_read_input += b.digitalRead(IN08)*100000000;
        value_read_input += b.digitalRead(IN09)*1000000000;
        value_read_input += b.digitalRead(IN10)*10000000000;
        value_read_input += b.digitalRead(IN11)*100000000000;
        value_read_input += b.digitalRead(IN12)*1000000000000;
        value_read_input += b.digitalRead(IN13)*10000000000000;
        value_read_input += b.digitalRead(IN14)*100000000000000;
        
        socket.emit('show_value_input', value_read_input);
    });
});

////////////////////////////////////////////////////////////////////////////////
var ADC0 = "P9_39";
var ADC1 = "P9_40";
var ADC2 = "P9_37";
var ADC3 = "P9_38";
var ADC4 = "P9_35";
var ADC5 = "P9_36";
var ADC6 = "P9_33";
io.sockets.on('connection', function (socket) {
    socket.on('adc', function (data) { 
        console.log(data);
        socket.emit('adc0-show', b.analogRead(ADC0));
        socket.emit('adc1-show', b.analogRead(ADC1));
        socket.emit('adc2-show', b.analogRead(ADC2));
        socket.emit('adc3-show', b.analogRead(ADC3));
        socket.emit('adc4-show', b.analogRead(ADC4));
        socket.emit('adc5-show', b.analogRead(ADC5));
        socket.emit('adc6-show', b.analogRead(ADC6));
    });
});

////////////////////////////////////////////////////////////////////////////////
var pwm = "P9_14";
var freq = 1; // Frequency
var duty_cycle = 0.5;
b.pinMode(pwm,b.OUTPUT);
io.sockets.on('connection', function (socket) {
    socket.on('pwm', function (data) {
        console.log(data);
        b.analogWrite(pwm, data/100, freq);
    });
});

////////////////////////////////////////////////////////////////////////////////
function httpserver (req, res) {
    fs.readFile('gpio_adc_pwm.html',function (err, data) {
        if (err) {
            res.writeHead(500);
            return res.end('Error loading gpio.html');
        }
        res.writeHead(200);
        res.end(data);
    });
}

console.log("READY!");
