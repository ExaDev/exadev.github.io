<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="3.0"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:atom="http://www.w3.org/2005/Atom"
    xmlns:dc="http://purl.org/dc/elements/1.1/"
    xmlns:itunes="http://www.itunes.com/dtds/podcast-1.0.dtd"
>
    <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes" />
    <xsl:template match="/">
        <html xmlns="http://www.w3.org/1999/xhtml" lang="en" dir="ltr">
            <head>
                <title><xsl:value-of
                        select="/rss/channel/title" /> RSS Feed</title>
                <meta charset="UTF-8" />
                <meta http-equiv="x-ua-compatible" content="IE=edge,chrome=1" />
                <meta http-equiv="content-language" content="en_US" />
                <meta name="viewport"
                    content="width=device-width,minimum-scale=1,initial-scale=1,shrink-to-fit=no" />
                <meta name="referrer" content="none" />
                <link rel="icon" href="favicon.ico" type="image/x-icon" />
                <style type="text/css">
                    body {
                    background-color: #121212;
                    color: #e0e0e0;
                    font-family: "Segoe UI", apple-system, BlinkMacSystemFont, Futura, Roboto,
                    Arial, system-ui, sans-serif;
                    margin: 0;
                    padding: 0;
                    }
                    .container {
                    display: flex;
                    justify-content: center;
                    padding: 20px;
                    }
                    .item {
                    max-width: 768px;
                    width: 100%;
                    }
                    a {
                    color: #bb86fc;
                    text-decoration: none;
                    }
                    a:visited {
                    color: #3700b3;
                    }
                    a:hover {
                    text-decoration: underline;
                    }
                    header, main {
                    padding: 20px;
                    background-color: #1f1f1f;
                    border-radius: 8px;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
                    margin-bottom: 20px;
                    }
                    header h1, header h2 {
                    margin: 0;
                    padding-bottom: 10px;
                    }
                    header p {
                    margin: 0 0 20px;
                    }
                    article {
                    margin-bottom: 20px;
                    padding: 15px;
                    background-color: #2c2c2c;
                    border-radius: 8px;
                    }
                    article h3 {
                    margin: 0 0 10px;
                    }
                    article footer {
                    font-size: 0.9em;
                    color: #a0a0a0;
                    }
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="item">
                        <header>
                            <h1>RSS Feed</h1>
                            <h2>
                                <xsl:value-of select="/rss/channel/title" />
                            </h2>
                            <p>
                                <xsl:value-of select="/rss/channel/description" />
                            </p>
                            <a hreflang="en" target="_blank">
                                <xsl:attribute name="href">
                                    <xsl:value-of select="/rss/channel/link" />
                                </xsl:attribute>
    Visit Website &#x2192; </a>
                        </header>
                        <main>
                            <h2>Recent Posts</h2>
                            <xsl:for-each select="/rss/channel/item">
                                <article>
                                    <h3>
                                        <a hreflang="en" target="_blank">
                                            <xsl:attribute name="href">
                                                <xsl:value-of select="link" />
                                            </xsl:attribute>
                                            <xsl:value-of select="title" />
                                        </a>
                                    </h3>
                                    <footer> Published: <time>
                                            <xsl:value-of select="pubDate" />
                                        </time>
                                    </footer>
                                </article>
                            </xsl:for-each>
                        </main>
                    </div>
                </div>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>
