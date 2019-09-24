# Adonis Twilio 🚀

[Twilio](https://www.twilio.com/docs/libraries/node) provider for AdonisJS.

## Installation

Simply run:

```
adonis install adonis-twilio
```

Add twilio provider to your AdonisJS application located at `start/app.js`:

```
const providers = [
    ...
    'adonis-twilio/providers/Twilio'
];
```

Add to your `.env` file

```
TWILIO_SID=
TWILIO_TOKEN=
```

## Usage

Simply call it using:

```Javascript
const Twilio = use('Twilio');
```

## Examples

### Sending SMS

```Javascript
const Twilio = use('Twilio');

const sendSms = async () => {
    const message = await Twilio.messages.create({
        body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
        from: '+15017122661',
        to: '+15558675310'
    });

  console.log(message.sid);
};
```

## Official Documentation

This is basically a wrapper over [twilio-node](https://github.com/twilio/twilio-node).

For more information, kindly check out the [Twilio Official Documentation](https://www.twilio.com/docs).

## Contributing

If you find any issue, bug or missing feature, please kindly create an issue or submit a pull request.

## License

Adonis Twilio is open-sourced software licensed under the MIT license.
