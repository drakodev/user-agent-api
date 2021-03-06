# User Agent Lookup API

### This API returns user agent from a string using browsecap

> ### Not for production use

### Requirements

1. NodeJS > 10
2. Express > 4
3. browsecap

### Installation

1. Clone this repository
2. `npm i`
3. `node index.js` or `npm run dev`

### Usage

API currently provides a POST request which returns the parsed response

#### API path

http://localhost:3010/api/v1/ua 

#### API Request (Body)

In request body provide two parameters `uaString` which you received from browser and `returnType` defining the size of response you expect `minimal` or `full` 

> If no `returnType` is provided then defaul response will be minimal.

```json
{
	"uaString": "Microsoft Office/16.0 (Microsoft Outlook 16.0.12827; Pro), Mozilla/4.0 										(compatible; ms-office; MSOffice 16)",
	"returnType": "minimal",
	"token": "<SECRET SET IN ENV>"
}
```

#### API Response (Minimal)

````json
{
    "browser": "Office",
    "bowserMaker": "Microsoft Corporation",
    "browserVersion": "2016",
    "isMobile": false,
    "isTablet": false,
    "deviceName": "Windows Desktop",
    "DeviceType": "Desktop"
}
````

#### API Response (Full)

```json
{
    "Comment": "Microsoft Office 2016",
    "Browser": "Office",
    "Browser_Type": "Application",
    "Browser_Bits": "0",
    "Browser_Maker": "Microsoft Corporation",
    "Browser_Modus": "unknown",
    "Version": "2016",
    "MajorVer": "2016",
    "MinorVer": "0",
    "Platform": "unknown",
    "Platform_Version": "unknown",
    "Platform_Description": "unknown",
    "Platform_Bits": "0",
    "Platform_Maker": "unknown",
    "Alpha": false,
    "Beta": false,
    "Win16": false,
    "Win32": false,
    "Win64": false,
    "Frames": true,
    "IFrames": true,
    "Tables": true,
    "Cookies": true,
    "BackgroundSounds": true,
    "JavaScript": true,
    "VBScript": true,
    "JavaApplets": true,
    "ActiveXControls": true,
    "isMobileDevice": false,
    "isTablet": false,
    "isSyndicationReader": false,
    "Crawler": false,
    "isFake": false,
    "isAnonymized": false,
    "isModified": false,
    "CssVersion": "2",
    "AolVersion": "0",
    "Device_Name": "Windows Desktop",
    "Device_Maker": "unknown",
    "Device_Type": "Desktop",
    "Device_Pointing_Method": "mouse",
    "Device_Code_Name": "Windows Desktop",
    "Device_Brand_Name": "unknown",
    "RenderingEngine_Name": "Trident",
    "RenderingEngine_Version": "unknown",
    "RenderingEngine_Description": "For Internet Explorer since version 4.0 and embedded WebBrowser controls (such as Internet Explorer shells, Maxthon and some media players).",
    "RenderingEngine_Maker": "Microsoft Corporation",
    "Parent": "Microsoft Office 2016",
    "browser_name_regex": "/^microsoft office\/16\\.0 .*$/",
    "browser_name_pattern": "microsoft office/16.0 *"
}
```
### License

MIT License

Copyright (c) 2021 drakodev

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
