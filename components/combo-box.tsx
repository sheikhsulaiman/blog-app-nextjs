"use client";

import * as React from "react";
import { ChevronsUpDownIcon, CheckIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Command, CommandGroup, CommandItem } from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useRouter, useSearchParams } from "next/navigation";

export function Combobox({ categories }: { categories: string[] }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const selectedCategory = categories.includes(
    searchParams.get("category") as string
  )
    ? searchParams.get("category")
    : categories[0];

  const [open, setOpen] = React.useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between capitalize"
        >
          {selectedCategory}
          <ChevronsUpDownIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandGroup>
            {categories.map((category, index) => (
              <CommandItem
                key={index}
                value={category}
                onSelect={(currentselectedCategory) => {
                  router.replace(`/?category=${currentselectedCategory}`);
                  setOpen(false);
                }}
                className="capitalize"
              >
                {category}
                <CheckIcon
                  className={cn(
                    "ml-auto h-4 w-4",
                    selectedCategory === category ? "opacity-100" : "opacity-0"
                  )}
                />
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
