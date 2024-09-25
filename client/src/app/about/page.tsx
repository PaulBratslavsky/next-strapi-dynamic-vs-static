import { getAboutPage } from "@/data/loaders";
import { notFound } from 'next/navigation';

import { BlocksRendererDynamic } from "@/lib/blocks-renderer-dynamic";

async function loader() {
  const { data} = await getAboutPage();
  const blocks = data?.blocks;
  return { blocks };
}

export default async function AboutRoute() {
  const { blocks } = await loader();
  if (!blocks) notFound();


  return <div>
    <h1>About Route</h1>
    <pre>{JSON.stringify(blocks, null, 2)}</pre>
    <BlocksRendererDynamic blocks={blocks} />
  </div>
}