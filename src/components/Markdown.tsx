import * as React from 'react';
import {useEffect} from 'react';
import ReactMarkdown from 'markdown-to-jsx';

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

    return (<ReactMarkdown children={markdown}/>)
};