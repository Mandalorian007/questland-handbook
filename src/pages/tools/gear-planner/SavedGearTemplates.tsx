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
    TextField, Typography
} from "@material-ui/core";

export const SavedGearTemplates: React.FC<{
    activeGearTemplate: GearTemplate;
    setActiveGearTemplate: any;
    items: Item[];
}> = ({activeGearTemplate, setActiveGearTemplate, items}) => {
    const [cookies] = useCookies(['authToken']);
    const [gearTemplates, setGearTemplates] = React.useState<ServerGearTemplate[]>([]);
    const [newGearTemplateName, setNewGearTemplateName] = React.useState<string>('');

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

    const displayGearTemplates = () => {
        return (
            <List dense={true}>
                {gearTemplates.map((gearTemplate, index) =>
                    <ListItem key={index}>
                        <Button variant="contained" style={{textTransform: 'none'}}
                                onClick={() => setActiveGearTemplate(convertToGearTemplate(gearTemplate, items))}>{gearTemplate.name}</Button>
                        <ListItemIcon>
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
            </CardActions>
            {gearTemplates.length > 4 ? <Typography style={{marginLeft: 10}}>Limited to 5 saved templates.</Typography> : <div/>}
        </Card>
    )

};