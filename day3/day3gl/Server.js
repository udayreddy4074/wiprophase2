const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
    cors: {
        origin: "http://localhost:3000", // Allow frontend access
        methods: ["GET", "POST"]
    }
});

// Middleware
app.use(cors());
app.use(express.json());

// ✅ Fix: Add a root route handler
app.get('/', (req, res) => {
    res.send("Welcome to the Stock Market API!");
});

// Sample stock data
app.get('/stocks', (req, res) => {
    res.json([
        { symbol: 'AAPL', price: 150 },
        { symbol: 'GOOGL', price: 2800 },
    ]);
});

// WebSocket for real-time stock updates
io.on('connection', (socket) => {
    console.log('New client connected');

    setInterval(() => {
        socket.emit('stockUpdate', {
            symbol: 'AAPL',
            price: Math.random() * 200 + 100, // Mock price updates
        });
    }, 2000);

    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });
});

// Start server
const PORT = 5000;
server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
