import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(app)/_public/public/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/(app)/_public/public/"!</div>
}
