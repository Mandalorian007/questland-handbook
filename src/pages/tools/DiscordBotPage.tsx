import * as React from 'react';
import { Link, Paper } from '@material-ui/core';

export const DiscordBotPage = () => (
  <Paper>
    <h1>QL Bot for Discord</h1>
    <p>
      This beloved discord bot is a community favorite for printing item
      details, getting the current daily boss build, and keeping you up to date
      with the latest popular builds. It's even available for any discord server
      you would like it to run on!
    </p>
    <h3>Bot Features</h3>
    <ul>
      <li>Printing item details with support for artifact levels</li>
      <li>Printing orb details</li>
      <li>
        Giving a breakdown of the latest popular builds with alternative items
      </li>
      <li>
        Getting the current daily boss build based on SIBB's Daily Boss Guide
      </li>
    </ul>

    <h3>Add QL Bot to your server</h3>
    <Link href="https://discordapp.com/oauth2/authorize?client_id=675765765395316740&scope=bot">
      Add QL Bot to your server with this link
    </Link>
  </Paper>
);
