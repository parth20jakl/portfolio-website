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
    <div className="mt-8 flex flex-wrap gap-4">
      {github ? (
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="outline">
            <GitBranch className="mr-2 h-4 w-4" />
            GitHub
          </Button>
        </a>
      ) : (
        <Button variant="outline" disabled>
          GitHub
        </Button>
      )}

      {demo ? (
        <a
          href={demo}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button>
            <ExternalLink className="mr-2 h-4 w-4" />
            Live Demo
          </Button>
        </a>
      ) : (
        <Button disabled>
          Coming Soon
        </Button>
      )}
    </div>
  );
}