import * as React from 'react';
import {Paper} from '@material-ui/core';
import ReactPlayer from "react-player";
import {Markdown} from "../../components/Markdown";
import reforging from './reforging.md';

export const ReforgingPage = () => (
    <Paper>
        <h1>Reforging</h1>
        <ReactPlayer url={'https://youtu.be/X6mw_F6u-4E'}/>
        <Markdown md={reforging}/>
    </Paper>
);
