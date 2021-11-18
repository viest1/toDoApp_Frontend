import React from 'react';
import App from '../views/App';
import { render, screen, fireEvent } from '@testing-library/react';
import { renderWithProviders } from '../helpers/renderWithProviders';

const RenderApp = () => {
  return (
    <>
      <App />
    </>
  );
};

describe('Add Task', () => {
  it('Add Task', () => {
    renderWithProviders(<RenderApp />);
    fireEvent.change(screen.getByTestId('inputTest'), { target: { value: 'Adam' } });
    const buttons = screen.getAllByText('+');
    fireEvent.click(buttons[0]);
    screen.getByText('Adam');
  });
});

//
// describe('renderApp', () => {
//   it('Render the App', () => {
//     console.log('START')
//     render(<RenderApp />);
//     screen.getByText('Dashboard');
//     const text = screen.getByText('Hello Settings')
//     expect(text).toBeNull()
//   });
// });

// const add = (a,b) => a+b;
//
// const users = [
//   'roman', 'fava'
// ]
//
// it('Adds two values', ()=>{
//   expect(add(2,2)).not.toBe(5)
// })
//
// it('2', ()=>{
//   expect(users).not.toContain('apples')
// })
//
// it('3', ()=>{
//   expect(users).toContain('roman')
// })
