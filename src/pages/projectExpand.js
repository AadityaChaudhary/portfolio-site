import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import Grid from '@material-ui/core/Grid';
import Youtube from 'react-youtube';

export default function ProjectExpand(props) {
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
				Expand	
			</Button>

			<Dialog onClose={handleClickClose} aria-labelledby="customized-dialog-title" open={open} fullWidth={true} maxWidth="lg">
				<Grid container spacing={0}>
					{props.proj.map(current_proj => (
						<Grid item xs={12}>
							<DispProjContent current_proj={current_proj} />
						</Grid>
					))};
				</Grid>
			</Dialog>
		</>
	);	
}

function DispProjContent(props) {

	console.log(props);	

	if( "title" in props.current_proj) {
		//title
		console.log("poop");
		return (<Title title={props.current_proj.title} />); 

	} else if( "subheading" in props.current_proj) {
		//subheading
		return (<Subheading subheading={props.current_proj.subheading} />);	

	} else if( "src" in props.current_proj && "alt" in props.current_proj) {
		//image
		return (<Image src={props.current_proj.src} alt={props.current_proj.alt}  />); 
	} else if( "desc" in props.current_proj) {
		//text
		return (<Desc desc={props.current_proj.desc} />); 
	} else if ( "link" in props.current_proj && "txt" in props.current_proj) {
		//link
		return (<LinkAndDesc link={props.current_proj.link} txt={props.current_proj.txt} />);
	} else if ("id" in props.current_proj) {
		//link
		return (<Video id={props.current_proj.id}/>);
	} else {
		console.log("reeeee");
		//return <div> monkey </div>;
		return null;
	}

}

function Title(props) {
	return (
		<div class="text-4xl font-bold px-5 py-4"> {props.title} </div>				
	);
}

function Subheading(props) {
	return (
		<div class="text-2xl font-bold px-5 py-4"> {props.subheading} </div>				
	);
}

function Desc(props) {
	return (
		<div class="text-lg px-5 py-4"> {props.desc} </div>
	);
}

function Image(props) {
	return (
		<img src={`/images/${props.src}`} alt={props.alt} className="rounded-3xl mx-auto px-24 my-6" />
	);
}

function LinkAndDesc(props) {
	return (
		<div class="text-xl px-5 py-4">
			{props.txt}:
				
			<a href={props.link} target="_blank" rel="noreferrer" class="bg-indigo-500 rounded-full px-5 mx-6 text-white"  > -> </a> 	
		</div>	
	);
}

function Video(props) {
	return (
		<Youtube videoId={props.id} className="rounded-3xl mx-auto my-6" />
	);
}
