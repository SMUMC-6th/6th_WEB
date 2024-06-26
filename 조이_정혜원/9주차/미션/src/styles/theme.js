const ALIGN = {
  ROW_CENTER: `
            display: flex;
            justify-content: center;
            align-items: center
            `,
  COLUMN_CENTER: `
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          `,
  ROW_SPACE_BETWEEN: `
          display: flex;
          justify-content: space-between;
          align-items: center;
          `,
  ROW_SPACE_AROUND: `
          display: flex;
          justify-content: space-around;
          align-items: center;
          `,
  GRID_CENTER: `
          display: grid;
          place-items: center;
          `,
};

const theme = { ALIGN };

export default theme;
