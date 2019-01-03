'use strict'

const soap = require('soap-as-promised-fork')
const URL = 'http://3.tkstargps.net/Ajax/DevicesAjax.asmx?WSDL'

class DeviceController {
  async getTracking ({ request, response }) {
    const client = await soap.createClient(URL)
    const result = await client.GetTracking({ DeviceID: 40615 })
    return result
  }

  async getDeviceCount ({ request, response }) {
    const client = await soap.createClient(URL)
    const result = await client.GetDeviceCount({ UserID: 16732 })
    return result
  }

  async getDevicesHistory ({ request, response }) {
    const client = await soap.createClient(URL)
    const result = await client.GetDevicesHistory({ DeviceID: 40615 })
    return result
  }

  async getDeviceHistoryByRoadOffset ({ request, response }) {
    const client = await soap.createClient(URL)
    const result = await client.GetDeviceHistoryByRoadOffset({
      DeviceID: 40615
    })
    return result
  }

  async getDeviceStatusCAB ({ request, response }) {
    const client = await soap.createClient(URL)
    const result = await client.GetDeviceStatusCAB({ DeviceID: 40615 })
    return result
  }

  async getExpireDevices ({ request, response }) {
    const client = await soap.createClient(URL)
    const result = await client.GetExpireDevices({ UserID: 16732 })
    return result
  }

  async getGeofenceDevicesByUserID ({ request, response }) {
    const client = await soap.createClient(URL)
    const result = await client.GetGeofenceDevicesByUserID({ UserID: 16732 })
    return result
  }

  async create ({ request, response }) {
    const device_data = request.all()
    const client = await soap.createClient(URL)
    const result = await client.saveDevices({
      device_data
    })
    return result
  }
}

module.exports = DeviceController
