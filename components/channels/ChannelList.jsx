import React, {Component} from 'react';
class ChannelList extends Component {
    onClick(e){
        e.preventDefault();
        const {setChannel, channel} = this.props;
        setChannel(channel);
    }
    render() {
        const {channel} = this.props;
        return (
            <ul>
                {
                    this.props.channels.map( chan => {
                        <Channel 
                            channel={chan}
                            setChannel={this.props.setChannel}
                        />
                    })
                }
            </ul>
        )
    }
}

ChannelList.propTypes = {
    channels: React.PropTypes.array.isRequired,
    setChannel: React.PropTypes.func.isRequired
}

export default ChannelList;