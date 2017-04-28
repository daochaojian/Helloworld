const colors = {
  /**
   * css named colors
   */
  transparent: 'transparent',
  white: 'white',
  black: 'black',

  /**
   * opacity
   */
  alphaWhite: alpha => `rgba(255, 255, 255, ${alpha})`,
  alphaBlack: alpha => `rgba(0, 0, 0, ${alpha})`,

  /**
   * theme colors
   */
  themeBlack: '#414141',
  themeLightBlack: '#8e8e8e',
  themeDarkGray: '#bababa',
  themeGray: '#e8e8e8',
  themeLightGray: '#f8f8f8',
  themeDarkerGray: '#e2e2e2',
  themeGreen: '#56cb60',
  themeAquaGreen: '#48d2a0',
  themeLightAquaGreen: '#6ddbb3',
  themeYellowGreen: '#8bc34a',
  themeYellow: '#f6a623',
  themeBlue: '#17b7e7',
  themeLightBlue: '#82ddff',
  themeDarkBlue: '#323544',
  themeRed: '#ff5062',
};

export default colors;
