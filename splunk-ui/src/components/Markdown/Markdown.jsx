import React from 'react';
import PropTypes from 'prop-types';
import ReactCommonmarkRenderer from 'commonmark-react-renderer';

import Commonmark from 'commonmark';

import { createTestHook } from 'splunk-ui/util/testSupport';
import Box from 'splunk-ui/components/Box';
import Code from 'splunk-ui/components/Code';
import Heading from 'splunk-ui/components/Heading';
import Link from 'splunk-ui/components/Link';
import List from 'splunk-ui/components/List';
import P from 'splunk-ui/components/Paragraph';

import css from './Markdown.css';

const parser = new Commonmark.Parser();

const propTypes = {
    /** @docs-ignore */
    className: PropTypes.string,
    /** The content to be parsed and rendered. */
    text: PropTypes.string.isRequired,
};

/**
 * The Markdown component renders the given markdown text as a React component.
 * The composing prefers Splunk-ui components over plain html components, for example
 * links will be rendered as Splunk-ui `Link` component instead of plain `<a>` tag.
 */
export default function Markdown(props) {
    // keep this option object inside the constructor, otherwise the renderers
    // below will confuse the doc-gen
    const rendererOptions = {
        renderers: {
            // eslint-disable-next-line react/prop-types
            CodeBlock({ literal, language }) {
                return <Code className={css.codeBlock} language={language} value={literal} />;
            },
            // eslint-disable-next-line react/prop-types
            Code({ literal }) {
                return <code className={css.codeInline}>{literal}</code>;
            },
            // eslint-disable-next-line react/prop-types
            Heading({ level, children }) {
                return <Heading level={level}>{ children }</Heading>;
            },
            // eslint-disable-next-line react/prop-types
            Link({ href, title, children }) {
                return <Link to={href} title={title}>{children}</Link>;
            },
            // eslint-disable-next-line react/prop-types
            List({ children, type }) {
                return <List type={type === 'bullet' ? 'disc' : 'decimal'}>{children}</List>;
            },
            // eslint-disable-next-line react/prop-types
            Item({ children }) {
                return <List.Item>{children}</List.Item>;
            },
            // eslint-disable-next-line react/prop-types
            Paragraph({ children }) {
                return <P>{children}</P>;
            },
        },
        escapeHtml: true,
    };

    const { className, text, ...otherProps } = props;

    const renderer = new ReactCommonmarkRenderer({
        ...rendererOptions,
    });

    const ast = parser.parse(text);
    const elements = renderer.render(ast);

    return (
        <Box
            className={className}
            {...createTestHook(__filename)}
            {...otherProps}
        >
            { elements }
        </Box>
    );
}

Markdown.propTypes = propTypes;
