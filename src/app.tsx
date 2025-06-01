import { AuthProvider } from "@/features/auth/AuthProvider";
import { useAuth } from "@/features/auth/hooks/useAuth";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { createRouter, RouterProvider } from "@tanstack/react-router";
import { ThemeProvider } from "./components/common/theme/ThemeProvider";
import { routeTree } from "./routeTree.gen";

const queryClient = new QueryClient();

// Setup a router instance
const router = createRouter({
  routeTree,
  basepath: process.env.NODE_ENV === "production" ? "/nca-club-hub/" : "/",
  context: {
    queryClient,
    auth: undefined!,
  },
  defaultPreload: "intent",
  defaultPreloadStaleTime: 0,
});

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

// Create the router provider
function AppRouter() {
  const auth = useAuth();
  return <RouterProvider router={router} context={{ auth }} />;
}
export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <ThemeProvider defaultTheme="dark">
          <AppRouter />
          <ReactQueryDevtools />
        </ThemeProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}
