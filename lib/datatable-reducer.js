/**
 * Caches the span of each unique value in the data array.
 *
 * @param {string} key - The key to store the span under.
 * @param {Function} accessor - A function to access the value to compare in the data.
 * @param {Object} spans - An object to store the spans.
 * @param {Array} DATA - The data array to process.
 */
export function cacheSpan(key, accessor, spans, DATA) {
  let i = 0;
  DATA.forEach((data, index) => {
    let currentValue = accessor(data);
    let count = 1;
    for (let j = index + 1; j < DATA.length; j++) {
      if (currentValue !== accessor(DATA[j])) {
        break;
      }
      count++;
    }
    spans[i] = spans[i] || {};
    spans[i][key] = count;
    i += count;
  });
}

/**
 * Retrieves the span for a given column and index.
 *
 * @param {string} col - The column to retrieve the span for.
 * @param {number} index - The index to retrieve the span for.
 * @param {Object} spans - The object storing the spans.
 * @returns {number} The span for the given column and index, or undefined if no span is stored.
 */
export function getRowSpan(col, index, spans) {
  return spans[index]?.[col];
}

/**
 * An object containing functions for managing a datatable.
 */
export const datatableReducer = {
  cacheSpan,
  getRowSpan
};