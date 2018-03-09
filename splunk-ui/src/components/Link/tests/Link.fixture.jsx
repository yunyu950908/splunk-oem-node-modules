import React from 'react';
import Link from 'splunk-ui/components/Link';

export default () => (
    <div>
        <Link id="link_regular" to="https://duckduckgo.com">
            Go to DuckDuckGo
        </Link>
        <Link id="link_newtab" to="https://duckduckgo.com" openInNewContext>
            Go to DuckDuckGo in new window
        </Link>
        <Link id="link_disabled" to="https://duckduckgo.com" disabled>
            Don&#39;t go to DuckDuckGo
        </Link>
    </div>
);
