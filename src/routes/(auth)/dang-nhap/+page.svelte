<script lang="ts">
  import type { PageData } from './$types';
  import { superForm } from 'sveltekit-superforms/client';
  import { selectTextOnFocus } from '$lib/actions';

  export let data: PageData;

  const { form, enhance, submitting, errors } = superForm(data.form);
</script>

<svelte:head>
  <title>My4animelist - Đăng nhập</title>
</svelte:head>

<form method="POST" use:enhance>
  <h1>Đăng nhập</h1>

  <fieldset>
    <label for="username">Tên tài khoản</label>
    <input
      type="text"
      id="username"
      name="username"
      placeholder="Nhập tên tài khoản"
      bind:value={$form.username}
      use:selectTextOnFocus
    />
  </fieldset>

  <fieldset>
    <label for="password">Mật khẩu</label>
    <input
      type="password"
      id="password"
      name="password"
      placeholder="Nhập tên mật khẩu"
      bind:value={$form.password}
      use:selectTextOnFocus
    />
  </fieldset>

  <button type="submit">Đăng nhập</button>
  <p>Chưa có tài khoản <a href="/dang-ky" class="text-blue-500 underline">Đăng ký</a></p>
</form>
