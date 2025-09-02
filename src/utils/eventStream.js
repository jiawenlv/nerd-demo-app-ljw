// Server-Sent Events utility for real-time communication
class EventStream {
  constructor() {
    this.clients = new Set();
  }

  // Add a new SSE client
  addClient(ctx) {
    ctx.respond = false;
    ctx.res.writeHead(200, {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Cache-Control'
    });

    const client = {
      id: Date.now(),
      res: ctx.res
    };

    this.clients.add(client);

    // Remove client when connection closes
    ctx.req.on('close', () => {
      this.clients.delete(client);
    });

    return client;
  }

  // Broadcast message to all connected clients
  broadcast(event, data) {
    const message = `event: ${event}\ndata: ${JSON.stringify(data)}\n\n`;
    
    this.clients.forEach(client => {
      try {
        client.res.write(message);
      } catch (error) {
        console.error('Error sending SSE message:', error);
        this.clients.delete(client);
      }
    });
  }

  // Send message to specific client
  sendToClient(clientId, event, data) {
    const client = Array.from(this.clients).find(c => c.id === clientId);
    if (client) {
      const message = `event: ${event}\ndata: ${JSON.stringify(data)}\n\n`;
      try {
        client.res.write(message);
      } catch (error) {
        console.error('Error sending SSE message to client:', error);
        this.clients.delete(client);
      }
    }
  }
}

export const eventStream = new EventStream();