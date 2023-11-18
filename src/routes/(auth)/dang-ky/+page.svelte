<script lang="ts">
  import type { PageData } from './$types';
  import { superForm } from 'sveltekit-superforms/client';
  import Form from '../components/Form.svelte';
  import Input from '../components/Input.svelte';
  import Button from '../components/Button.svelte';

  export let data: PageData;

  const { form, enhance, submitting, errors } = superForm(data.form, {
    dataType: 'json'
  });
</script>

<svelte:head>
  <title>My4animelist - Đăng ký</title>
</svelte:head>

<Form title="Đăng ký" {enhance}>
  <Input
    label="Tên tài khoản"
    type="text"
    name="username"
    placeholder="Nhập tên tài khoản"
    bind:value={$form.username}
    error={$errors.username && $errors.username[0]}
  />

  <Input
    label="Mật khẩu"
    type="password"
    name="password"
    placeholder="Nhập tên mật khẩu"
    bind:value={$form.password}
    error={$errors.password && $errors.password[0]}
  />

  <Input
    label="Xác nhận mật khẩu"
    type="password"
    name="confirmPassword"
    placeholder="Nhập tên mật khẩu"
    bind:value={$form.confirmPassword}
    error={$errors.confirmPassword && $errors.confirmPassword[0]}
  />

  <Button disabled={$submitting}>Đăng ký</Button>
  <p>
    Đã có tài khoản <a href="/dang-nhap" class="text-blue-500 underline">Đăng nhập</a>
  </p>
</Form>
