import * as React from 'react';
import {Avatar, Button, Grid, Paper, Typography} from '@material-ui/core';
import ReactPlayer from "react-player";
import {DiscordBotFeature} from "./DiscordBotFeature";

export const DiscordBotPage = () => (
    <Paper>
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Grid container direction="column" justify="center" alignItems="center" spacing={4}>
                    <Grid>
                        <Avatar alt='' src="/discordbot_avatar_weasel.png" style={{height: 200, width: 200}}/>
                    </Grid>
                    <Grid>
                        <Typography align='center' variant='h1'>QL Discord Bot</Typography>
                    </Grid>
                    <Grid>
                        <Typography align='center' variant='h5'>QL Bot is a Discord Bot designed to help you and your
                            friends enjoy Questland.</Typography>
                    </Grid>
                    {/*<Grid>
                        <ReactPlayer url={'https://youtu.be/9fRcxFtwOgQ'}/>
                    </Grid>*/}
                    <DiscordBotFeature
                        title='Daily Boss build lookup'
                        description='Never get stuck not knowing the best daily boss build for the day so you can snag those rewards!'
                        image='/ql_bot_daily_boss.PNG'
                        textFirst={true}/>
                    <DiscordBotFeature
                        title='Popular build cheat sheets'
                        description="Can't remember the perfect build for the occasion? Don't worry we got you covered with all the popular builds always available with alternate weapons included!"
                        image='/ql_bot_popular_build.PNG'
                        textFirst={false}/>
                    <DiscordBotFeature
                        title='Looking to dominate the Monster Slayer?'
                        description="The bot can give you the points for all the top levels you need to get that competitive advantage!"
                        image='/ql_bot_monster_slayer.PNG'
                        textFirst={true}/>
                    <Grid>
                        <Typography align='center' variant='h3'>Connect QL Bot to your server!</Typography>
                        <Typography align='center' variant='subtitle1'>You can invite QL Bot to your server here! Just
                            select your server in the dropdown menu,
                            and ensure that "Read Messages", "Send Messages", "Embed Links", and "Attach Files" are
                            enabled!</Typography>
                    </Grid>
                    <Grid>
                        <Button color='primary' variant='contained'
                                href='https://discordapp.com/oauth2/authorize?client_id=675765765395316740&scope=bot'>
                            Connect QL Bot
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </Paper>
);
