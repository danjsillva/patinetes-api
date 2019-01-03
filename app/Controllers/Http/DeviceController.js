'use strict'

const soap = require('soap-as-promised-fork')
const URL = 'http://3.tkstargps.net/Ajax/DevicesAjax.asmx?WSDL'

class DeviceController {
  async index ({ request, response }) {
    const client = await soap.createClient(URL, 'utf-8')
    const result = await client.GetTracking({ DeviceID: 40615 })
    return result
  }
}

module.exports = DeviceController
