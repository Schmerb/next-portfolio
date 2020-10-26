const cache: any = {};
/**
 * Converts hex value to rgba equivalent
 * Caches values so that they are not re-calculated per render
 *
 * @param {string} hex "#ff00ff"
 * @param {number} opacity 0 -1.0
 * @returns
 */
export const hex2rgb = (hex: any, opacity: any) => {
  const key = `${hex}_${opacity}`;
  // store value for future requests
  // helps with re-renders performance
  if (key in cache) {
    return cache[key];
  }
  let h = hex.replace('#', '');
  h = h.match(new RegExp(`(.{${h.length / 3}})`, 'g'));

  // eslint-disable-next-line
  for (let i = 0; i < h.length; i++) {
    h[i] = parseInt(h[i].length === 1 ? h[i] + h[i] : h[i], 16);
  }

  if (typeof opacity !== 'undefined') h.push(opacity);

  const rgbaVal = `rgba(${h.join(',')})`;
  // save for future use
  cache[key] = rgbaVal;

  return rgbaVal;
};

export const colorShade = (col: string, amt: number) => {
  col = col.replace(/^#/, '');
  if (col.length === 3)
    col = col[0] + col[0] + col[1] + col[1] + col[2] + col[2];

  let [r, g, b]: any = col.match(/.{2}/g);
  [r, g, b] = [
    parseInt(r, 16) + amt,
    parseInt(g, 16) + amt,
    parseInt(b, 16) + amt,
  ];

  r = Math.max(Math.min(255, r), 0).toString(16);
  g = Math.max(Math.min(255, g), 0).toString(16);
  b = Math.max(Math.min(255, b), 0).toString(16);

  const rr = (r.length < 2 ? '0' : '') + r;
  const gg = (g.length < 2 ? '0' : '') + g;
  const bb = (b.length < 2 ? '0' : '') + b;

  return `#${rr}${gg}${bb}`;
};
