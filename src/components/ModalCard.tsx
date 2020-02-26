import * as React from 'react';
import { ReactElement } from 'react';
import CloseIcon from '@material-ui/icons/Close';
import {
  AppBar,
  Button,
  Card,
  CardContent,
  CardHeader,
  Dialog,
  GridListTile,
  IconButton,
  Paper,
  Slide,
  Toolbar,
  Typography
} from '@material-ui/core';
import { TransitionProps } from '@material-ui/core/transitions';

const Transition = React.forwardRef<unknown, TransitionProps>(
  function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  }
);

export interface ModalCardData {
  title: string;
  cardContent: string;
  modalContent: ReactElement;
}

export const ModalCard: React.FC<{
  modalCard: ModalCardData;
}> = ({ modalCard }) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <GridListTile key={modalCard.title} cols={1}>
      <Card>
        <CardHeader title={modalCard.title} />
        <CardContent>content</CardContent>
        <Button variant="outlined" color="primary" onClick={handleClickOpen}>
          Learn More
        </Button>
        <Dialog
          fullScreen
          open={open}
          onClose={handleClose}
          TransitionComponent={Transition}
        >
          <AppBar>
            <Toolbar>
              <IconButton
                edge="start"
                color="inherit"
                onClick={handleClose}
                aria-label="close"
              >
                <CloseIcon />
              </IconButton>
              <Typography variant="h6">{modalCard.title}</Typography>
            </Toolbar>
          </AppBar>
          <Paper>{modalCard.modalContent}</Paper>
        </Dialog>
      </Card>
    </GridListTile>
  );
};
