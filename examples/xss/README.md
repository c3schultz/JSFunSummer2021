# Cross-Site Scripting (XSS) Vulnerability Example

This is an example of code that is vulnerable to a [Cross-Site Scripting (XSS)](https://owasp.org/www-community/attacks/xss/) attack.

## Getting Started

This runs on a node server. In order to demo the vulnerability, you will need to start the server.

```
cd examples/xss/
node .
```

Open http://localhost:3000/ in a web browser like Chrome, Firefox, Safari or Edge.

To stop the server, press `ctrl + c`.

## Producing the Vulnerability

Whatever text below where it says "Enter text" will display on the page. To replicate the XSS vulnerability, enter code within `<script></script>` tags and click one of the buttons below.

Here is an example of code that code be used within a client-side XSS attack. Click on the "Client" button to replicate:

```
<img src="1" onerror="alert(document.querySelector('#password').value)">
```

Here are examples of code that will work on a server-side XSS attack. Click on the "Server" button to replicate:

```
<script>alert(document.querySelector("#password").value);</script>
```

```
<script>document.querySelector("#capture-password").addEventListener("click",()=>alert(document.querySelector('#password').value));</script>
```
