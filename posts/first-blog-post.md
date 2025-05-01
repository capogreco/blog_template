---
title: This is a blog post!
published_at: 2022-11-04
snippet: An example of a blog post.
disable_html_sanitization: true
allow_math: true
---

# This is h1

![a drippy lemon](logo.svg)

^ images are written like this: `![description](file_path/file_name.png)`

## This is h2

*This is italic.*[^1]

[^1]: This is a footnote, *which can also be italic*.

**This is bold.**

Hyperlinks can be written like this: `[text](https://URL)`

You can find a markdown cheat-sheet [here](https://www.markdownguide.org/cheat-sheet/).

## Codeblocks

Like this:

```js
function setup () {
    createCanvas (640, 360)
}

const draw = () => {
    background (`turquoise`)
    // etc.
}
```
... can be written like this:


````markdown
```js
function setup () {
    createCanvas (640, 360)
}

const draw = () => {
    background (`turquoise`)
    // etc.
}
```
````

The `js` at the top ^ gives the codeblock javascript syntax highlighting.  Replace it with `html` for HTML syntax highlighting, etc.


## Maths
... which can be written inline, like this: $\{ x, y, z \} \in \N$

... or block, like this:

$$ x^2 + y^2 = z^2 $$

Visit [ $\KaTeX$ ](https://katex.org/docs/supported#fractions-and-binomials) for more information about writing maths.

## Embedded video

<iframe id="coding_train_video" src="https://www.youtube.com/embed/rI_y2GAlQFM?si=RDgjkpunxk1mQzMI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<script type="module">

    console.log (`hello world! 🚀`)

    const iframe  = document.getElementById (`coding_train_video`)
    iframe.width  = iframe.parentNode.scrollWidth
    iframe.height = iframe.width * 9 / 16

</script>

## Embedded p5 online editor sketch

<iframe id="falling_falling" src="https://editor.p5js.org/capogreco/full/Fkg05m7aA"></iframe>

<script type="module">

    const iframe  = document.getElementById (`falling_falling`)
    iframe.width  = iframe.parentNode.scrollWidth
    iframe.height = iframe.width * 9 / 16 + 42

</script>

## Canvas API

<canvas id="canvas_example"></canvas>

<script type="module">
    const cnv = document.getElementById (`canvas_example`)
    cnv.width = cnv.parentNode.scrollWidth
    cnv.height = cnv.width * 9 / 16

    const ctx = cnv.getContext (`2d`)
    const pos = {
        x: -100,
        y: cnv.height / 2 - 50
    }
    
    function draw_frame () {
        ctx.fillStyle = `turquoise`
        ctx.fillRect (0, 0, cnv.width, cnv.height)

        ctx.fillStyle = `deeppink`
        ctx.fillRect (pos.x, pos.y, 100, 100)

        pos.x += 2

        if (pos.x > cnv.width) {
            pos.x = -100
        }

        requestAnimationFrame (draw_frame)
    }

    draw_frame ()
</script>

## Canvas API + p5.js

<script src="./scripts/p5.js"></script>
<canvas id="p5_example"></canvas>

<script>
    const cnv = document.getElementById ("p5_example")
    const w = cnv.parentNode.scrollWidth
    const h = w * 9 / 16

    function setup () {
        createCanvas (w, h, P2D, cnv)
        noStroke ()
    }

    const pos = {
        x: -100,
        y: h / 2 - 50
    }

    function draw () {
        background (`turquoise`)

        fill (`deeppink`)
        square (pos.x, pos.y, 100)

        pos.x += 2

        if (pos.x > w) {
            pos.x = -100
        }
    }
</script>