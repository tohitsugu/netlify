---
sidebar_position: 2
slug: /otp/send-old
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Sending BlockID One-Time Passcodes (old)


## Getting Started 
 
Adding one-time passcode authentication into your sign-in experience is straight-forward when using the BlockID Developer SDK, and integration can be as simple as a single line of code.  

To get started, first install the `blockid-nodejs-helpers` npm package, which contains the Node.js BlockID SDK, and all the necessary libraries and functions needed for secure communication with our API and servers.    

Open a terminal and execute the following command to install the package:  
 

```bash	title="Terminal Emulator"
npm i blockid-nodejs-helpers
```


### Sending a One-Time Passcode via SMS

We can use the BlockID Developer SDK to test OTP functionality and send a one-time passcode to a phone number of our choosing.  

To send a one-time passcode via sms, create a new file, or else edit an existing file, and import the BlockID SDK. The BlockID SDK can be found in the `.node_modules/blockid-nodejs-helpers` folder.   

Copy the following lines, replacing the number below with your own:

    
<Tabs groupId="operating-systems">
  <TabItem value="node" label="Node.js">  

```jsx title=REQUEST
var SDK = require('nodejs-helper-files/OTPProvider.js')
SDK.GenerateOTP('john.smith', { smsTo: "1234567890", smsISDCode: "1" });
```
</TabItem>
  <TabItem value="php" label="PHP" className="gray-text">
(Coming Soon)
</TabItem>
</Tabs>



:::note
Make sure you enter the phone number you wish to send the one-time passcode to.
:::


We can execute the file from the command line. The response should look similar to the one below.  

<Tabs groupId="operating-systems">
  <TabItem value="node" label="Node.js">  

```bash title=RESPONSE
node myfile.js

{"messageId":"15f9dd86-9a8a-4c66-900a-f711f5acceb1","info":"OTP request accepted"}
```
</TabItem>
  <TabItem value="php" label="PHP" className="gray-text">
(Coming Soon)
</TabItem>
</Tabs>

Checking your phone, you should have received an SMS containing the one-time passcode: 

<img src='../../../img/otpsms.png' width='250' />

	



### Via Email

As part of your sign-in process, users will receive an email containing a one-time passcode. Users will need to verify that one-time passcode on your application or website in order to authenticate their sign-in.

We can quickly test functionality by using the BlockID SDK. Integration is simple, and only takes a couple lines of code. 

<Tabs groupId="operating-systems">
  <TabItem value="node" label="Node.js">  

```jsx title=MyProject.js
var OTP = require('nodejs-helper-files/OTPProvider.js')

OTP.GenerateOTP('john.smith', { emailTo: "john.smith@mysite.com" });
```
</TabItem>
  <TabItem value="php" label="PHP" className="gray-text">
(Coming Soon)
</TabItem>
</Tabs>



### Via Email and SMS

If desired, we can send the one-time passcode to a user's email and phone at the same time. 

<Tabs groupId="operating-systems">
  <TabItem value="node" label="Node.js">  

```jsx title=MyProject.js
var OTP = require('nodejs-helper-files/OTPProvider.js')
OTP.GenerateOTP('john.smith', { emailTo: "john.smith@mysite.com", smsTo: "1234567890", smsISDCode: "1" });
```
</TabItem>
  <TabItem value="php" label="PHP" className="gray-text">
(Coming Soon)
</TabItem>
</Tabs>

