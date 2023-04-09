const init = () => {
  const breakpoints = [
    [0, "alfa"],
    [3, "bravo"],
    [9, "charlie"],
    [15, "delta"]
  ]
  const full = Array(20).fill(null)

  let bi = 0; // breakpoint index

  for (let fi = 0; fi < full.length; fi++) {
    if (breakpoints[bi + 1]) {
      if (fi === breakpoints[bi + 1][0]) {
        bi += 1;
      }
    }
    full[fi] = breakpoints[bi][1]
  }

 window.cout.innerHTML = JSON.stringify(full, null, 2)
}

document.addEventListener('DOMContentLoaded', init)
