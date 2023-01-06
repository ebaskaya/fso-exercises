const Message = ({messageObject}) => {
    const baseStyle = {
        background: 'lightgrey',
        fontSize: 20,
        borderStyle: 'solid',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
    }
    
    
    if(messageObject === null){
        return null;
    }
    
    let messageStyle;

    if(!messageObject.isError){
        messageStyle = {...baseStyle, color: 'green'}
    }
    else {
        messageStyle = {...baseStyle, color: 'red'}
    }
    
    
    
    
    

    return (
        <div style={messageStyle}>
            {messageObject.message}
        </div>
    )
}

export default Message;

