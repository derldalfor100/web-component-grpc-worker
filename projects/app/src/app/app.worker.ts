/// <reference lib="webworker" />

import { HelloRequest, HelloReply } from "../proto/services/greet_pb";
import { GreeterClient, ServiceError } from "../proto/services/greet_pb_service";

addEventListener('message', ({ data }) => {

  const client = new GreeterClient('https://localhost:5001');
  const req = new HelloRequest();
  req.setName("World!");
  client.sayHello(req, (err: ServiceError | null, response: HelloReply | null) => {
    if (err) {
    
      console.error(`Error: ${err.message}`);
      return;
    }

    postMessage(data + '; ' + response?.getMessage());
  });
  
});
