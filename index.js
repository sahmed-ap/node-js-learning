const http = require("http");
const fs = require("fs");
const os = require("os");

const PORT = 3000;
const FILE_PATH = "./demo-file.txt";
const FILE_ROUTE = "/read-file";


const httpServer = http.createServer((req, resp) => {   
    if(req.url == FILE_ROUTE) {
        try {
            const fileData = fs.readFileSync(FILE_PATH, "utf8");
            response.write(`File Contents: ${os.EOL}`);
            response.write(fileData);
        } catch (err) {
            console.log(`Error reading file: ${READ_FILE_PATH}, ERROR: ${err}`);
        }
    } else {
        response.write(`Client Requested for route: ${request.url}`);
    }
    response.end(`${os.EOL} Request served`);
});


httpServer.listen(PORT, () => {
    console.log(`Node js server started at port ${PORT}`);
});