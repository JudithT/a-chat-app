import React from 'react';

import { shallow , mount } from "enzyme";
import Topbar from "./Topbar";

describe("Topbar Component",()=> {
    it("should render without crashing", () => {
        const wrapper = shallow(<Topbar activeRoomId={1} username={"Ryan"}/>);
        expect(wrapper.find("div").length).toEqual(4);
        expect(wrapper.find("h2").length).toEqual(1);
    })
})