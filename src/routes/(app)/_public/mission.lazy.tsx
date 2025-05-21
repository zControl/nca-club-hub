import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/(app)/_public/mission')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/(public)/mission"!</div>
}
