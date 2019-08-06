import React from 'react';

import { shallow , mount } from "enzyme";
import SideBar from "./Sidebar";

describe("Sidebar Component",()=> {
    const rooms = [{"id": 0, name :"Business"}, {"id":1, name: "sports"}]
    it("should render without crashing", () =>{
        const wrapper = shallow(<SideBar key ={1} activeRoomId={1} username={"Ryan"} rooms={rooms}  setActiveRoomId={()=> null}  onlineFor={new Date()}/>);
        expect(wrapper.find("div").length).toEqual(7);
    })
})