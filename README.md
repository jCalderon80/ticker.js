#TICKER.JS
Full width animated ticker ( no jQuery needed )

04-29-2014 [jcalderon80] (http://www.iguana-web.net)

###Description

###Installation
Copy the **CSS, JS,** and **ASSETS** folder into your site's root folder.

Declare the css and javascript files in your html document **head** after all the other files.

```html
<head>
    <link rel="stylesheet" href="css/ticker-slider.css"/>
    <script src="js/ticker-slider.js"></script>
</head>
```

###Configuration
**HTML**

The following is the minimal classes and id needed for the **ticker** to work

```html
<body>
    <div><!-- Start your ticker -->
        <div class="right-speeder speeder"></div>
        <div class="left-speeder speeder"></div>
        <div class="strip-wrapper">
            <div id="ticker-strip">
                <ul id="tiker-roller">
                    <li><a>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</a></li>
                    <li><a>Aenean commodo ligula eget dolor.</a></li>
                    <li><a>Aenean massa.</a></li>
                    <li><a>Cum sociis natoque penatibus et magnis dis parturient montes.</a></li>
                    <li><a>Nascetur ridiculus mus donec que</a></li>
                </ul>
            </div>
        </div>
    </div>
</body>
```

**JAVASCRIPT**

Start the ticker with the ticker() function, it will load default settings

```javascript
ticker();
```

###Customize

**speed** _( integer: milliseconds )_, (default: 100ms)

**dir** _( direction: string )_ ( default: rtl ) values: rtl, ltr

**stop\_on\_hover** _( bool )_ ( default: true )

Example:

```javascript
ticker({
    speed : 50,
    dir : 'ltr', //ticker will run from left-to-righ
    stop_on_hover: false //won't stop on hover
});
```

```html
<body></body>
```