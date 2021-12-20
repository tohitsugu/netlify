
import React, {useState} from 'react';

export default function MyComponent() {
  const [bool, setBool] = useState(false);
  return (
    <div>
      <p>MyComponent rendered BKLALAAA>
      <p>bool={bool ? 'true' : 'false'}</p>
      <p>
        <button onClick={() => setBool((b) => !b)}>toggle bool</button>
      </p>
    </div>
  );
}


import sdk from '@stackblitz/sdk'

sdk.embedProjectId(
  'elementOrId',
  'nodejs-k5lhc1',
  {
    openFile: 'MyComponent.js',
  }
);
