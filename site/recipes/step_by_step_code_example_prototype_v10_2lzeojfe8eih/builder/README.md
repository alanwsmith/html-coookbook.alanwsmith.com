## Notes

- Run the `rebuild-watch.bash` script in this
  directory. It looks at the files in the
  `../src` directory and runs the `build.py`
  script when it sees one of them change.

- The `build.py` script parses the files
  in the `../src` directory and outputs
  the `../index.html` file

---

## config.json vs CONFIG.js vs DATA.json

- `CONFIG.json` is local to the build
  process and not included in the HTML

- The `CONFIG.js` file is included via a script
  tag directly into the output html file. (i.e.
  it is not loaded in via a `<script>` tag. It
  can be used to setup any values that need
  to be coded directly into the file without
  requiring them to be stored in the main script.
  This lets the main script be copied directly
  into production for usage.

- DATA.json is copied directly into the
  same directory as the `index.html` file to
  be called by a process in the script itself.
