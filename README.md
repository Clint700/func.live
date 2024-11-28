DNS Lookup API

A simple Node.js application that provides an API to resolve DNS records for a given domain. The application follows the MVC (Model-View-Controller) architecture for better modularity and includes automated tests using Jest.

Features

    •	DNS Lookup: Accepts a domain name and resolves its DNS records (IP address and family type).
    •	API Documentation: Provides endpoint documentation in JSON format.
    •	Modular Design: Built using the MVC architecture to separate concerns.
    •	Test Coverage: Includes unit tests for functionality using Jest.

    Installation

Prerequisites

    •	Node.js (v14 or higher)
    •	npm (Node Package Manager)

Steps

Clone the repository: git clone <https://github.com/Clint700/func.live.git>
cd func_live
Install dependencies: npm install
Start the server: node app.js ==> The server will run at: http://localhost:3000

Endpoints

1.  Endpoints

1.  DNS Lookup Function

            • POST /functions/dnsLookup
            • Description: Resolves the DNS records for a given domain.
            Request Payload: {

        "domain": "example.com"
        }
        Response: {

    "domain": "example.com",
    "address": "93.184.216.34",
    "family": 4
    }

2.Function Documentation

    •	GET /functions/dnsLookup
    •	Description: Returns documentation about the DNS Lookup function.
        Response:{

"name": "dnsLookup",
"description": "Resolve DNS records for a given domain",
"input": {
"type": "string",
"description": "The domain you want to resolve",
"example": "example.com"
},
"output": {
"type": "object",
"description": "The resolved DNS information",
"example": {
"domain": "example.com",
"address": "93.184.216.34",
"family": 4
}
}
}

Testing

This project uses Jest for unit testing. To run the tests: npm test

Render url: <https://func-live.onrender.com>
