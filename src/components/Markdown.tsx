import * as React from 'react';
import {useEffect} from 'react';
import ReactMarkdown, {MarkdownToJSX} from 'markdown-to-jsx';
import {Link, Typography} from "@material-ui/core";

export const Markdown: React.FC<{
    md: any;
}> = ({ md }) => {
    const [markdown, setMarkdown] = React.useState<string>('');

    useEffect(() => {
        fetch(md)
            .then((res) => res.text())
            .then((md) => {
                setMarkdown(md)
            })
    }, [md, markdown]);

    // @ts-ignore
    const options: MarkdownToJSX.Options = {
        overrides: {
            h1: {
                component: Typography,
                props: {
                    gutterBottom: true,
                    variant: 'h5',
                },
            },
            h2: { component: Typography, props: { gutterBottom: true, variant: 'h6' } },
            h3: { component: Typography, props: { gutterBottom: true, variant: 'subtitle1' } },
            h4: {
                component: Typography,
                props: { gutterBottom: true, variant: 'caption', paragraph: true },
            },
            p: { component: Typography, props: { paragraph: true } },
            a: { component: Link },
            li: {
                component: (({ classes, ...props }) => (
                    <li>
                        <Typography component="span" {...props} />
                    </li>
                )),
            },
        },
    };

    return (<ReactMarkdown children={markdown} options={options}/>)
};