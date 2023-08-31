import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import ListSampleData from './ListSampleData';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <ListSampleData />
  </StrictMode>
);
