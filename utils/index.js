import checkPropTypes from "check-prop-types";

export const findByAttribute = (component, attr) =>
  component.find(`[data-test="${attr}"]`);

export const checkProps = (component, expectedProps) =>
  checkPropTypes(component.propTypes, expectedProps, "props", component.name);
