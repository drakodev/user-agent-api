const express = require('express');
const router = express.Router();
const Browscap = require('browscap-js');
const getUA = async (req, res, next) => {
        try {
            const browscap = new Browscap();
            const uaString = req.body.uaString;
            const uat = browscap.getBrowser(uaString);
            if(req.body.token === process.env.TOKEN) {
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
            } else {
                res.status(500).json('Forbidden');
            }
        } catch (e) {
            next(e);
        }
    };

    router
        .route('/api/v1/ua')
        .post(getUA);

module.exports = router;