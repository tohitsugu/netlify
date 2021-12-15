---
sidebar_position: 2
slug: /otp/send
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Sending BlockID One-Time Passcodes


## Getting Started 
 
Adding one-time passcode authentication into your sign-in experience is straight-forward when using the BlockID Developer SDK, and integration can be as simple as a single line of code.  

To get started, first install the `blockid-nodejs-helpers` npm package, which contains the Node.js BlockID SDK, and all the necessary libraries and functions needed for secure communication with our API and servers.    

Open a terminal and execute the following command to install the package:  
 

```bash
npm i blockid-nodejs-helpers
```
After downloading, the BlockID SDK and other Node.js helper files and libraries can be found in the `.node_modules/blockid-nodejs-helpers` folder.  

### Sending a One-Time Passcode via SMS

We can use the BlockID Developer SDK to test OTP functionality and send a one-time passcode to a phone number of our choosing.  

To send a one-time passcode via sms, create a new file, or else edit an existing file, and copy the following lines, replacing the number below with your own:


```jsx title=REQUEST
var SDK = require('nodejs-helper-files/OTPProvider.js')
SDK.GenerateOTP('john.smith', { smsTo: "1234567890", smsISDCode: "1" });
```




We can execute the file from the command line. The response should look similar to the one below.  


```bash title=RESPONSE
node myfile.js

{"messageId":"15f9dd86-9a8a-4c66-900a-f711f5acceb1","info":"OTP request accepted"}
```

Checking your phone, you should have received an SMS containing the one-time passcode: 

<img src='../../../img/otpsms.png' width='250' />

	



### Via Email

To send a one-time passcode via email, create a new file, or else edit an existing file, and copy the following lines, replacing the email below with your own:


```jsx title=REQUEST
var SDK = require('nodejs-helper-files/OTPProvider.js')
SDK.GenerateOTP('john.smith', { emailTo: "john.smith@mysite.com" });
```

We can execute the file from the command line. The response should look similar to the one below.  

```bash title=RESPONSE
node myfile.js

{"messageId":"d5410b22-93fb-4260-b3fd-09e435177377","info":"OTP request accepted"}
```

Checking you email inbox, you should have received a message containing the one-time passcode:

<img src='../../../img/otpemail.png' width='250' />


### Via Email and SMS

If desired, we can send the one-time passcode to a user's email and phone at the same time. 



```jsx title=REQUEST
var SDK = require('nodejs-helper-files/OTPProvider.js')

SDK.GenerateOTP('john.smith', { emailTo: "john.smith@mysite.com", smsTo: "1234567890", smsISDCode: "1" });
```

  
