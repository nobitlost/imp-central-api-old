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

require('jasmine-expect');

const ImpCentralApi = require('../lib/ImpCentralApi');
const util = require('./util');
const Errors = require('../lib/Errors');
const Devices = require('../lib/Devices');
const DeviceGroups = require('../lib/DeviceGroups');

describe('impCentralAPI.devices test suite', () => {
    let imp = util.imp;
    let productId;
    let productName;
    let ownerId;
    let deviceGroupName;
    let deviceGroupId;

    let devices = {};

    beforeAll(util.init, util.TIMEOUT);

    it('should create a product', (done) => {
        productName = 'tst_product_' + util.getRandomInt();
        imp.products.create({name : productName}).
            then((res) => {
                expect(res.data.type).toBe('product');
                expect(res.data.attributes.name).toBe(productName);
                productId = res.data.id;
                ownerId = res.data.relationships.owner.id;
                done();
            }).
            catch((error) => {
                done.fail(error);
            });
    });

    it('should get list of devices', (done) => {
        imp.devices.list().
            then((res) => {
                if (res.data.length > 0) {
                    for (let device of res.data) {
                        devices[device.id] = 
                            ('devicegroup' in device.relationships) ? 
                            device.relationships.devicegroup.id : 
                            null;
                    }
                }
                done();
            }).
            catch((error) => {
                done.fail(error);
            });
    });
    
    it('should get list of devices with pagination', (done) => {
        imp.devices.list(null, 1, 1).
            then((res) => {
                if (Object.keys(devices).length > 0) {
                    expect(res.data.length).toBe(1);
                }
                done();
            }).
            catch((error) => {
                done.fail(error);
            });
    });

    it('should not get list of devices with incorrect filter', (done) => {
        imp.devices.list({ wrong_filter : 'value' }).
            then((res) => {
                done.fail('list of devices with incorrect filter obtained successfully');
            }).
            catch((error) => {
                if (!(error instanceof Errors.InvalidArgumentError)) {
                    done.fail('unexpected error');
                }
                done();
            });
    });

    it('should get list of devices with valid filter', (done) => {
        imp.devices.list({ [Devices.FILTER_OWNER_ID] : ownerId }).
            then((res) => {
                if (Object.keys(devices).length > 0) {
                    expect(res.data.length).toBeGreaterThan(0);
                }
                done();
            }).
            catch((error) => {
                done.fail(error);
            });
    });

    it('should get list of devices with all available filters', (done) => {
        imp.devices.list({
            [Devices.FILTER_OWNER_ID] : ownerId,
            [Devices.FILTER_PRODUCT_ID] : productId,
            [Devices.FILTER_DEVICE_GROUP_ID] : deviceGroupId,
            [Devices.FILTER_DEVICE_GROUP_OWNER_ID] : ownerId,
            [Devices.FILTER_DEVICE_GROUP_TYPE] : DeviceGroups.TYPE_DEVELOPMENT}).
            then((res) => {
                done();
            }).
            catch((error) => {
                done.fail(error);
            });
    });

    it('should get a specific device', (done) => {
        if (Object.keys(devices).length > 0) {
            let deviceId = Object.keys(devices)[0];
            imp.devices.get(deviceId).
                then((res) => {
                    expect(res.data.id).toBe(deviceId);
                    expect(res.data.type).toBe('device');
                    done();
                }).
                catch((error) => {
                    done.fail(error);
                });
        }
        else {
            done();
        }
    });

    it('should not get device with wrong id', (done) => {
        imp.devices.get('wrong_id').
            then((res) => {
                done.fail('device with wrong id obtained successfully');
            }).
            catch((error) => {
                if (!(error instanceof Errors.ImpCentralApiError)) {
                    done.fail('unexpected error');
                }
                done();
            });
    });
    
    it('should update a specific device', (done) => {
        if (Object.keys(devices).length > 0) {
            let deviceId = Object.keys(devices)[0];
            imp.devices.get(deviceId).
                then((res) => {
                    let deviceName = res.data.attributes.name;
                    let testName = 'device test name';
                    imp.devices.update(deviceId, { name : testName }).
                        then((res) => {
                            expect(res.data.attributes.name).toBe(testName);
                            imp.devices.update(deviceId, { name : deviceName }).
                                then((res) => {
                                    expect(res.data.attributes.name).toBe(deviceName);
                                    done();
                                }).
                                catch((error) => {
                                    done.fail(error);
                                });
                        }).
                        catch((error) => {
                            done.fail(error);
                        });
                }).
                catch((error) => {
                    done.fail(error);
                });
        }
        else {
            done();
        }
    });

    it('should not update a specific device with wrong attributes', (done) => {
        if (Object.keys(devices).length > 0) {
            let deviceId = Object.keys(devices)[0];
            imp.devices.update(deviceId, { tst_name: 'test name' }).
                then((res) => {
                    done.fail('device updated successfully with wrong attributes');
                }).
                catch((error) => {
                    if (!(error instanceof Errors.InvalidArgumentError)) {
                        done.fail('unexpected error');
                    }
                    done();
                });
        }
        else {
            done();
        }
    });

    it('should not update device with wrong id', (done) => {
        imp.devices.update(ownerId, { name : 'test name' }).
            then((res) => {
                done.fail('device with wrong id updated successfully');
            }).
            catch((error) => {
                if (!(error instanceof Errors.ImpCentralApiError)) {
                    done.fail('unexpected error');
                }
                done();
            });
    });

    it('should restart a specific device', (done) => {
        if (Object.keys(devices).length > 0) {
            let deviceId = Object.keys(devices)[0];
            imp.devices.get(deviceId).
                then((res) => {
                    // unassigned devices can not be restarted
                    if (('devicegroup' in res.data.relationships)) {
                        imp.devices.restart(deviceId).
                            then((res) => {
                                done();
                            }).
                            catch((error) => {
                                done.fail(error);
                            });
                    }
                    else {
                        done();
                    }
                }).
                catch((error) => {
                    done.fail(error);
                });
        }
        else {
            done();
        }
    });

    it('should delete a specific product', (done) => {
        imp.products.delete(productId).
            then((res) => {
                done();
            }).
            catch((error) => {
                done.fail(error);
            });
    });
});
