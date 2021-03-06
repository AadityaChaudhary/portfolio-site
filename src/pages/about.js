import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

export default function AboutButton() {
	const [open, setOpen] = React.useState(false);	

	const handleClickOpen = () => {
		setOpen(true);
	}
	
	const handleClickClose = () => {
		setOpen(false);
	}

	return (
		<>
			<Button variant="contained" color="primary" onClick={handleClickOpen}>
				about me
			</Button>
			<Dialog onClose={handleClickClose} aria-labelledby="customized-dialog-title" open={open} fullWidth={true} maxWidth="md">
				<Grid container spacing>
					<Grid item xs={12} className="px-6 py-6 text-3xl">
						About Me
					</Grid>
					
					<Grid item xs={4} className="text-center px-6">
						description		
					</Grid>
					
					<Grid item xs={4}className="text-center px-6">
						interests			
					</Grid>

					<Grid item xs={4}className="text-center px-6">
						passtimes	
					</Grid>

				</Grid>
			</Dialog>
		</>
	);	
}
