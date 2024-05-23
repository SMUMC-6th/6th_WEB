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

const SCREEN_SIZE = {
  MOBILE: `screen and (max-width: 480px)`,
  TABLET: "screen and (max-width: 768px)",
  PC: "screen and (max-width: 1024px)",
};

const theme = { ALIGN, SCREEN_SIZE };

export default theme;
