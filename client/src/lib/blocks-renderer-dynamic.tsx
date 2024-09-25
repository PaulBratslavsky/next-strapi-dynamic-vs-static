import React from "react";
import dynamic from "next/dynamic";

interface BlocksComponent {
  __component: string;
  id: number;
  [key: string]: any;
}

interface Props {
  blocks: BlocksComponent[];
}

const componentMapping: { [key: string]: any } = {
  "shared.hero": dynamic(
    () => import("@/components/blocks/hero").then((mod) => mod.Hero),
    { ssr: false }
  ),
  "shared.media": dynamic(
    () => import("@/components/blocks/media").then((mod) => mod.Media),
    { ssr: false }
  ),
  "shared.quote": dynamic(
    () => import("@/components/blocks/quote").then((mod) => mod.Quote),
    { ssr: false }
  ),
};

export function BlocksRendererDynamic({ blocks }: Readonly<Props>) {
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
