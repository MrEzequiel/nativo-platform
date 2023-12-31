export const theme = {
  colors: {
    white: '#FFFFFF',
    black: '#000000',
    primary: '#FFE08F',
    neutral50: '#F6F6F6',
    error: '#e53935'
  },
  gradients: {
    divider:
      'linear-gradient(90deg, rgba(255, 255, 255, 0.32) 12.9%, rgba(255, 255, 255, 0) 106.54%)',
    verticalDivider:
      'linear-gradient(0deg, rgba(255, 255, 255, 0.00) 12.9%, rgba(255, 255, 255, 0.32) 37.77%, rgba(255, 255, 255, 0.00) 106.54%);'
  }
};

export type DefaultTheme = typeof theme;
