"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
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
}
exports.Logger = Logger;
