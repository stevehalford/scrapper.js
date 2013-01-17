Scrapper.js
===========

Coding? Psh, that's the easy bit!
---------------------------------

_What's difficult is *management of expectations.*_

Have you ever shown a manager a page where you've built the interface, and they've thought that you've built the whole system? They've assumed that validation, security, and all user journey are in place? Yes?

Well, _*it never need happen again!*+

With Scrapper.js, it's really clear when an element isn't complete! All you need to do is put 'class="scrapper"' on an element and it will look like a scrap of paper rather than a slick element!

Usage
-----

Include scrapper.js in your page. Clone this git repo (or download it), and add a reference to the javascript file:

    ....
        <script src="src/scrapper.js"></script>
        </body>
    </html>

Now, on your page, anything you don't feel is finished, add the class "scrapper" to!

    <div class="scrapper">
        <h1>This div isn't done yet</h1>
        <p>And, thankfully, with Scrapper.js, it doesn't look finished either!</p>
    </div>

Is it production ready?
-----------------------

Only if you're cool with Google Fonts. I need to look into whether the font I've used is cool for general use (I think it is!).

Furthermore, the lined paper background, I would like that regenerated by a graphic designer just in case that's someone's IP!

What's next?
------------

The borders on the images should appear "distressed", so they look more like ripped out bits of paper.

Getting involved
----------------

Please please *please* fork this repo and submit a PR back!

Inspiration
-----------

I don't have the book to hand, but I'm almost certain this was a recommendation from Andy Hunt and David Thomas in the must-read book [The Pragmatic Programmer](http://www.boxuk.com/blog/the-pragmatic-programmer-still-worth-reading/).

In all seriousness, Scrapper.js may well look frivolous, but I genuinely believe that it can help you to manage the expectations of your colleagues. Remember, they have a job to do as well - if they think something looks ready, they may not realise that there's still a whole heap of stuff to do! Therefore, using Scrapper.js might well help you to avoid situation where people think stuff is done that's not really ready!

A big part of Agile is "definition of done". Think carefully about what "done" means to you!