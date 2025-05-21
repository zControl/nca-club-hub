import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/(app)/_public/join')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/(public)/join"!</div>
}
