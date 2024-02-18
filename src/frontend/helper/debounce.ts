/** A very simple version of a debounce function but it works :) */
// eslint-disable-next-line @typescript-eslint/ban-types
export default function debounce(func?: Function, timeout = 300) {
  let timer: NodeJS.Timeout;
  return (...args: unknown[]) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}
