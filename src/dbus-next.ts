// @ts-nocheck

import dbus from 'dbus-next'

let Variant = dbus.Variant

let {
    Interface,
    property,
    method,
    signal,
    DBusError,
    ACCESS_READ,
    ACCESS_WRITE,
    ACCESS_READWRITE,
} = dbus.interface

let bus = dbus.sessionBus()

// class ExampleInterface2 extends Interface {
//     @method({ inSignature: '', outSignature: 's' })
//     SomeMethod() {
//         return 'ok'
//     }
// }

// let example2 = new ExampleInterface2('org.test.iface2')

// setTimeout(() => {
//     // emit the HelloWorld signal
//     example.HelloWorld('hello')
// }, 500)

// async function main() {
//     await bus.requestName('org.test.name')
//     // bus.export('/org/test/path', example)
//     bus.export('/org/test/path', example2)
// }

// main().catch((err) => {
//     console.log('Error:' + err)
// })
