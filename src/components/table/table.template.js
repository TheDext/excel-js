const toString = (charCode) => String.fromCharCode(charCode);
const toCharCode = (string) => string.charCodeAt();

const createColumn = (rowIndex, columnIndex) => {
  const FIRST_LETTER = toCharCode("A");

  return !rowIndex
    ? `<div class="column">${toString(columnIndex + FIRST_LETTER)}</div>`
    : `<div class="cell" contenteditable=""></div>`;
};

const createRow = ({ width, height }) => {
  const rows = [];

  for (let rowIndex = 0; rowIndex <= height; rowIndex = rowIndex + 1) {
    rows.push(
      `
        <div class="row">
          <div class="row-info">${rowIndex ? rowIndex : ""}</div>
          <div class="row-data">
            ${[...new Array(width)]
              .map((_, columnIndex) => createColumn(rowIndex, columnIndex))
              .join("")}
          </div>
        </div>
      `
    );
  }

  return rows.join("");
};

const createTable = () => {
  const tableSize = {
    width: 30,
    height: 60,
  };

  return createRow(tableSize);
};

export default createTable;
