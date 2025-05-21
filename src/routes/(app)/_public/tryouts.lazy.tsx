import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/(app)/_public/tryouts')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/(public)/tryouts"!</div>
}
