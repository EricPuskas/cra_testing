export const findByAttribute = (component, attr) =>
  component.find(`[data-test="${attr}"]`);
