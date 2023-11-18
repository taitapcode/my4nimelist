<script lang="ts">
  import { cva } from 'class-variance-authority';

  export let disabled: boolean | undefined = false;

  const styledBtn = cva('mt-2 w-full rounded p-3', {
    variants: {
      variant: {
        default: 'text-white bg-blue-600',
        disabled: 'text-slate-400 bg-slate-800'
      }
    }
  });
</script>

<button class={styledBtn({ variant: disabled ? 'disabled' : 'default' })} type="submit" {disabled}>
  <slot />
</button>
