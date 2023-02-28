import { readSingleMarkdownDoc } from "@/components/library/utils";
import MarkDown from "@/components/ui/Markdown";

export default async function Page() {
  const postData: any = await getData();

  return (
    <main>
      <MarkDown postData={postData} isNotBlog />
    </main>
  );
}

async function getData() {
  const postData = await readSingleMarkdownDoc("about", "about");

  return postData;
}
