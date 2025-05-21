import { PageSections } from "@/components/common/PageSections";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Tile } from "@/components/composites/Tile";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";

function FormBasicsTile() {
  const formSchema = z.object({
    username: z.string(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "Default Username",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Tile
      title="Basic Form"
      description="A simple form with input fields and a submit button."
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" {...field} />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </Tile>
  );
}

function FormFieldTile() {
  return <div>form field tile</div>;
}

function FormGroupsTile() {
  return <div>form groups tile</div>;
}

const sections = [
  { id: "form-basic", title: "Basic items", children: <FormBasicsTile /> },
  { id: "form-inputs", title: "Input fields", children: <FormFieldTile /> },
  { id: "form-groups", title: "Groups", children: <FormGroupsTile /> },
];

export const FormsExample = () => {
  return <PageSections sections={sections} />;
};
