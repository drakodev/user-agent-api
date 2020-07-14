const express = require('express');
const router = express.Router();
const Browscap = require('browscap-js');
const getUA = async (req, res, next) => {
        try {
            console.log(req.body);
            const browscap = new Browscap();
            const uaString = req.body.uaString;
            const uat = browscap.getBrowser(uaString);
            const queryType = req.body.returnType || 'minimal';
            if (queryType === 'minimal') {
                res.status(201).json({
                    browser: uat.Browser,
                    bowserMaker: uat.Browser_Maker,
                    browserVersion: uat.Version,
                    isMobile: uat.isMobileDevice,
                    isTablet: uat.isTablet,
                    deviceName: uat.Device_Name,
                    DeviceType: uat.Device_Type
                });
            } else {
                res.status(201).json(uat);
            }
        } catch (e) {
            next(e);
        }
    };
    
    router
        .route('/api/v1/ua')
        .post(getUA);

module.exports = router;