<script lang="ts">
  import type { Action } from 'svelte/action';
  import { selectTextOnFocus } from '$lib/actions';
  import { cva, cx } from 'class-variance-authority';

  export let name: string, label: string, value: string;
  export let placeholder: string = '';
  export let error: string = '';
  export let type: 'text' | 'password' = 'text';

  const setTypeAction: Action<HTMLInputElement> = (node) => {
    node.type = type;
  };

  const styledInput = cva('rounded-md p-3', {
    variants: {
      variant: {
        default: 'bg-gray-700 text-white placeholder-gray-400',
        error: 'bg-white text-red-500 placeholder-red-500'
      }
    }
  });
</script>

<fieldset id={'field-' + name}>
  <label class={cx(error && 'text-red-500/90')} for={'input-' + name}>{label}</label>
  <input
    class={styledInput({ variant: error ? 'error' : 'default' })}
    id={'input-' + name}
    {placeholder}
    bind:value
    use:selectTextOnFocus
    use:setTypeAction
  />
</fieldset>
