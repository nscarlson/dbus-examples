// /**
//  * D-Bus Specification
//  * https://dbus.freedesktop.org/doc/dbus-specification.html
//  */

// import DBus, { Define, getBus, registerService } from 'dbus'

// export default class DbusClient {
//     constructor() {
//         this.bus = getBus(this.busType)
//         this.dbusService = registerService(this.busType, 'com.wanco.bus1')
//         this.object = this.dbusService.createObject('/com/wanco/bus1')
//         this.serviceInterface = this.object.createInterface('com.wanco.bus1')
//     }

//     bus: DBus.DBusConnection
//     busType: DBus.busType = 'session'
//     serviceInterface: DBus.DBusServiceInterface
//     object: DBus.DBusServiceObject
//     dbusService: DBus.DBusService

//     connect = () => {
//         getBus(this.busType)

//         console.log('reconnected to', this.busType)
//     }

//     disconnect = () => {
//         this.bus.disconnect()
//         console.log('disconnected')
//     }

//     addSignal = (name: string) => {
//         this.serviceInterface.addSignal(name, {
//             types: ['object'],
//         })
//     }

//     emitSignal = (name: string, ...values: any[]) => {
//         console.log('emitting signal', name, ...values)
//         this.serviceInterface.emitSignal(name, ...values)
//     }

//     addMethod = (methodName: string) => {
//         this.serviceInterface.addMethod(
//             methodName,
//             {
//                 in: [Define(String, 'field1'), Define(String, 'field2')],
//                 out: [Define(String, 'field1'), Define(String, 'field2')],
//             },
//             () => {
//                 console.log('called method')
//             },
//         )
//     }

//     callMethod = (method: string, message: string, ...args: any) => {
//         this.serviceInterface.call(method, message, args)
//     }

//     // getProperty = () => {
//     //     this.serviceInterface.getProperty
//     // }

//     // setProperty = () => {
//     //     this.serviceInterface.addProperty('Name', 'Douglas Adams' );
//     // }
// }
