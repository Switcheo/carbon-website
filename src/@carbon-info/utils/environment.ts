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
