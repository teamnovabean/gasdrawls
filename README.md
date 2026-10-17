# Gas Drawls: GOD MODE

The landing page for the Gas Drawls shop at gasdrawls.com: a comic-book tribute
to DOOM. It's a static site with no build step, so Cloudflare Pages (or any
static host) can serve `index.html` and `assets/` as they are. Leave the build
command empty and set the output directory to `/`.

```
index.html
assets/css/gasdrawls.css
assets/js/gd-data.js      shop URL, issues, alias cards, products: edit here
assets/js/gasdrawls.js    cards, issue modal, power core, god mode, SFX
assets/art/               your own or licensed art (see the README in there)
assets/favicon.svg
```

To preview it locally, run `python3 -m http.server` in this folder and open
http://localhost:8000.

## What's interactive
- **God Mode** switch in the nav (or on the cover): the page goes cosmic and
  gold, with Kirby-krackle energy in the background. It's remembered per visitor.
- **Type D-O-O-M** anywhere to unlock God Mode.
- **Power Core**: smash the mask to charge the meter. At 100% it unlocks God Mode.
- **Alias cards** flip to show stats. **Issues** open into a detail view.
- The mask's eyes follow the cursor, and clicking empty space throws comic SFX.
- Motion is toned down for visitors who set "reduce motion".

## Still to do
- Set `GD_SHOP_URL` in `assets/js/gd-data.js` to the real store.
- Replace the placeholder products with real ones (name, price, photo, link).
- Every image is original art drawn in code. No album covers or Marvel
  artwork are used. If you have licensed art, add it in `assets/art/`.
- Add an og:image (1200x630) for link previews.
