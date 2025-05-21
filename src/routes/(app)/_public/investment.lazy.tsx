import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/(app)/_public/investment')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/(public)/investment"!</div>
}
