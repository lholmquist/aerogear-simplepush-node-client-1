#!/usr/bin/env node

var nopt = require( "nopt" ),
    knownOpts = {
        "url": [ String, null ],
        "version": [ String, null ],
        "debug": Boolean
    },
    shortHands = {
        "u": [ "--url" ],
        "v": [ "--version" ],
        "d": [ "--debug" ]
    },
    parsed = nopt( knownOpts, shortHands, process.argv, 2 ),
    sps = require( "../lib/sps-client" ),
    version = parsed.version || new Date().getTime();

if( !parsed.url ) {
    console.error( "No URL" );
    if( parsed.debug ) {
        console.error( "The URL must be valid and in the format http://host:port/context" );
    }
    process.exit( 1 );
}

if( !parsed.version ) {
    if( parsed.debug ) {
        console.warn( "Warn: A Version was not specified, so a time stamp was used" );
    }
}

sps.Sender( parsed.url )
    .send( "version=" + version )
    .on( "success", function( response ) {
        console.log( "Message Sent" );
        if( parsed.debug ) {
            console.log( "Response: ", response );
        }
    })
    .on( "error", function( err ) {
        console.error( "There was an error sending the message" );
        if( parsed.debug ) {
            console.error( "Error: ", err );
        }
    });
