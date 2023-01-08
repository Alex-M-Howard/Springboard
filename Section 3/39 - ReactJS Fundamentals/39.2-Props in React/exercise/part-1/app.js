const ReactDOM = require('react-dom/client')

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container)

root.render(
 <div>
    <FirstComponent />
    <NamedComponent />
 </div>
);
