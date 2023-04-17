export function isMobileDevice() {
    const watchMatchMedia = window.matchMedia;
    if (!watchMatchMedia) return false;

    return watchMatchMedia('(pointer:coarse)').matches;
}
