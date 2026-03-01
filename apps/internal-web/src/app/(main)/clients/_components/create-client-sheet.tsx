import { Button } from "@proptech-admin/ui/components/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@proptech-admin/ui/components/sheet";
import { useForm } from "@tanstack/react-form";
import { Building2, Calendar, Mail, Phone, User } from "lucide-react";
import { type Client, createClientSchema } from "@/types/client";
import CustomInput from "@/components/custom-input";

interface CreateClientSheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onCreate: (client: Client) => void;
}

export function CreateClientSheet({
  open,
  onOpenChange,
  onCreate,
}: CreateClientSheetProps) {
  const form = useForm({
    defaultValues: {
      companyName: "",
      contactPerson: "",
      email: "",
      phoneNumber: "",
      agreementStartDate: "",
      agreementEndDate: "",
    },
    onSubmit: ({ value }) => {
      const newClient: Client = {
        ...value,
        id: crypto.randomUUID(),
        status: "Pending",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
      onCreate(newClient);
      form.reset();
      onOpenChange(false);
    },
    validators: {
      onChange: createClientSchema,
    },
  });

  return (
    <Sheet onOpenChange={onOpenChange} open={open}>
      <SheetContent className="sm:max-w-xl">
        <div className="">
          <SheetHeader className="mb-8 items-start text-left">
            <SheetTitle className="font-semibold text-2xl text-slate-900 tracking-tight dark:text-slate-50">
              Create Client
            </SheetTitle>
            <SheetDescription className="">
              Enter the details to create a new client record and send an
              activation email.
            </SheetDescription>
          </SheetHeader>

          <div className="overflow-y-auto px-4">
            <form
              className="flex flex-col gap-5 text-sm"
              onSubmit={(e) => {
                e.preventDefault();
                e.stopPropagation();
                form.handleSubmit();
              }}
            >
              <form.Field name="companyName">
                {(field) => (                
                  <CustomInput
                    label="Company Name"
                    id={field.name}
                    name={field.name}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                    placeholder="Acme Corp"
                    value={field.state.value}
                    type="text"
                    error={field.state.meta.errors ? field.state.meta.errors.map((error) => error?.message || error).join(", ") : undefined}
                    icon={<Building2 className="h-4 w-4 text-slate-400 group-focus-within:text-indigo-500" />}
                  />
                )}
              </form.Field>

              <form.Field name="contactPerson">
                {(field) => (
                  <CustomInput
                    label="Contact Person Name"
                    id={field.name}
                    name={field.name}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                    placeholder="John Doe"
                    value={field.state.value}
                    type="text"
                    error={field.state.meta.errors ? field.state.meta.errors.map((error) => error?.message || error).join(", ") : undefined}
                    icon={<User className="h-4 w-4 text-slate-400 group-focus-within:text-indigo-500" />}
                  />
                )}
              </form.Field>

              <form.Field name="email">
                {(field) => (
                  <CustomInput
                    label="Work Email"
                    id={field.name}
                    name={field.name}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                    placeholder="john@acme.com"
                    value={field.state.value}
                    type="email"
                    error={field.state.meta.errors ? field.state.meta.errors.map((error) => error?.message || error).join(", ") : undefined}
                    icon={<Mail className="h-4 w-4 text-slate-400 group-focus-within:text-indigo-500" />}
                  />
                )}
              </form.Field>

              <form.Field name="phoneNumber">
                {(field) => (
                  <CustomInput
                    label="Phone Number"
                    id={field.name}
                    name={field.name}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                    placeholder="+1 555-0199"
                    value={field.state.value}
                    type="tel"
                    error={field.state.meta.errors ? field.state.meta.errors.map((error) => error?.message || error).join(", ") : undefined}
                    icon={<Phone className="h-4 w-4 text-slate-400 group-focus-within:text-indigo-500" />}
                  />
                )}
              </form.Field>

              <div className="grid grid-cols-2 gap-4">
                <form.Field name="agreementStartDate">
                  {(field) => (
                    <CustomInput
                      label="Start Date"
                      id={field.name}
                      name={field.name}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      placeholder="Start Date"
                      value={field.state.value}
                      type="date"
                      error={field.state.meta.errors ? field.state.meta.errors.map((error) => error?.message || error).join(", ") : undefined}
                      icon={<Calendar className="h-4 w-4 text-slate-400 group-focus-within:text-indigo-500" />}
                    />
                  )}
                </form.Field>

                <form.Field name="agreementEndDate">
                  {(field) => (
                    <CustomInput
                      label="End Date"
                      id={field.name}
                      name={field.name}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      placeholder="End Date"
                      value={field.state.value}
                      type="date"
                      error={field.state.meta.errors ? field.state.meta.errors.map((error) => error?.message || error).join(", ") : undefined}
                      icon={<Calendar className="h-4 w-4 text-slate-400 group-focus-within:text-indigo-500" />}
                    />
                  )}
                </form.Field>
              </div>

              <div className="mt-8 flex justify-end gap-3 border-slate-200 border-t pt-6 dark:border-slate-800/60">
                <Button
                  className="h-10 rounded-lg border-slate-200 bg-transparent text-slate-700 hover:bg-slate-50 dark:border-slate-800/60 dark:text-slate-300 dark:hover:bg-slate-800"
                  onClick={() => onOpenChange(false)}
                  type="button"
                  variant="outline"
                >
                  Cancel
                </Button>
                <form.Subscribe>
                  {(state) => (
                    <Button
                      className="h-10 rounded-lg bg-indigo-600 px-6 font-medium text-white transition-opacity hover:bg-indigo-700 hover:opacity-90 dark:bg-indigo-600"
                      disabled={!state.canSubmit || state.isSubmitting}
                      type="submit"
                    >
                      {state.isSubmitting ? "Creating..." : "Create Client"}
                    </Button>
                  )}
                </form.Subscribe>
              </div>
            </form>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
