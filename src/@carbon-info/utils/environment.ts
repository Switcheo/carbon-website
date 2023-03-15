import { useMediaQuery, useTheme } from "@material-ui/core";

/**
 * checks if browser is Safari/iOS
 */
export const isMobileSafari = () => {
  return !!(navigator.userAgent.indexOf("iPhone") > -1);
};

/**
 * checks if browser is Mozilla Firefox
*/
export const isFirefox = (): boolean => {
  return !!(navigator.userAgent.indexOf("Firefox") !== -1);
};

/**
 * checks screensize width
 */
export const isWidth = (size: "xl" | "lg" | "md" | "sm" | "xs"): boolean => {
  return useMediaQuery(useTheme().breakpoints.down(size));
};
