Base64 Encoder API

A simple Node.js application that provides an API to encode strings into Base64 format. The application follows the MVC (Model-View-Controller) architecture for better modularity and includes automated tests using Jest.

Features

    Base64 Encoding: Accepts a string as input and returns its Base64 encoded version.
    API Documentation: Provides endpoint documentation in JSON format.
    Modular Design: Built using the MVC architecture to separate concerns.
    Test Coverage: Includes unit tests for functionality using Jest.

    Installation

Prerequisites

    •	Node.js (v14 or higher)
    •	npm (Node Package Manager)

Steps

Clone the repository: git clone <repository-url>
cd func_live
Install dependencies: npm install
Start the server: node app.js ==> The server will run at: http://localhost:3000

Endpoints

1.  Base64 Encode Function

            POST /functions/base64Encode
            Description: Encodes the provided string into Base64 format.
            Request Payload: {

        "input": "Hello, world"
        }
            Response: {

    "output": "SGVsbG8sIHdvcmxk"
    }

2. Function Documentation

	GET /functions/base64Encode
	Description: Returns documentation about the Base64 Encode function.
	Response: {
  "name": "base64Encode",
  "description": "Encode anything to base64",
  "input": {
    "type": "string",
    "description": "Input the data you'd like to encode to base64",
    "example": "Hello, world"
  },
  "output": {
    "type": "string",
    "description": "Base64 encoded string",
    "example": "SGVsbG8sIHdvcmxk"
  }
}

Testing

This project uses Jest for unit testing. To run the tests: npm test