// https://github.com/Koenkk/zigbee-herdsman-converters/blob/master
const fz = require('zigbee-herdsman-converters/converters/fromZigbee');
const tz = require('zigbee-herdsman-converters/converters/toZigbee');
const exposes = require('zigbee-herdsman-converters/lib/exposes');
const reporting = require('zigbee-herdsman-converters/lib/reporting');
const extend = require('zigbee-herdsman-converters/lib/extend');
const e = exposes.presets;
const ea = exposes.access;

const definition = {
    zigbeeModel: ['DHT22_IO'], // The model ID from: Device with modelID 'lumi.sens' is not supported.
    model: 'ESP32-H2_1', // Vendor model number, look on the device for a model number
    vendor: 'vdomos', // Vendor of the device (only used for documentation and startup logging)
    description: 'ESP32-H2 Demo temperature & humidity sensor', // Description of the device, copy from vendor site. (only used for documentation and startup logging)
    fromZigbee: [fz.temperature, fz.humidity, fz.terncy_contact], // We will add this later
    toZigbee: [tz.on_off], // Should be empty, unless device can be controlled (e.g. lights, switches).
    exposes: [e.temperature(), e.humidity(), e.switch(), e.contact()], // Defines what this device exposes, used for e.g. Home Assistant discovery and in the frontend
};

module.exports = definition;
