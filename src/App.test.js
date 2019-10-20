import App from "./App";
import { shallow } from "enzyme";
import { findByAttribute, testStore } from "../utils";
import React from "react";

const setup = (initState = {}) => {
  const store = testStore(initState);
  const wrapper = shallow(<App store={store} />)
    .childAt(0)
    .dive();
  return wrapper;
};
describe("App Component", () => {
  let wrapper;
  beforeEach(() => {
    const initState = {
      posts: [
        { id: 1, title: "Title 1", body: "Some Text" },
        { id: 2, title: "Title 2", body: "Some Text" },
        { id: 3, title: "Title 3", body: "Some Text" }
      ]
    };
    wrapper = setup(initState);
  });

  it("Should render without errors", () => {
    const component = findByAttribute(wrapper, "App");
    expect(component.length).toBe(1);
  });

  it("Should pass snapshot test", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});
