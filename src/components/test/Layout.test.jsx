import { render } from "@testing-library/react";
import React from "react";
import Layout from "../layout/Layout";

describe("Layout",()=>{
    it("should render layout component",()=>{
        const {getByText}=render(<Layout/>);

        expect(getByText('Book Store')).toBeInTheDocument;
        
    })
})