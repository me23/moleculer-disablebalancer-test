const { ServiceBroker } = require("moleculer");

const config = {
	"transporter":  "amqp://127.0.0.1:5672",
	"disableBalancer": true,
}

const broker = new ServiceBroker(config);

broker.start()
    .then( () => {;

    setInterval( () => {
            console.log('call');
            broker.call("balancerTest.ping")
            .then(res => {
                console.log(res);
            });
        },
        3000
    );
});