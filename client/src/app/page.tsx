import { getHomePage } from "@/data/loaders";
import { notFound } from 'next/navigation';

import { BlockRendererStatic } from "@/lib/blocks-renderer-static";

async function loader() {
  const { data} = await getHomePage();
  const blocks = data?.blocks;
  return { blocks };
}

export default async function HomeRoute() {
  const { blocks } = await loader();
  if (!blocks) notFound();


  return <div>
    <h1>Home Route</h1>
    <pre>{JSON.stringify(blocks, null, 2)}</pre>
    <BlockRendererStatic blocks={blocks} />
  </div>
}
