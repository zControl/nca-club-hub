import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/(app)/_public/rebelrec/faq')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/(public)/rebelrec/faq"!</div>
}
