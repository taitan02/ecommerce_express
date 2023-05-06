'use strict'

import mongoose from "mongoose";
import os from 'os';
const SECOND_LOOP = 5000

const countConnect = () => {
    const numConnection = mongoose.connections.length
    console.log(`Number of connection: ${numConnection}`)
}

const checkOverLoad = () => {
    setInterval(() => {
        const numConnection = mongoose.connections.length
        const numCores = os.cpus().length
        const memoryUsage = process.memoryUsage().rss

        // suppose maximum number of connections based on every cores is 5
        const maxConnection = numCores * 5

        console.log(`Active connection: ${numConnection}`)
        console.log(`Memory usage: ${memoryUsage / 1024 / 1024} MB`)
        if (numConnection > maxConnection) {
            console.log('connection overload')
        }
    }, SECOND_LOOP)
}

// checkOverLoad()

export {
    countConnect,
    checkOverLoad
}