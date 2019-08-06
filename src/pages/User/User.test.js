import React from 'react';
import { Button } from "react-bootstrap";

import { shallow , mount } from "enzyme";
import User from "./User";

describe("User Component",()=> {
    it("should render without crashing", () => {
        const wrapper = shallow(<User history={{"push": ()=>null}}/>);
        expect(wrapper.find("div").length).toEqual(3);
        expect(wrapper.find("form").length).toEqual(1);
        expect(wrapper.find("input").length).toEqual(1);
        expect(wrapper.find(Button).length).toEqual(1);

    })
})