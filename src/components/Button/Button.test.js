import React from "react";
import { shallow, unmount } from "enzyme";
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
  let mockFn;
  beforeEach(() => {
    mockFn = jest.fn();
    const props = {
      buttonText: "Example Button Text",
      emitEvent: mockFn
    };
    component = shallow(<Button {...props} />);
  });
  it("Should pass snapshot test", () => {
    expect(component.html()).toMatchSnapshot();
  });

  it("Should render a button", () => {
    const button = findByAttribute(component, "SharedBtn");
    expect(button.length).toBe(1);
  });

  it("Should emit a callback on click event", () => {
    const button = findByAttribute(component, "SharedBtn");
    button.simulate("click");
    const callback = mockFn.mock.calls.length;
    expect(callback).toBe(1);
  });
});
