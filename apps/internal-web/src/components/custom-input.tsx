import React from "react";
import { Input } from "@proptech-admin/ui/components/input";
import { Label } from "@proptech-admin/ui/components/label";
import { cn } from "@/lib/utils";

interface CustomInputProps{
  label?: string;
  error?: string;
  icon?: React.ReactNode;
  className?: string;
  id?: string;
  name?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onWheel?: (e: React.WheelEvent<HTMLInputElement>) => void;
  placeholder?: string;
  value?: string;
  type?: string;
}

export default function CustomInput({
  label,
  error,
  icon,
  className,
  id,
  name,
  onChange,
  onBlur,
  placeholder,
  value,
  type,
  onKeyDown,
  onWheel,
}: CustomInputProps) {
  return (
    <div className="space-y-2">
      {label && (
        <Label
          htmlFor={id}
          className="text-foreground dark:text-slate-300"
        >
          {label}
        </Label>
      )}
      <div className="relative">
        {icon && (
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            {icon}
          </div>
        )}
        <Input
          id={id}
          className={cn(
            "h-10 rounded-lg border-input bg-background pr-4 text-foreground transition-colors focus-visible:ring-2 focus-visible:ring-ring",
            icon && "pl-10",
            className
          )}
          name={name}
          onChange={onChange}
          onBlur={onBlur}
          onKeyDown={onKeyDown}
          onWheel={onWheel}
          placeholder={placeholder}
          value={value}
          type={type}
        />
      </div>
      {error && (
        <em className="font-medium text-red-500 text-xs">
          {error}
        </em>
      )}
    </div>
  );
}