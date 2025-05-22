import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Header4 } from "@/components/ui/typography";

const FormSchema = z.object({
  name: z.string().min(2, {
    message: "Enter the parents first and last name",
  }),
  email: z.string().email({
    message: "Enter a valid email address",
  }),
});

export function MailingListSignupForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "Parents name",
      email: "email@domain.com",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
  }

  return (
    <Card className="px-4 py-2 border-8 border-ncaSecondary flex flex-col space-y-4 justify-around">
      <Header4>Signup to recieve club updates</Header4>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full space-y-4"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Parents first and last name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Email address" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex flex-col justify-around">
            <h3>TODO: ADD CAPTCHA HERE</h3>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </div>
        </form>
      </Form>
    </Card>
  );
}
