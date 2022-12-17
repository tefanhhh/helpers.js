export function cacheSpan(key, accessor, spans, DATA) {
  for (let i = 0; i < DATA.length;) {
    let currentValue = accessor(DATA[i]);
    let count = 1;

    // Iterate through the remaining rows to see how many match
    // the current value as retrieved through the accessor.
    for (let j = i + 1; j < DATA.length; j++) {
      if (currentValue != accessor(DATA[j])) {
        break;
      }

      count++;
    }

    if (!spans[i]) {
      spans[i] = {};
    }

    // Store the number of similar values that were found (the span)
    // and skip i to the next unique row.
    spans[i][key] = count;
    i += count;
  }
}

export function getRowSpan(col, index, spans) {    
  return spans[index] && spans[index][col];
}

export const datatableReducer = {
  cacheSpan,
  getRowSpan
}
