import React from 'react';

import { shallow , mount } from "enzyme";
import MessageBar from "./Messagebar";

describe("Messagebar Component",()=> {
    it("should render without crashing", () =>{
        const wrapper = shallow(<MessageBar key ={1} activeRoomId={1} username={"Ryan"} newMessageAdded={()=> null}/>);
        expect(wrapper.find("div").length).toEqual(1);
    })
})

