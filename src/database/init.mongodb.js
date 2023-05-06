'use strict'

import mongoose, { mongo } from "mongoose";
import { countConnect } from "../helpers/check.connect.js";

const ENV = 1
const dbName = 'ecom'
const connectString = 'mongodb://127.0.0.1:27017/' + dbName

//singleton
class Database {

    constructor() {
        this.connect()
    }
    
    connect(type = 'mongodb'){
        switch(type) {
            case 'mongodb': {
                if (ENV === 1) {
                    mongoose.set('debug', true)
                    mongoose.set('debug', {color: true})
                }
                mongoose.connect(connectString)
                    // .then(() => console.log('connect mongodb successfully'))
                    // .catch(err => console.log('Error connect mongodb'))
                const db = mongoose.connection
                db.on('error', () => console.log('MongoDB connection error.'))
                db.once('open', () => {
                    console.log('Connected to MongoDB successfully.',countConnect())
                })
            }
        }
    }

    static getInstance() {
        if (!Database.instance) {
            Database.instance = new Database()
        }
        return Database.instance
    }
}

const instanceMongodb = Database.getInstance()

export default instanceMongodb