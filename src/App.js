import React from 'react';
import LifecycleA from './LifecycleA';
import CompB from './CompB';
import CompA from './CompA';
const App = () => {
  return <div>
  <CompB name='rohit' />
  <CompB name= 'rony'/>
  <CompB name='ros' />
  <CompB name='rocky' />
  <CompA name='Rohit'/>
  <CompA name= 'ron'/>
  <CompA name= 'ros' />
  <CompA name='rocky' />
    {/* <LifecycleA/> */}
  </div>;
};

export default App;
