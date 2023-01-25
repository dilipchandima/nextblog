import MarkDown from "~/components/Markdown";
import { readSingleMarkdownDoc } from "~/util";

export default async function Page() {
  const postData: any = await getData();

  return (
    <main>
      <MarkDown postData={postData} />
    </main>
  );
}

async function getData() {
  const postData = await readSingleMarkdownDoc("about", "about");

  return postData;
}
