import type { Action } from 'svelte/action';

const selectTextOnFocus: Action<HTMLInputElement> = (node) => {
  node.addEventListener('focus', node.select);

  return {
    destroy() {
      node.removeEventListener('focus', node.select);
    }
  };
};

export default selectTextOnFocus;
