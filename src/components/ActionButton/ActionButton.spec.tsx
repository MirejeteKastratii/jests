import React from 'react'
import { render,screen } from "@testing-library/react";
import { ActionButton } from "./ActionButton";

describe('ActionButton', () => {
    it('renders without crashing', () => {
        render(
           <ActionButton actionType="create" onActionClick={()=>{alert(3)}}/>
        );
        expect(screen.getByLabelText('Mirjeta')).toBeInTheDocument();
    });
})