import React, {useEffect} from "react";
import {useCookies} from "react-cookie";
import {
    convertToGearTemplate,
    convertToServerGearTemplate,
    GearTemplate,
    ServerGearTemplate
} from "../../../domain/gearTemplate";
import {qlApiUrl} from "../../../config";
import {Item} from "../../../domain/item";
import {
    Button,
    Card,
    CardActions,
    CardContent,
    IconButton,
    List,
    ListItem,
    ListItemIcon,
    TextField,
    Typography,
    Grid
} from "@material-ui/core";
import CopyIcon from '@material-ui/icons/FileCopy';

export const SavedGearTemplates: React.FC<{
    activeGearTemplate: GearTemplate;
    setActiveGearTemplate: any;
    items: Item[];
}> = ({activeGearTemplate, setActiveGearTemplate, items}) => {
    const [cookies] = useCookies(['authToken']);
    const [gearTemplates, setGearTemplates] = React.useState<ServerGearTemplate[]>([]);
    const [newGearTemplateName, setNewGearTemplateName] = React.useState<string>('');
    const [gearTemplateId, setGearTemplateId] = React.useState<string>('');

    useEffect(() => {
        // Logic is duplicated with loadGearTemplates do to strange hook things....
        if (cookies.authToken) {
            const requestInit: RequestInit = {
                headers: {
                    'Authorization': 'Bearer ' + cookies.authToken,
                }
            };

            fetch(qlApiUrl + 'gear-templates', requestInit)
                .then(res => res.json())
                .then(gearTemplates => setGearTemplates(gearTemplates));
        }
    }, [cookies]);

    const loadGearTemplates = () => {
        if (cookies.authToken) {
            const requestInit: RequestInit = {
                headers: {
                    'Authorization': 'Bearer ' + cookies.authToken,
                }
            };

            fetch(qlApiUrl + 'gear-templates', requestInit)
                .then(res => res.json())
                .then(gearTemplates => setGearTemplates(gearTemplates));
        }
    };

    const saveGearTemplate = (name: string) => {
        const newGearTemplate = JSON.stringify(convertToServerGearTemplate(activeGearTemplate, name));
        const requestInit: RequestInit = {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + cookies.authToken,
                'Content-Type': 'application/json',
            },
            body: newGearTemplate
        };

        fetch(qlApiUrl + 'gear-templates', requestInit)
            .then(() => loadGearTemplates());
    };

    const deleteGearTemplate = (id: string | undefined) => {
        const requestInit: RequestInit = {
            method: 'DELETE',
            headers: {
                'Authorization': 'Bearer ' + cookies.authToken,
                'Content-Type': 'application/json',
            },
        };

        fetch(qlApiUrl + 'gear-templates/' + id, requestInit)
            .then(() => loadGearTemplates());
    };

    const loadGearTemplateById = (id: string, items: Item[]) => {
        fetch(qlApiUrl + `gear-templates/${id}`)
            .then(result => result.json())
            .then(gearTemplate => setActiveGearTemplate(convertToGearTemplate(gearTemplate, items)))
            .catch(err => alert('Unable to locate gear template for this id. It likely does not exist.'))
    };

    const copyToClipboard = (id: string | undefined) => {
        navigator.clipboard.writeText(id || '');
    };

    const displayGearTemplates = () => {
        return (
            <List dense={true}>
                {gearTemplates.map((gearTemplate, index) =>
                    <ListItem key={index}>
                        <Button variant="contained" style={{textTransform: 'none'}}
                                onClick={() => setActiveGearTemplate(convertToGearTemplate(gearTemplate, items))}>{gearTemplate.name}</Button>
                        <ListItemIcon>
                            <IconButton onClick={() => copyToClipboard(gearTemplate.id)}>
                                <CopyIcon/>
                            </IconButton>
                            <IconButton onClick={() => deleteGearTemplate(gearTemplate.id)}>
                                <img
                                    src={'/x-button.png'}
                                    alt={''}
                                    width={30}
                                    height={30}
                                />
                            </IconButton>
                        </ListItemIcon>
                    </ListItem>
                )}
            </List>
        )
    };

    return (
        <Card>
            <CardContent>
                {
                    cookies.authToken ?
                        (gearTemplates.length > 0) ?
                            displayGearTemplates()
                            :
                            <div>You don't have any saved gear templates.</div>
                        :
                        <div>You must login to use this feature.</div>
                }
            </CardContent>
            <CardActions>
                <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <TextField
                            id="gear-template-namer"
                            label="New gear template name"
                            error={newGearTemplateName.length > 50}
                            helperText={newGearTemplateName.length > 50 ? 'Name is too long.' : ''}
                            value={newGearTemplateName}
                            onChange={(event) => setNewGearTemplateName(event.target.value)}
                            variant="outlined"
                        />
                        <Button
                            disabled={newGearTemplateName.length < 1 || newGearTemplateName.length > 50 || gearTemplates.length > 4}
                            onClick={() => {
                                setNewGearTemplateName('');
                                saveGearTemplate(newGearTemplateName);
                            }}>Save gear template</Button>
                        {gearTemplates.length > 4 ?
                            <Typography style={{marginLeft: 10}}>Limited to 5 saved templates.</Typography> : <div/>}
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            id="gear-template-id"
                            label="Load gear template by Id"
                            value={gearTemplateId}
                            onChange={(event) => setGearTemplateId(event.target.value)}
                            variant="outlined"
                        />
                        <Button
                            disabled={gearTemplateId.length < 1}
                            onClick={() => {
                                setGearTemplateId('');
                                loadGearTemplateById(gearTemplateId, items);
                            }}>Load gear template by id</Button>
                    </Grid>
                </Grid>
            </CardActions>
        </Card>
    )

};