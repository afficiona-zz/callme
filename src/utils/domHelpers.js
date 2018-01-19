export const calculateAddAccountWindowDimensions = () => {
  const contentWidth = 698;
  const contentHeight = 710;
  let winW = 600;
  let winH = 460;
  if (document.body && document.body.offsetWidth) {
    winW = document.body.offsetWidth;
    winH = document.body.offsetHeight;
  }
  if (
    document.compatMode === 'CSS1Compat' &&
    document.documentElement &&
    document.documentElement.offsetWidth
  ) {
    winW = document.documentElement.offsetWidth;
    winH = document.documentElement.offsetHeight;
  }
  if (window.innerWidth && window.innerHeight) {
    winW = window.innerWidth;
    winH = window.innerHeight;
  }
  const left =
    winW / 2 - contentWidth / 2 >= 0 ? winW / 2 - contentWidth / 2 : 0;
  const top =
    winH / 2 - contentHeight / 2 >= 0 ? winH / 2 - contentHeight / 2 : 0;

  return {
    left,
    top,
    contentHeight,
    contentWidth
  };
};
