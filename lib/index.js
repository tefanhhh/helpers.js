/**
 * Checks if the key pressed is a number key and prevents the event if it's not.
 *
 * @param {Event} ev - The keypress event.
 * @returns {boolean} Returns true if the key pressed is a number key, false otherwise.
 *
 * @example
 * // In an input field event listener
 * inputField.addEventListener('keypress', onlyNumberKey);
 */
export function onlyNumberKey(ev) {
  const ASCIICode = ev.which ? ev.which : ev.keyCode;
  if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57)) {
    ev.preventDefault();
    return false;
  }
  return true;
}

/**
 * Accesses a property of an object using a dot notation string.
 *
 * @param {string} member - The dot notation string representing the path to a nested property.
 * @param {Object} [context=this] - The object on which to perform the property access. Defaults to the current context (`this`).
 * @returns {*} The value of the property at the end of the dot notation path.
 *
 * @example
 * // returns "Hello, world!"
 * memberAccessor("property1.property2.property3", { property1: { property2: { property3: "Hello, world!" } } });
 */
export function memberAccessor(member, context = this) {
  return member.split('.').reduce((acc, curr) => acc[curr], context);
}

/**
 * Converts a dot notation string into a nested object.
 *
 * @param {string} dotNotation - The dot notation string representing the path to a nested property.
 * @param {*} value - The value to be assigned to the property at the end of the dot notation path.
 * @returns {Object} The nested object created from the dot notation string.
 *
 * @example
 * // returns { property1: { property2: { property3: "Hello, world!" } } }
 * convertDotNotationToObject("property1.property2.property3", "Hello, world!");
 */
export function convertDotNotationToObject(dotNotation, value) {
  const keys = dotNotation.split('.');
  const nestedObject = keys.slice(0, -1).reduce((acc, key) => {
    acc[key] = {};
    return acc[key];
  }, {});
  nestedObject[keys[keys.length - 1]] = value;
  return nestedObject;
}
export { datatableReducer } from './datatable-reducer.js';