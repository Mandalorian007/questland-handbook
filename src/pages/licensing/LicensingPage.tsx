import * as React from 'react';
import {Markdown} from "../../components/Markdown";
import licensing from './licensing.md';

export const LicensingPage = () => (
    <Markdown md={licensing}/>
);
