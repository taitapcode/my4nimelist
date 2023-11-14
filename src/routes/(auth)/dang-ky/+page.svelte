<script lang="ts">
  import type { PageData } from './$types';
  import { superForm } from 'sveltekit-superforms/client';
  import { selectTextOnFocus } from '$lib/actions';

  export let data: PageData;

  const { form, enhance, submitting, errors } = superForm(data.form);
</script>

<svelte:head>
  <title>My4animelist - Đăng ký</title>
</svelte:head>

<form method="POST" use:enhance>
  <h1>Đăng ký</h1>

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

  <fieldset>
    <label for="confirmPassword">Xác nhận mật khẩu</label>
    <input
      type="password"
      id="confirmPassword"
      name="confirmPassword"
      placeholder="Nhập tên mật khẩu"
      bind:value={$form.confirmPassword}
      use:selectTextOnFocus
    />
  </fieldset>

  <button type="submit">Đăng nhập</button>
  <p>Đã có tài khoản <a href="/dang-nhap" class="text-blue-500 underline">Đăng nhập</a></p>
</form>
