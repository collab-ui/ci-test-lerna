const url = `https://raw.githubusercontent.com/momentum-design/momentum-design-kit/master/MacOS/Momentum%20UI%20MacOS.sketch`;

const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:sparkle="http://www.andymatuschak.org/xml-namespaces/sparkle">
  <channel>
    <title>${name}</title>
    <description>Momentum Design System MacOS ui sketch kit</description>
    <image>
      <url></url>
      <title>${name}</title>
    </image>
    <generator>Momentum Design</generator>
    <item>
      <title>${name}</title>
      <pubDate>${publishDate}</pubDate>
      <enclosure url="${url}" type="application/octet-stream" sparkle:version="${version}"/>
    </item>
  </channel>
</rss>
`;