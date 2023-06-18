// index.js
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from './componenets';

const root = createRoot(document.querySelector('#app'));

root.render(<BrowserRouter>
<App />
</BrowserRouter>);