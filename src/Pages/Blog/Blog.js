import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className='border border-dark mt-5 p-2'>
                <h3>4.1: What is cors?</h3>
                <div>Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.
                    <br />
                    The Cross-Origin Resource Sharing standard works by adding new HTTP headers that let servers describe which origins are permitted to read that information from a web browser. Additionally, for HTTP request methods that can cause side-effects on server data , the specification mandates that browsers "preflight" the request, soliciting supported methods from the server with the HTTP OPTIONS request method, and then, upon "approval" from the server, sending the actual request. Servers can also inform clients whether "credentials" (such as Cookies and HTTP Authentication) should be sent with requests.
                </div>

            </div>
            <div className='border border-dark mt-5 p-2'>
                <h3>4.2: Why are you using firebase? What other options do you have to implement authentication?</h3>
                <div>
                    Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.
                    You can use Firebase Authentication to allow users to sign in to your app using one or more sign-in methods, including email address and password sign-in, and federated identity providers such as Google Sign-in and Facebook Login. This tutorial gets you started with Firebase Authentication by showing you how to add email address and password sign-in to your app.
                </div>
            </div>
            <div className='border border-dark mt-5 p-2'>
                <h3>4.3: How does the private route work?</h3>
                <div>
                    Public routes are Log in, SignUp, Forgot Password, Reset Password. In simple words, These routes can be accessed before login into the App. Private Routes vary based on the Apps, For example, Dashboard, User Profile, App Settings, Home etc. In simple words, These routes can be accessed only after login.

                    The constraints for Public and Private routes are that Public routes should not be accessed after login and Private routes should not be accessible before login.
                    The private route component is similar to the public route, the only change is that redirect URL and authenticate condition.

                    If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).
                </div>
            </div>
            <div className='border border-dark mt-5 p-2 mb-5'>
                <h3>4.4: What is Node? How does Node work?</h3>
                <div>
                    Node.js is a lean, fast, cross-platform JavaScript runtime environment that is useful for both servers and desktop applications. Node.js takes a different approach. It runs a single-threaded event loop registered with the system to handle connections, and each new connection causes a JavaScript callback function to fire. The callback function can handle requests with non-blocking I/O calls, and if necessary can spawn threads from a pool to execute blocking or CPU-intensive operations and to load-balance across CPU cores. Node’s approach to scaling with callback functions requires less memory to handle more connections than most competitive architectures that scale with threads, including Apache HTTP Server, the various Java application servers, IIS and ASP.NET, and Ruby on Rails.
                    Node.js turns out to be quite useful for desktop applications in addition to servers. Also note that Node applications aren’t limited to pure JavaScript. You can use any language that transpiles to JavaScript, for example TypeScript and CoffeeScript. Node.js incorporates the Google Chrome V8 JavaScript engine, which supports ECMAScript 2015 (ES6) syntax without any need for an ES6-to-ES5 transpiler such as Babel.
                </div>
            </div>
        </div>
    );
};

export default Blog;