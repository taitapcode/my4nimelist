<script lang="ts">
  export let title: string, enhance: Function;
</script>

<form
  class="absolute left-1/2 top-1/2 flex w-[27rem] -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-6 rounded-md bg-slate-700/50 p-6 text-lg backdrop-blur-sm"
  method="POST"
  use:enhance
>
  <span class="font-agbalumo text-4xl font-bold">{title}</span>
  <slot />
</form>
