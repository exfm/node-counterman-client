# node-counterman-client

Simple wrapper to talk to counterman

## Usage

    var cm = require('counterman-client'),
        cmHost = 'my.counterman.com';

    cm.make(cmHost, function(id){
        console.log('Made ID: ', id);
        cm.getLast(function(lastId){
            console.log('Last ID generated was: ' + lastId);
        });
    });



## Install

     npm install node-counterman-client

## Testing

    git clone
    npm install
    mocha
