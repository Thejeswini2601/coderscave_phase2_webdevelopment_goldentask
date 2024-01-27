function sendMessage(sender, receiver) {
    const messageInput = sender.querySelector('.message-input');
    const message = messageInput.value.trim();

    if (message !== '') {
        const senderChatMessages = sender.querySelector('.chat-messages');
        const messageElement = document.createElement('div');
        messageElement.textContent = message;

        if (sender === chatWindow1) {
            messageElement.classList.add('message', 'sender1');
        } else {
            messageElement.classList.add('message', 'sender2');
        }

        senderChatMessages.appendChild(messageElement);

        const receiverChatMessages = receiver.querySelector('.chat-messages');
        const receiverMessageElement = document.createElement('div');
        receiverMessageElement.textContent = message;

        if (sender === chatWindow1) {
            receiverMessageElement.classList.add('message', 'sender1');
        } else {
            receiverMessageElement.classList.add('message', 'sender2');
        }

        receiverChatMessages.appendChild(receiverMessageElement);

        messageInput.value = '';
        senderChatMessages.scrollTop = senderChatMessages.scrollHeight;
        receiverChatMessages.scrollTop = receiverChatMessages.scrollHeight;
    }
}
const chatWindow1 = document.getElementById('chat-window-1');
const chatWindow2 = document.getElementById('chat-window-2');

chatWindow1.querySelector('.send-button').addEventListener('click', function() {
    sendMessage(chatWindow1, chatWindow2);
});

chatWindow1.querySelector('.message-input').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        sendMessage(chatWindow1, chatWindow2);
    }
});

chatWindow2.querySelector('.send-button').addEventListener('click', function() {
    sendMessage(chatWindow2, chatWindow1);
});

chatWindow2.querySelector('.message-input').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        sendMessage(chatWindow2, chatWindow1);
    }
});