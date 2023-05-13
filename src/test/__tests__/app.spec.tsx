import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../../App';
import { BrowserRouter } from 'react-router-dom';

describe('App Component',()=>{
    it("should render App Component without crashing",()=>{
       expect(()=>{
        render(<BrowserRouter><App/></BrowserRouter>)
       }).not.toThrow()
       
    })
})