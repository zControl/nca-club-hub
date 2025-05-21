import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/(app)/_public/schedule')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/(public)/schedule"!</div>
}
