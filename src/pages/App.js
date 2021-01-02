import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import projects from '../data/projects.json';
import tags from '../data/tags.json';
import god from '../assets/placeholder.png';

function App(props) {

  return (
	<div class="my-5 bg-black">
		<Container className=" flex-grow" maxWidth="lg" >
			<Grid container spacing={3}>
				<Grid item xs={12}>
					<Paper className="text-center"> This is a test </Paper>
		  		</Grid>
				
		  		<Grid item xs={5}>
		  {/*	<Paper className="text-center"> image  </Paper>*/ }
					<img src={god} class="rounded-3xl" />
		  		</Grid>
		   	
		  		<Grid item xs={7}>
		  			<Paper className="text-center"> description </Paper>
		  		</Grid>
			</Grid>
	
			{props.projects.map(current_project => (
				<Project project={current_project} key={current_project.title} />
			))}
		  	
		</Container>
	</div>
  );
}

function Project(props) {
	return (
		<Paper class="my-5 bg-white rounded-lg">
			<div class="roboto text-left"> {props.project.title} </div>
			<div class="roboto text-center"> {props.project.description} </div>
			<Grid container spacing={3}>
				<Grid item xs={1}>
					<div class="roboto text-center"> Tags: </div>
				</Grid>
				{props.project.tags.map(current_tag => (
					<Tag key={current_tag} tag={current_tag} />
				))}
			</Grid>
		</Paper>
	);
}

function Tag(props) {
	return (
		<Grid item xs={1}>
			<div style={{ backgroundColor: tags[props.tag] }} class="rounded-full text-center"> {props.tag} </div>
		</Grid>
	);
}


export default App;
