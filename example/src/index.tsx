import React from 'react';
import ReactDOM from 'react-dom/client';
import { Icon } from 'transfero-components';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <div>
      <Icon icon='airplay' color='#ff00ff' size={24} />
    </div>
  </React.StrictMode>,
);
