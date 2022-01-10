import './App.css';
import { useRoutes } from 'react-router-dom';
import routes from './Routes';
import DataContextProvider from './common/DataContext';

function App() {
  const content = useRoutes(routes);
  return (
    <DataContextProvider>
    {content}
    </DataContextProvider>
  );
}

export default App;
