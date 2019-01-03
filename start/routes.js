'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

Route.group(() => {
  Route.resource('devices', 'DeviceController').only(['create'])
  Route.get('devices/tracking', 'DeviceController.getTracking')
  Route.get('devices/count', 'DeviceController.getDeviceCount')
  Route.get('devices/get_device_history', 'DeviceController.getDevicesHistory')
  Route.get(
    'devices/get_device_history_by_road_offset',
    'DeviceController.getDeviceHistoryByRoadOffset'
  )
  Route.get(
    '/devices/get_device_status_CAB',
    'DeviceController.getDeviceStatusCAB'
  )
  Route.get('/devices/get_expire_devices', 'DeviceController.getExpireDevices')
  Route.get(
    '/devices/get_geofence_devices_by_userID',
    'DeviceController.getGeofenceDevicesByUserID'
  )
}).prefix('api/v1')
