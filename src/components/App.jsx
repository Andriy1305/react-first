import React from 'react';
import Card from './Card';  // Оскільки Card.jsx знаходиться в тій самій папці

const App = () => {
    return (
      <>
        <h1>Мій React додаток</h1>
        <Card>
          <h1>Card title</h1>
          <p>Text between opening and closing tag</p>
        </Card>
      </>
    );
};





export default App;
