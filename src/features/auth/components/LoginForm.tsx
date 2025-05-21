import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/features/auth/hooks/useAuth";
import { type User } from "@/types/user";
import { sleep } from "@/utils/sleep";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate, useRouter } from "@tanstack/react-router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const LoginFormSchema = z.object({
  username: z.string(),
  password: z.string(),
});

export const LoginForm = () => {
  const auth = useAuth();
  const router = useRouter();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  // Create the form
  const form = useForm<z.infer<typeof LoginFormSchema>>({
    resolver: zodResolver(LoginFormSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  async function redirectToDashboard(user: User) {
    await sleep(250);

    // Determine the redirect based on the user's group
    // we can check for a user group, or redirect to a dashboard or home page based on user object
    let redirectPath = "/";
    if (user) {
      redirectPath = "/";
    } else {
      console.error("User is not authenticated");
      redirectPath = "/login";
    }
    navigate({ to: redirectPath });
  }

  // Handle form submission
  async function onSubmit(data: z.infer<typeof LoginFormSchema>) {
    setIsLoading(true);
    try {
      const user = await auth.login(data.username, data.password);
      await router.invalidate();
      await sleep(250);
      if (user) {
        await redirectToDashboard(user);
      } else {
        console.error("Login failed: No user returned");
      }
    } catch (error) {
      //TODO: Handle login error better instead of console.log
      console.error("Login failed:", error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>
          Enter your username and password to login
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-6"
          >
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              disabled={isLoading}
              variant="outline"
              type="submit"
              className="w-full"
            >
              {isLoading ? "Logging in..." : "Login"}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};
