import theme from '../../styles/theme';

declare module 'styled-components' {
  type IThemeType = typeof theme;
  export interface DefaultTheme extends IThemeType {}
}
