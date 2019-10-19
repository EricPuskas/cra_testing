import React from "react";
import { shallow } from "enzyme";
import { findByAttribute, checkProps } from "../../../utils";
import Button from "./Button";

describe("Button Component", () => {
  describe("Checking PropTypes", () => {
    it("Should not throw a warning", () => {
      const expectedProps = {
        buttonText: "Example Button Text",
        emitEvent: () => {}
      };
      const propsError = checkProps(Button, expectedProps);
      expect(propsError).toBeUndefined();
    });
  });
});

describe("Renders without crashing", () => {
  let component;
  beforeEach(() => {
    const props = {
      buttonText: "Example Button Text",
      emitEvent: () => {}
    };
    component = shallow(<Button {...props} />);
  });
  it("Should pass snapshot test", () => {
    expect(component.debug()).toMatchSnapshot();
  });

  it("Should render a button", () => {
    const button = findByAttribute(component, "SharedBtn");
    expect(button.length).toBe(1);
  });
});
