import { PageContainer } from "@/components/common/page/PageContainer";
import { LoginForm } from "@/features/auth/components/LoginForm";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(auth)/login")({
  component: LoginPage,
});

function LoginPage() {
  return (
    <PageContainer title="Login" description="Login page">
      <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
        <div className="w-full max-w-sm">
          <LoginForm />
        </div>
      </div>
    </PageContainer>
  );
}
