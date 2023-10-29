# Reboot your computer with React Server Action

https://github.com/Brooooooklyn/server-action-system-reboot/assets/3468483/ea72957f-3b23-46e7-bb63-2143d430837d

## Steps:

- corepack enable
- pnpm install
- pnpm dev
- click the `Reboot` button on the browser

## Code snippets

```tsx
import { reboot } from '@napi-rs/system-shutdown'

<form
  action={async () => {
    'use server'
    reboot()
  }}
>
  <Button>
    Reboot
  </Button>
</form>
```
