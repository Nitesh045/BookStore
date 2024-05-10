// import { render, screen } from "@testing-library/react";
// import App from "./App";
// import { Router } from "./router/Router";

// describe("ParentComponent", () => {
//   test("renders learn react link", () => {
//     render(<App />);

//     expect(App).toBeTruthy();
//   });

  
// });

import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

test('renders learn react link', () => {
  render(
        <App />
  );
 
  expect(App).toBeTruthy();
});
