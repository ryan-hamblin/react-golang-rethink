import React, {Component} from 'react';

class ChannelForm extends Component {
    onSubmit(e){
        const node = this.refs.channel;
        const channelName = node.value;
        console.log('channel name: ', channelName);
        node.value = ''
        this.props.addChannel(channelName);
        e.preventDefault();  
    };

    render(){
        return (
            <form onSubmit={this.onSubmit.bind(this)}>
                <input type="text"
                       ref='channel'
                       value={this.state.channelName} />
            </form>
        )
    }
    ChannelForm.propTypes = {
        addChannel: React.PropTypes.func.isRequired   
    }
}

export default ChannelForm;