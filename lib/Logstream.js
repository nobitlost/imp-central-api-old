// MIT License
//
// Copyright 2017 Electric Imp
//
// SPDX-License-Identifier: MIT
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be
// included in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
// EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO
// EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES
// OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
// ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
// OTHER DEALINGS IN THE SOFTWARE.

'use strict';

// This class provides access to Logstream impCentral API methods.
class Logstream {
    // Logs format
    static get FORMAT_TEXT() {
        return 'text';
    }

    static get FORMAT_JSON() {
        return 'json';
    }
    
    // Creates a new logstream and retrieves logs from it.
    // An account can have one logstream open at a time, requesting a new logstream will 
    // immediately close any existing streams.
    //
    // Parameters:
    //     messageHandler : function  Function to be executed when the Logstream reports 'message' event.
    //                                Has messageHandler(message) signature, message contains 
    //                                a log message received.
    //
    //     stateChangeHandler         Function to be executed when the Logstream reports 'state-change' event.
    //                    : function  Has stateChangeHandler(data) signature, data contains 
    //                                a state-change event data.
    //
    //     errorHandler   : function  Function to be executed when the Logstream reports error.
    //                                Has errorHandler(error) signature, error contains a error details.
    //
    //     format         : String    The logs format, one of Logstream.FORMAT_TEXT and 
    //                                Logstream.FORMAT_JSON values.
    //                                This affects the format of messages received.
    //                                The default value is Logstream.FORMAT_TEXT.
    //
    // Returns:                       Promise that resolves when the Logstream is successfully created,
    //                                or rejects with an error
    create(messageHandler, stateChangeHandler = null, errorHandler = null, format = Logstream.FORMAT_TEXT) {
    }

    // Adds logs for a particular Device to a stream.
    // A logstream can support five devices at a time, the least recently added device wil be removed 
    // as devices are added beyond that limit.
    //
    // Parameters:
    //     logstreamId    : String    The Logstream's ID
    //     deviceId       : String    ID of Device to be added to the Logstream
    //
    // Returns:                       Promise that resolves when the Device was successfully added 
    //                                to the Logstream or rejects with an error
    addDevice(logstreamId, deviceId) {
    }

    // Removes logs for a particular Device from a stream.
    //
    // Parameters:
    //     logstreamId    : String    The Logstream's ID
    //     deviceId       : String    ID of Device to be removed from the Logstream
    //
    // Returns:                       Promise that resolves when the Device was successfully removed
    //                                from the Logstream or rejects with an error
    removeDevice(logstreamId, deviceId) {
    }

    // Closes a logstream.
    //
    // Parameters:
    //     logstreamId : String       The Logstream's ID
    //
    // Returns:                       Promise that resolves when the Logstream is successfully closed, 
    //                                or rejects with an error
    close(logstreamId) {
    }
}

module.exports = Logstream;
