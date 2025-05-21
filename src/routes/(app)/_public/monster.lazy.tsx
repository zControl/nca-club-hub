import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/(app)/_public/monster')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/(public)/monster"!</div>
}
