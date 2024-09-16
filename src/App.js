/**
 * The `App` function returns a React component that renders a `Tiptap` component within a `div` with a
 * blueviolet background color.
 * @returns The `App` component is being returned, which contains a `div` element with a blueviolet
 * background color and the `Tiptap` component inside it.
 */
import React from 'react';
import Tiptap from './components/Tiptap';
import './App.css';

function App() {
  return (
    <div style={{backgroundColor:'blueviolet'}}>
      <Tiptap />
    </div>
  );
}

export default App;