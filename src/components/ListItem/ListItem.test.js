import React from "react";
import { shallow } from "enzyme";
import { findByAttribute, checkProps } from "../../../utils";
import ListItem from "./ListItem";

describe("ListItem Component", () => {
  describe("Checking PropTypes", () => {
    it("Should not throw a warning", () => {
      const expectedProps = {
        title: "Example Title",
        desc: "Example Description"
      };
      const propsError = checkProps(ListItem, expectedProps);
      expect(propsError).toBeUndefined();
    });
  });
});

describe("Renders without crashing", () => {
  let component;
  beforeEach(() => {
    const props = {
      title: "Example Title",
      desc: "Example Description"
    };
    component = shallow(<ListItem {...props} />);
  });
  it("Should pass snapshot test", () => {
    expect(component.debug()).toMatchSnapshot();
  });

  it("Should render without error", () => {
    let elem = findByAttribute(component, "listItem");
    expect(elem.length).toBe(1);
  });

  it("Should render a title", () => {
    const title = findByAttribute(component, "title");
    expect(title.length).toBe(1);
  });

  it("Should render a description", () => {
    const desc = findByAttribute(component, "desc");
    expect(desc.length).toBe(1);
  });
});

describe("Should not render", () => {
  let component;
  beforeEach(() => {
    const props = {
      desc: "Example Description"
    };
    component = shallow(<ListItem {...props} />);
  });
  it("Should not render h2 when no title prop", () => {
    const elem = findByAttribute(component, "listItem");
    expect(elem.length).toBe(0);
  });
});
