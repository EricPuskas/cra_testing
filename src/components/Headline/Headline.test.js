import React from "react";
import { shallow } from "enzyme";
import { findByAttribute } from "../../../utils/index";
import Headline from "./Headline";

const setup = (props = {}) => {
  const component = shallow(<Headline {...props} />);
  return component;
};
describe("Headline Component", () => {
  describe("Have props", () => {
    let wrapper;
    const props = {
      header: "Hello World",
      description: "Lorem Ipsum Dolor"
    };
    beforeEach(() => {
      wrapper = setup(props);
    });
    it("Should render without errors", () => {
      const component = findByAttribute(wrapper, "Headline");
      expect(component.length).toBe(1);
    });

    it("Should render an H1", () => {
      const h1 = findByAttribute(wrapper, "header");
      expect(h1.length).toBe(1);
    });
    it("Should render a paragraph(description)", () => {
      const paragraph = findByAttribute(wrapper, "description");
      expect(paragraph.length).toBe(1);
    });
  });

  describe("Have no props", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setup();
    });
    it("Should not render H1", () => {
      const h1 = findByAttribute(wrapper, "header");
      expect(h1.length).toBe(0);
    });
  });

  it("Should pass snapshot test", () => {
    const component = setup();
    expect(component.debug()).toMatchSnapshot();
  });
});
