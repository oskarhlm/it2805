# Lecture notes

## Lecture 1

### Web Main Components

- Client with Web Browser 
- Internet 
- Web Server

### Internet
- Transmission Control Protocol/Internet Protocol (TCP/IP)
    - Same for all computers
    - Allows for data exchange between computers
    - Tolerates unreliable sub-networks
    - Guarantees proper data transmission, since the phisical network can't
    - Layers
        - Application (HTTP, telnet, ftp, email, VoIP)
            - Ability to access services of other layers
            - Defines protocols for data exchange 
        - Transport (TCP, UDP)
            - Responsible for end-to-end message delivery
        - Internet/Network (IP)
             - Routing messages
             - All routers run on the IP protocol
        - Physical (Ethernet, WiFi, ATM, x.25, Frame Relay)
             - Translates message into physical representation
             - Puts messages on the wire/wireless network/fiber-optic wire
- Addressing Schemes (where to go)
    - Unique address required
    - Internet Protocol (IP) address
    - Ex.: 205.46.117.104 (each between 0 and 255)
- Domain names (human understandable)
    - DNS: The phonebook of the internet
    - Naming system
    - Associates domain names (human readable) with IP addresses
    - Between client and server
    - 1985
- Routing Traffic Across the internet (how to go)
- The World Wide Web (WWW)
    - Geneva, 1989
    - System of interconnected hypertext documents
    - A distributed hypertext system
    - Set of common communication protocols
    - Multi-platform
    - Hypertext: method of organizing information 
        - Gives the reader control over the order in which the information is presented
- HTML
    - Markup: structure
    - Publishing language of the World Wide Web
    - HTML 5 newest
    - `<body>` Everything inside is shown in browser window
    - `<head>` 
        - Information about the page
        - `<title>`, charset, etc.
    - `<title>`
        - Shown in the top of the browser
    - Attributes
        - Additional information to elements (name=value)


## Lecture 2

### HTML structure
```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Title of my webpage</title>
    </head>
    <body>
        <p>Hello there</p>
    </body>
</html>
```
- `<!DOCTYPE html>`: Document Type Definition (DTD)
- `<meta charset="utf-8">`
    - Character encoding
    - Can also have: 
        - `<meta name="description" ... >`
        - `<meta name="keywords" ... >`
        - `<meta name="author" ... >`
        - Etc.
- Tags can be one-sided or two-sided
- `<!- comment -->`: The comment tag
- HTML treats white-space as a single blank space
    - Exception: the `<pre>` tag
- Inline elements
    - Displayed without starting a new line
    - `<b>`, `<td>`, `<a>`, `<img>`, etc.
- Block elements
    - Start and ends with new line
    - Ex.: `<h1>`, `<p>`, `<ul>`, `<table>`, etc.
- Grouping tags 
    - `<span>` (inline)
    - `<div>` (block)
- Semantic Markup (logical elements)
    - `<q>`/`<blockquote>` 
    - `<abbr>`
    - `<address>`
- Lists
    - ordered `<ol>`
    - unordered `<ul>`
    - definition `<dl>`
        - `<dt>` for the term
        - `<dd>` for the definition of the term (below, not inside)
    - Can be nested
    - Styled list: `<ol style="list-style-type: upper-roman>`
- Links
    - `<a href="http://exmaple.com>`
    - When linking to page within the same site, you can use a relative URL
    - Can link to elements with id: http://www.sundance.org/#jumbotron
- Images
    - *src*: path to image 
    - *alt*: text description, for accessibility and indexing purposes
    - Specifying height/width nice so that the browser can render the rest of the page while leaving room
        - Either as attributes or CSS 
        - Measure images in pixels
- Figure captions
    ```html
    <figure>
        <img src=".." alt="..." />
        <br />
        <figcaption>
            some text
        </figcaption>
    </figure>
    ```
- JPEGs or GIFs best
- Tables
    ```html
        <table>
            <tr>
                <th scope="col">Saturay</th>
                <th scope="col">Sunday</th>
            </tr>
            <tr>
                <td>1</td>
                <td>1</td>
            </tr>
            <tr>
                <th scope="row">Total sales</th>
                <td>1</td>
                <td>1</td>
            </tr>
        </table>
    ```
    - Use colspan="2" on row to span two columns 
    - Use rowspan="2" on row to span two rows 
    - Tags for accessibility, indexing and desgn purposes: 
        - `<thead>`
        - `<tbody>`
        - `<tfoot>`
- Site maps
    - Website guide
    Should not require further user interaction
    - When to use
        - Large site
        - Large archive, isolated pages, etc.
        - New site and few external links
        - Rich media content
    - When not to use
        - Small site
        - Comprehensive linking
        - Few media files

### URLs

- Protocol
    - http://www.example.com/path/to/myfile.html?key1=value1&key2=value2…
    - http:// indicates protocol (http default)
    - www.exmaple.com is the domain name
    - /path/to/myfile.html is path to resource on server
    - ?key1=value1&key2=value2 are extra query parameters (key/value pairs separated with &)
    
