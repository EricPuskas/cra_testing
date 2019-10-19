import React from "react";
import { shallow } from "enzyme";
import { findByAttribute } from "../../../utils/index";
import Header from "./Header";

describe("Header Component", () => {
  const component = shallow(<Header />);
  const wrapper = findByAttribute(component, "header");
  const logo = findByAttribute(component, "logo");

  it("Should render without errors", () => {
    expect(wrapper.length).toBe(1);
  });

  it("Should render a logo", () => {
    expect(logo.length).toBe(1);
  });

  it("Should pass snapshot test", () => {
    expect(wrapper.debug()).toMatchSnapshot();
  });
});
