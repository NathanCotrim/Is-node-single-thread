<p align="center">
  <a href="" rel="noopener">
 <img src="https://www.luby.com.br/wp-content/uploads/2020/11/nodejs-luby.png" alt="Project logo"></a>
</p>

<h3 align="center">NodeJS Is Single Thread?
<div align="center">
<br>

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

## NodeJS

NodeJS is a runtime that allow us to execute Javascript out of browser, to give us this experience, it use basically V8 engine (the same we see at browsers to interpret js code) and Libuv, with exception another dependencies like http, c++ bindings and core modules!

See nodejs behavior as simple way:

<br>

<img src="https://telegra.ph/file/ed311508d749291f27132.png">

<br>
<hr>
<br>

## V8

This is what interpret our js code, V8 has 70% of his code in C++, to connect C++ and javascript function, occurs a process.binding()!

<br>
<hr>
<br>

## Threads

In resume, Thread is the task that a given program performs, Thread of execution.

<br>
<hr>
<br>

## Event Loop

Nodejs is guided by events (Event Driven).Basically, the event loop is a single-thread, non-blocking, and asynchronous concurrent loop, It verifies some points to know if it can finish the process ou go on with it, this verification contains:

- pending timers: setTimeout, setInterval...
- pending OS tasks: like server listening to port
- pending operations: like fs

The event loop is what really takes care of asynchronous code execution for the JS engines.

<br>
<hr>
<br>

## Call Stack

Whenever a function is executed it enters the stack, which only executes one thing at a time, that is, the code after the one that is running needs to wait for the current function to execute before proceeding. Call Stack is a V8 feature, not directly from js, because it, in resume, NodeJS is single-thread, but we will see another points about it.

When a function is called, it go to callStack, when finish it execution, go out.

<br>
<hr>
<br>

## Multi Threading

But NodeJS not is single thread? At true, who really is single-thread is the V8, to be possible execute async tasks NodeJS uses some APIs, some of them provided by the own OS. Who controls all this part of multiple threads, async and I/O is Libuv;

<br>
<hr>
<br>

## Libuv

Libuv is an open-source lib writing in C, actually it is used in a lot of projects, but was consolidated in nodejs. Libuv is the responsible by the thread pool, the thread pool is used to execute more then one tasks at same time, by default, some native nodejs functions are connected with libuv, like crypto, fs and others, because it, they not execute in single thread.

By default, the thread pool has 4 threads, but we can change it to more or less with the env var: UV_THREADPOOL_SIZE

<br>
<hr>
<br>

## Multi Threading 2.0

Ok, but the js code we write continue being single-thread, not? Yes, but we can utilize libuv features to turn it multi thread, it is possible by nodejs cluster.

<br>
<hr>
<br>

## Callback Queue

How we saw, some tasks are sended to be executed in another thread, allowing V8 continue working with the next functions, but, all this functions that go to another thread needs a callback, a function that executes when the main functions ends. How V8 is single-thread and only one stack is available the callbacks needs to wait your turn, and in this wait time, they stay at the Callback Queue.

<br>
<hr>
<br>

## OS Delegations

Some modules of NodeJS use the OS to execute the task, winning this way more threads to run our code, a example of these modules are HTTP and HTTPS. 

OBS: Libuv that makes this delegations.


## Author

Nathan Cotrim Lemos - MIT License