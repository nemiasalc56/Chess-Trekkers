import React, { Component } from 'react'
import './index.css'
import  Button from '@material-ui/core/Button'
import { green, purple } from '@material-ui/core/colors'
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles'

const BootstrapButton = withStyles({
	root: {
		boxShadow: 'none',
		testTransform: 'none',
		fontSize: 16,
		padding: '6px 12px',
		border: '1px solid',
		lineHeight: 1.5,
		backgroundColor: '#FF6666',
		borderColor: '#FF6666',
		fontFamily: [
			'-apple-system',
			'BlinkMacSystemFont',
			'"Segoe UI"',
			'Roboto',
			'"Helvetica Neue"',
			'Arial',
			'sans-serif',
			'"Apple Color Emoji"',
			'"Segoe UI Emoji"',
			'"Segoe UI Symbol"'
		].join(','),
		'&:hover': {
			backgroundColor: '#0069d9',
			borderColor: '#0062cc',
			boxShadow: 'none',
		},
		'&:active': {
			boxShadow: 'none',
			backgroundColor: '#0062cc',
			borderColor: '#005cbf'
		},
		'&:focus': {
			boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
		},
	},
})(Button)

const ColorButton = withStyles((theme) => ({
	root: {
		color: theme.palette.getContrastText(purple[500]),
		backgroundColor: purple[500],
		padding: '6px 12px',
		'&:hover': {
			backgroundColor: purple[700]
		},
	},
}))(Button) 

const useStyles = makeStyles((theme) => ({
	margin: {
		margin: theme.spacing(1),
	},
}))

const theme = createMuiTheme({
	palette: {
		primary: green,
	},
})


export default function HomeComponent() {
	const classes =  useStyles()
	return(
			<div>
			<h1>
				Chess Trekkers
			</h1>
			<ColorButton variant='contained' color='primary' className={classes.margin}>
				Start Match
			</ColorButton>
			<br/>
			<ThemeProvider theme={theme}>
				<Button variant='contained' color='primary' className={classes.margin}>
					Highscores 
				</Button>
			</ThemeProvider>
			<br/>
			<BootstrapButton variant='contained' color='primary' disableRipple className={classes.margin}>
				About Us
			</BootstrapButton>

			</div>
		)
}