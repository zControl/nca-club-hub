import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/(app)/_public/terms')({
  component: () => <div>Hello /terms!</div>,
})
