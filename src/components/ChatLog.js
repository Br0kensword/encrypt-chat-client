import React from 'react';
import * as uuid from 'uuid/v4';

const ChatLog = ({log}) => {
	if (log.length <= 0){
		return <li> Start a conversation</li>;
	}

	const logs = log.map((msg) => { return(<ul key={uuid()}> {msg} </ul>) } );

	return (
		<div>
			{logs}
		</div>
	);
};

export default ChatLog;