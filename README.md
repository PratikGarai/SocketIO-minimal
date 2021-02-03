# SocketIO-minimal

Just as the name states, a minimal example of socketIO in action, will add more variations later.

The First example (backend : server.js; frontend : fe.html) does the following :
<ol>
<li>The server serves an html file and sets up a socket connection with it.</li>
<li>The html file has a form. Upon submission, it send the value the input field over the socket through the topic "message".</li>
<li>On receiving the event, the server logs the text and sends it back to the html page too.</li>
<li>The html page displays the message that was sent back.</li>
</ol>
