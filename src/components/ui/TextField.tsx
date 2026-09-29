import type { ComponentPropsWithoutRef } from "react";

type TextFieldProps = ComponentPropsWithoutRef<"input"> & {
  id: string;
  label: string;
};

export function TextField({ id, label, ...props }: TextFieldProps) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-label-sm font-medium text-shuttle-950">
        {label}
      </label>
      <input
        id={id}
        className="h-[52px] w-full rounded-field border border-shuttle-100 bg-white px-6 text-body-md text-shuttle-950 transition placeholder:text-shuttle-400 focus:border-brand focus:ring-2 focus:ring-brand/15 focus:outline-none sm:text-body-lg"
        {...props}
      />
    </div>
  );
}
