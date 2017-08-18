import { Websocket_API } from "./generated";

const io = require("socket.io-client");
var socket = io.connect('https://ws.bitcoin.de', {port: 443});

socket.on('connect', function () {
	// Connection has successfully been established.
	// Do some initialization stuff here.c
	console.log("connected");
});

socket.on('disconnect', function () {
});

// An order has been removed from the orderbook
socket.on('remove_order', function (order: Websocket_API.add_order) {
	// Variable order contains the element order_id
	//console.log("remove", order);
});

// A new order has been added to the orderbook
socket.on('add_order', function (order: Websocket_API.add_order) {
	// Variable order contains all above listed elements (i.e. order_id, order_type)
	//console.log("add", order);
});


export function onBitcoindeOrderCreated(callback: (order: Websocket_API.add_order) => void) {
	socket.on('add_order', callback);
}