import checkPropTypes from "check-prop-types";
import { applyMiddleware, createStore } from "redux";
import rootReducer from "../src/reducers";
import { middleware } from "../src/store";

export const findByAttribute = (component, attr) =>
  component.find(`[data-test="${attr}"]`);

export const checkProps = (component, expectedProps) =>
  checkPropTypes(component.propTypes, expectedProps, "props", component.name);

export const testStore = initState => {
  const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore);
  return createStoreWithMiddleware(rootReducer, initState);
};
