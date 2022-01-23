export type Feature = () => void
export const createFeature = (regex: string | RegExp, fn: Feature): Feature =>
  document.location.href.match(regex) ? fn : () => {}
