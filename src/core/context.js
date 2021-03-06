export const Context = {
  // @param src
  loadComponent() {
    throw new Error('loadComponent should must be overrided');
  },
  // @param src
  // @param text
  compileComponent() {
    throw new Error('compileComponent should must be overrided');
  },
  useComponent(src, text) {
    return text ? Context.compileComponent(src, text) : Context.loadComponent(src);
  },
};
