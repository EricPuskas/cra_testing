import React from "react";
import { shallow } from "enzyme";
import { findByAttribute, checkProps } from "../../../utils";
import Headline from "./Headline";

const setup = (props = {}) => {
  const component = shallow(<Headline {...props} />);
  return component;
};
describe("Headline Component", () => {
  describe("Checking PropTypes", () => {
    it("Should not throw a warning", () => {
      const expectedProps = {
        header: "Test Header",
        description: "Test Description",
        tempArr: [
          {
            firstName: "John",
            lastName: "Doe",
            age: 60,
            email: "johndoe@gmail.com",
            onlineStatus: false
          }
        ]
      };

      const propsErr = checkProps(Headline, expectedProps);
      expect(propsErr).toBeUndefined();
    });
  });

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
