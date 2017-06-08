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
// To retrieve logs from a specific device(s), one need to call the library create() method,
// obtain the id of newly created Logstream from the response and add one or more devices to 
// the Logstream using addDevice() method.
// Logstream id can only be used to add/remove devices to the existing Logstream, it's 
// impossible to retrieve logs from the single stream using multiple clients.
class LogStreams {

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
    // If operation succeeds, the method returns Promise that resolves with HTTP response body 
    // of Electric Imp impCentral API (v5) 'Request a new logstream' request.
    // id of the newly created Logstream can be found there.
    //
    // The exact format of response body and the format of all handler parameters can be found 
    // in Electric Imp impCentral API (v5).
    //
    // Parameters:
    //     messageHandler : function  Handler to be executed when the Logstream reports 'message' event.
    //                                Has messageHandler(message) signature, message contains 
    //                                a log message received.
    //
    //     stateChangeHandler         Optional handler to be executed when the Logstream reports 'state-change' event:
    //                    : function  the stream was opened, closed, or a device was added or removed to the stream.
    //                                Has stateChangeHandler(state) signature, state contains an event details.
    //
    //     errorHandler   : function  Optional handler to be executed when the Logstream reports error.
    //                                Has errorHandler(error) signature, error contains a error details.
    //
    //     format         : String    Optional logs format, one of LogStreams.FORMAT_TEXT and 
    //                                LogStreams.FORMAT_JSON values.
    //                                This affects the format of messages received.
    //                                The default value is LogStreams.FORMAT_TEXT.
    //
    // Returns:                       Promise that resolves when the Logstream is successfully created,
    //                                or rejects with an error
    create(messageHandler, stateChangeHandler = null, errorHandler = null, format = LogStreams.FORMAT_TEXT) {
    }

    // Adds logs for a particular Device to a stream.
    // A logstream can support five devices at a time, the least recently added device will be removed 
    // as devices are added beyond that limit.
    //
    // Parameters:
    //     logStreamId    : String    The Logstream's ID
    //     deviceId       : String    ID of Device to be added to the Logstream
    //
    // Returns:                       Promise that resolves when the Device was successfully added 
    //                                to the Logstream or rejects with an error
    addDevice(logStreamId, deviceId) {
    }

    // Removes logs for a particular Device from a stream.
    //
    // Parameters:
    //     logstreamId    : String    The Logstream's ID
    //     deviceId       : String    ID of Device to be removed from the Logstream
    //
    // Returns:                       Promise that resolves when the Device was successfully removed
    //                                from the Logstream or rejects with an error
    removeDevice(logStreamId, deviceId) {
    }

    // Closes a logstream.
    //
    // Parameters:
    //     logStreamId : String       The Logstream's ID
    //
    // Returns:                       Promise that resolves when the Logstream is successfully closed, 
    //                                or rejects with an error
    close(logStreamId) {
    }
}

module.exports = LogStreams;
