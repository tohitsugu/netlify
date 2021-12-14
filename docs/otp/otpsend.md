---
sidebar_position: 2
slug: /otp/send
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Sending BlockID One-Time Passcodes


## Sending a One-Time Passcode 

### Via SMS


As part of your sign-in process, users will receive an SMS message to their phone number with a one-time passcode. Users will need to verify that one-time passcode on your application or website in order to authenticate their sign-in. 

Numbers from US and Canada are currently supported.

Integration is simple using the BlockID SDK, and we can test SMS functionality with a couple lines of code.
    

<Tabs groupId="operating-systems">
  <TabItem value="node" label="Node.js">  

```jsx title=MyProject.js
var OTP = require('nodejs-helper-files/OTPProvider.js')

OTP.GenerateOTP('john.smith', { smsTo: "1234567890", smsISDCode: "1" });
```
</TabItem>
  <TabItem value="php" label="PHP" className="gray-text">
(Coming Soon)
</TabItem>
</Tabs>


We can execute the 





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

