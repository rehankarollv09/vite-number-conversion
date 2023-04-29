import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../../App';

describe('App Component',()=>{
    it("should render App Component without crashing",()=>{
       expect(()=>{
        render(<App/>)
       }).not.toThrow()
       
    })
})