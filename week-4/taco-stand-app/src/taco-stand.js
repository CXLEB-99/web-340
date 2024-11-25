/**
 * Author: Caleb Goforth
 * Date: 11/25/2024
 * * File Name:tacoStand.js
 * Description:TacoStandEmitter class that emits events for serving customers, preparing tacos, and handling rushes.
 */

"use strict";

const EventEmitter = require("events");

class TacoStandEmitter extends EventEmitter {
    serveCustomer(customer) {
        this.emit("serve", customer);
    }

    prepareTaco(taco) {
        this.emit("prepare", taco);
    }

    handleRush(rush) {
        this.emit("rush", rush);
    }
}

module.exports = TacoStandEmitter;
