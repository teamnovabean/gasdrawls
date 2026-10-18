# Gas Drawls

Landing page for the Gas Drawls shop at gasdrawls.com. It's a static site with
no build step: Cloudflare Pages (or any static host) serves `index.html` and
`assets/` as they are. Leave the build command empty and set the output
directory to `/`.

```
index.html
assets/css/gasdrawls.css
assets/js/gasdrawls.js    SHOP_URL at the top; caps cascade, clock, flashlight
assets/img/               the five supplied images
```

To preview it locally, run `python3 -m http.server` in this folder and open
http://localhost:8000.

The page is laid out like liner notes: each section is a track (A1, A2, B1,
B2, C1) built around one DOOM line or title and one image.

## Still to do
- Set `SHOP_URL` in `assets/js/gasdrawls.js` to the real store.
- The supplied images are 300 to 450px wide and look soft on large screens.
  Larger originals (1000px or more) can replace them under the same filenames.
