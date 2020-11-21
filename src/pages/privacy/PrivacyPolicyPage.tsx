import * as React from "react";
import Highlight from 'react-highlight.js';

export const PrivacyPolicyPage = () => (
    <>
        <h1>Privacy Policy</h1>

        <p>Your privacy is important to us. It is Questland Handbook's policy to respect your privacy regarding any
            information we may collect from you across our website, https://www.questland-handbook.com</p>

        <p>We only ask for personal information as long as necessary to provide service to you. We collect it by fair
            and lawful means, with your knowledge and consent. We also let you know why we are collecting it and how it
            will be used.</p>

        <p>We only retain collected information for as long as necessary to provide you with service and you may request
            for this data to be deleted at anytime. What data we store, we'll protect within commercially acceptable
            means to prevent loss and theft, as well as unauthorized access, disclosure, copying, use or
            modification.</p>

        <p>We don't share any personally identifying information publicly or with third-parties, except when required to
            by law.</p>

        <p>Our website may link to external sites that are not operated by us. Please be aware that we have no control
            over the content and practices of these sites, and cannot accept responsibility or liability for their
            respective privacy policies.</p>

        <p>You are free to refuse our request for your personal information, with the understanding that we may be
            unable to provide you with some of your desired services.</p>

        <p>Your continued use of our website will be regarded as acceptance of our practices around privacy and personal
            information. If you have any questions about how we handle user data and personal information, feel free to
            contact us by email at:</p>

        <p>questland-handbook-security@googlegroups.com</p>

        <p>This policy is effective as of November 21th 2020.</p>

        <h2>Data used and stored about you</h2>

        <p>The data below is all I am storing about you:</p>

        <ul>
            <li>
                Your <b>name</b>, <b>Google ID</b>, <b>email address</b> and <b>profile image</b> from your Google
                Account
            </li>
        </ul>

        <p>I leverage Google Analytics to provide metrics about site usage, but that information contains no references
            to personal information and only uses page count and accessing location provided from browsers.</p>

        <p>Here is a sample of the raw data collected:</p>

        <Highlight language="json">
            {`{
    "googleId":"103910222462334592728",
    "name":"Joe Hill",
    "email":"joehill@gmail.com",
    "profileImgUrl":"https://lh3.googleusercontent.com/a-/AOh14Gg6Cz0b4Dg"
}`}
        </Highlight>

    </>
);