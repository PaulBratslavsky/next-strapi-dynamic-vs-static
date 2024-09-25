import React from "react";

import { Hero } from "@/components/blocks/hero";
import { Quote } from "@/components/blocks/quote";
import { Media } from "@/components/blocks/media";

interface BlocksComponent {
  __component: string;
  id: number;
  [key: string]: any;
}

interface Props {
  blocks: BlocksComponent[];
}

const componentMapping: { [key: string]: React.ComponentType<any> } = {
  "shared.hero": Hero,
  "shared.quote": Quote,
  "shared.media": Media,
};

export function BlockRendererStatic({ blocks }: Readonly<Props>) {
  return (
    <div>
      {blocks.map((blockData) => {
        const Component = componentMapping[blockData.__component];
        if (!Component) {
          console.warn(`No component found for: ${blockData.__component}`);
          return null;
        }
        return <Component key={blockData.id} {...blockData} />;
      })}
    </div>
  );
}
