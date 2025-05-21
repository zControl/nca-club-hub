import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/(app)/_public/resources')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/(public)/resources"!</div>
}
