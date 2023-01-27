"use client";

import { DiscussionEmbed } from "disqus-react";

type Props = {
  url: string;
  identifier: string;
  title: string;
};

export const Disqus = ({ url, identifier, title }: Props) => {
  return (
    <div className="max-w-[85ch] mx-5 lg:mx-auto font-light">
      <DiscussionEmbed
        config={{
          url: url,
          identifier: identifier,
          title: title,
        }}
        shortname="dilipchandima"
      />
    </div>
  );
};
