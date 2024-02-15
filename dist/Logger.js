"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
const uuid_1 = require("uuid");
function log(level, message) {
    process.stdout.write(`${level}: ${message} \n `);
}
class Logger {
    debug(message) {
        log('Debug', message);
    }
    info(message) {
        log('Info', message);
    }
    errordebug(message) {
        log('Error', message);
    }
    logWithId(message) {
        log('Info', `${(0, uuid_1.v4)()} ${message}`);
    }
}
exports.Logger = Logger;
