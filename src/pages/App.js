import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import tags from '../data/tags.json';
import god from '../assets/placeholder.png';
import AboutButton from './about';
import ProjectExpand from './projectExpand';

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
		  				<Paper className="text-center"> 
		  					description 
		  					<AboutButton />
		  				</Paper>
		  			</Grid>
		  		</Grid>
		  		<Grid item xs={12}>
		  			<Paper class="font-bold text-3xl px-5 py-4 rounded-lg bg-white">
		  				Projects:	
		  			</Paper>
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
	
	var outline =  "bg-gradient-to-r " +  props.project.outline + " my-5  p-4 rounded-lg"; 
	//console.log(outline);
	return (
		<Grid item xs={12} class= { outline }>
			<Paper class="px-5 py-5 bg-white rounded-lg text-xl">
				<div class=" text-left font-bold"> {props.project.title} </div>
				<div class="text-left mb-5"> {props.project.description} </div>

				<Grid container clas="" spacing={1}>
					<Grid item xs={2}>
						<div class="text-left font-bold text-xl"> Techonologies used: </div>
					</Grid>

					{props.project.tags.map(current_tag => (
						<Tag key={current_tag} tag={current_tag} />
					))}

					<Grid item xs={12}>
						<div class="float-right">
							<ProjectExpand proj={props.project.expanded} />
						</div>
					</Grid>

				</Grid>
			</Paper>
		</Grid>
	);
}

function Tag(props) {
	return (
		<Grid item xs={2} class=" px-2 my-auto" >
			<div style={{ backgroundColor: tags[props.tag] }} class="px-3 py-auto text-white rounded-full text-center"> {props.tag} </div>
		</Grid>
	);
}


export default App;
