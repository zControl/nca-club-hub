import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(test)/_test/test_')({
  component: () => <div>Hello /test!</div>,
})
