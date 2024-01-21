import React from 'react';
import Dropdown from './Dropdown';

const App: React.FC = () => {
  const dropdownOptions = ['Opção 1', 'Opção 2', 'Opção 3'];

  return (
    <div>
      <h1>Dropdown Simples</h1>
    
    </div>  <Dropdown options={dropdownOptions} />
  );
};

export default App;