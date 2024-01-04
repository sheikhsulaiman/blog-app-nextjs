import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Search } from "lucide-react";

const categories = ["All", "Education", "Tech", "Business"];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Hero />
      <Separator />
      <div className="container mx-auto flex w-full items-center justify-between">
        <div className="flex items-center gap-x-2">
          {categories.map((category) => (
            <Button key={category} variant={"outline"} size={"sm"}>
              {category}
            </Button>
          ))}
        </div>
        <form>
          <div className="relative flex items-center -space-x-6">
            <Search className="w-4 h-4 text-muted-foreground" />

            <Input
              className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 pl-8"
              placeholder="Search"
            />
          </div>
        </form>
      </div>
    </main>
  );
}
