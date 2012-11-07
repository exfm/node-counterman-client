"use strict";

var request = require('superagent');

module.exports.make = function(host, cb){
    request.post("http://" + host + "/").end(function(res){
        cb(Number(res.text));
    });
};

module.exports.getLast = function(host, cb){
    request.get("http://" + host + "/").end(function(res){
        cb(Number(res.text));
    });
};