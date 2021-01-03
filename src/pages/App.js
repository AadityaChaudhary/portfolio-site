import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import tags from '../data/tags.json';
import god from '../assets/placeholder.png';

function App(props) {

  return (
	<div class="py-5 bg-gray-300">
		<Container className=" flex-grow" maxWidth="lg" >
			<Grid container spacing={3}>
				<Grid item xs={12} className="bg-gradient-to-r from-green-400 to-blue-500 mx-5 my-5 rounded-lg">
					<Paper className="text-left px-6 py-6"> 
		  				<div className="text-6xl">
		  					Aaditya Chaudhary 
		  				</div>
		  			</Paper>
		  		</Grid>
		  		<Grid container spacing={0} className="bg-gradient-to-r from-red-400 to-yellow-500 rounded-lg my-5 ">
		  			<Grid item xs={4} className="px-6 py-6">
						<img src={god} alt="me"  class="rounded-3xl " />
		  			</Grid>
		   		
		  			<Grid item xs={8} className="px-6 py-6">
		  				<Paper className="text-center"> description </Paper>
		  			</Grid>
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
