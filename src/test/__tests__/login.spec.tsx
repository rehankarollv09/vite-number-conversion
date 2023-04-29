import '@testing-library/jest-dom';
import Login from '../../Login';
import {render} from '@testing-library/react'
describe("Login Form",()=>{
    it("should render Login Form without crashing",()=>{
        expect(()=>{
            render(<Login/>)
        }).not.toThrow()
    })
})

