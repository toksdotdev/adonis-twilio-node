'use strict'

const { ServiceProvider } = require('@adonisjs/fold')

class TwilioProvider extends ServiceProvider {
  /**
   * Register namespaces to the IoC container
   *
   * @method register
   *
   * @return {void}
   */
  register () {
    this.app.singleton('Adonis/Twilio', () => {
      const Config = this.app.use('Adonis/Src/Config')

      const Twilio = require('twilio')
      const sid = Config.get('twilio.sid')
      const token = Config.get('twilio.token')

      return new Twilio(sid, token)
    })
  }

  /**
   * On boot add commands with ace.
   *
   * @return {void}
   */
  boot(){
    this.app.alias('Adonis/Twilio', 'Twilio');
  }
}

module.exports = TwilioProvider
