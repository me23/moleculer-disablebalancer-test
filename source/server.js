const { ServiceBroker } = require("moleculer");

const config = {
	"transporter":  "amqp://127.0.0.1:5672",
	"disableBalancer": true,
}

const broker = new ServiceBroker(config);

broker.createService({
    name: 'balancerTest',
    actions: {
        ping: () => {
            return "pong";
        }
    }
});

broker.start();