import './App.css';
import React from 'react';

const Example = React.lazy(() => import('./ParentExample.tsx'));

const App = () => {
  return (
    <div className="content">
      <h1>Rsbuild with React</h1>
      <p>Start building amazing things with Rsbuild.</p>
      <Example/>
    </div>
  );
};

export default App;
