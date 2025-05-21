import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/(app)/_public/about')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/(public)/about"!</div>
}
