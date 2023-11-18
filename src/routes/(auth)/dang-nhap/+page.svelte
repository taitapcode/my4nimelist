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
  <title>My4animelist - Đăng nhập</title>
</svelte:head>

<Form title="Đăng nhập" {enhance}>
  <Input
    name="username"
    label="Tên đăng nhập"
    placeholder="Nhâp tên tài khoản"
    bind:value={$form.username}
    error={$errors.username && $errors.username[0]}
  />

  <Input
    name="password"
    type="password"
    label="Mật khẩu"
    placeholder="Nhập mật khẩu"
    bind:value={$form.password}
    error={$errors.password && $errors.password[0]}
  />

  <Button disabled={$submitting}>Đăng nhập</Button>
  <p>
    Chưa có tài khoản <a href="/dang-ky" class="text-blue-500 underline">Đăng ký</a>
  </p>
</Form>
