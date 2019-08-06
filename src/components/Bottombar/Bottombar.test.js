import React from 'react';

import { shallow , mount } from "enzyme";
import Bottombar from "./Bottombar";

describe("Bottombar Component",()=> {
  
    it("should render without crashing", () =>{
        const wrapper = shallow(<Bottombar activeRoomId={1} username={"Ryan"} />);
        expect(wrapper.find("div").length).toEqual(1);
        expect(wrapper.find("form").length).toEqual(1);
        expect(wrapper.find("label").length).toEqual(1);
        expect(wrapper.find("textarea").length).toEqual(1);
        expect(wrapper.find("button").length).toEqual(1);
    })
})
