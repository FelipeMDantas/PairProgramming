"use client";

import { useRouter } from "next/navigation";
import { Badge } from "./ui/badge";

export function TagsList({ tags }: { tags: string[] }) {
  const router = useRouter();
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag, index) => (
        <Badge
          className="w-fit"
          key={index}
          onClick={() => {
            router.push(`/?search=${tag}`);
          }}
        >
          {tag}
        </Badge>
      ))}
    </div>
  );
}
