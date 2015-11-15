var React = require('react');
var injectTapEventPlugin = require("react-tap-event-plugin");
var Firebase = require('firebase');
var ReactFire = require('reactfire');
var LinearProgress = require('material-ui/lib/linear-progress');
var GameTable = require('./GameTable.js');
var Paper = require('material-ui/lib/paper');
var PubSub = require('pubsub-js');
var AppBar = require('material-ui/lib/app-bar');
var IconMenu = require('material-ui/lib/menus/icon-menu');
var MenuItem = require('material-ui/lib/menus/menu-item');
var IconButton = require('material-ui/lib/icon-button');
var AddDialog = require('./AddDialog.js');
var History = require('react-router').History;

injectTapEventPlugin();

module.exports = React.createClass({
	mixins: [ReactFire, History],
	firebaseRef: null,
	getInitialState: function() {
		return {
			games: [],
			addDialogOpen: false
		};
	},
	componentDidMount: function() {
		this.firebaseRef = new Firebase('https://volleyup.firebaseio.com/games');
		this.bindAsArray(this.firebaseRef, 'games');

		PubSub.subscribe('toggleSort', function() {
			// Toggle
			this.sortOrder = this.sortOrder === 0 ? 1 : 0;
			this.forceUpdate();
		}.bind(this));

		PubSub.subscribe('addGame', function(e, game) {
			if (game) {
				this.firebaseRef.push({
					date: game.date,
					in: parseInt(game.in),
					out: parseInt(game.out)
				});
			}
			this.addDialogShow(false);
		}.bind(this));

		PubSub.subscribe('deleteGame', function(e, key) {
			this.firebaseRef.child(key).remove();
		}.bind(this));
	},
	componentWillUnmount: function() {
		PubSub.unsubscribe('toggleSort');
	},
	sortOrder: 0,
	sortOrderMethods: [
		function(a, b) {
			return a.in > b.in ? -1 : 1;
		},
		function(a, b) {
			return a.in < b.in ? -1 : 1;
		}
	],
	sortedList: function() {
		if (!Array.isArray(this.state.games)) {
			return [];
		}
		var func = this.sortOrderMethods[this.sortOrder];
		return this.state.games.sort(func);
	},
	addDialogShow: function(show) {
		var state = !!show;
		this.setState({addDialogOpen: state});
	},
	onMenuClick: function(e, item) {
		switch(item.props.value) {
			case 'stats':
				this.history.pushState(null, '/stats');
				break;
			case 'add':
			default:
				this.addDialogShow(true);
				break;
		}
	},
	render: function() {
		var list = this.sortedList();
		var stComp = !this.state.games.length ?
			<LinearProgress mode="indeterminate" style={{marginTop: 50}}/> :
			<GameTable games={list}></GameTable>;

		return (
			<Paper zDepth={0} style={{padding: 24, margin: 24, maxWidth: 600, marginLeft: 'auto', marginRight: 'auto'}}>
				<AppBar zDepth={1} style={{marginBottom: 20}} title="Volley Upgrade" showMenuIconButton={false} iconElementRight={
					<IconMenu onItemTouchTap={this.onMenuClick} iconButtonElement={<IconButton iconClassName="material-icons" iconStyle={{color: "white"}}>menu</IconButton>}>
				      <MenuItem value="add" primaryText="Add..."/>
				      <MenuItem value="stats" primaryText="Stats"/>
				    </IconMenu>
				}/>
				{stComp}
				<AddDialog open={this.state.addDialogOpen}/>
			</Paper>
		);
	}
});