Physical Web Candy Dispenser
==========
Node.js hosts a simple webpage that has one button. This button calls a function on a Particle Core to dispense candy.

In the deployment, bluz would also be broadcasting the URL through a physical web beacon, allowing anyone to talk to the candy machine just by walking up to it.

Code is not fully tested. Code is not production quality. It is just an example for a demo project

##To run:
1. Clone the repository
2. Create a file called access_token.txt and add your Particle access token to it
3. Run
```sh
$ node server.js
```
4. Open localhost:8080 in your browser
5. Hit the button, and get some candy!

