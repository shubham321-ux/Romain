export const cssVar = {
    colors: {
      darkGreen: getComputedStyle(document.documentElement).getPropertyValue('--color-dark-green'),
      orange: getComputedStyle(document.documentElement).getPropertyValue('--color-orange'),
      darkGrey: getComputedStyle(document.documentElement).getPropertyValue('--color-dark-grey'),
      grey: getComputedStyle(document.documentElement).getPropertyValue('--color-grey'),
      borderColor: getComputedStyle(document.documentElement).getPropertyValue('--border-color'),
      bodyBg: getComputedStyle(document.documentElement).getPropertyValue('--body-bg'),
      footerBg: getComputedStyle(document.documentElement).getPropertyValue('--footer-bg'),
      footerText: getComputedStyle(document.documentElement).getPropertyValue('--footer-text')
    },
    spacing: {
      normalPadding: getComputedStyle(document.documentElement).getPropertyValue('--normal-padding'),
      paddingPhone: getComputedStyle(document.documentElement).getPropertyValue('--padding-phone')
    },
    transitions: {
      default: getComputedStyle(document.documentElement).getPropertyValue('--transform')
    },
    fonts: {
      poppins: getComputedStyle(document.documentElement).getPropertyValue('--Poppins')
    }
  };
  
 
  