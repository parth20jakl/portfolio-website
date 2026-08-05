"use client";

import { Button } from "@/components/ui/button";
import { GitBranch, ExternalLink } from "lucide-react";

interface Props {
  github: string;
  demo: string;
}

export default function ProjectButtons({
  github,
  demo,
}: Props) {
  return (
    <div className="mt-8 flex gap-4">

      <Button variant="outline" type="button" onClick={() => window.open(github || "#", "_blank", "noopener,noreferrer")}>
        <GitBranch className="mr-2 h-4 w-4" />
        GitHub
      </Button>

      <Button type="button" onClick={() => window.open(demo || "#", "_blank", "noopener,noreferrer")}>
        <ExternalLink className="mr-2 h-4 w-4" />
        Live Demo
      </Button>

    </div>
  );
}