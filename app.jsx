let channels = [
    {name: 'Hardware Suport', index: 1},
    {name: 'Geeks', index: 2},
    {name: 'General', index: 3},
    {name: 'Random', index: 4},
    {name: 'IT', index: 5},
    {name: 'Front End', index: 6},
];

class Channel extends React.Component {
    onClick(){
        console.log('I was clicked: ', this.props.name)
    }
    render() {
        return (
            <li onClick={this.onClick.bind(this)}>{this.props.name}</li>
        )
    }
}

class ChannelList extends React.Component {
    render() {
        return (
            <ul>
                {this.props.channels.map( channel => {
                        return (
                            <Channel name={channel.name} key={channel.index} />
                        )   
                    }
                )}
            </ul>
        )
    }
}

class ChannelForm extends React.Component {
    render(){
        return (
            <form>
                <input type="text" />
            </form>
        )
    }
}

class ChannelSection extends React.Component {
    render(){
        return (
            <div>
                <ChannelList channels={channels}/>
                <ChannelForm />
            </div>
        )
    }
}

ReactDOM.render(<ChannelSection />, 
    document.getElementById('app'));