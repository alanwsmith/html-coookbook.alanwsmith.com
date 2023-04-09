const init = () => {
  var sound = new Howl({
    src: ['gracie.mp3', 'plucks.mp3'],
    sprite: {
      track01: [0, 20000],
      track02: [21000, 41000]
    }
  });

  // Play each of the track.s
  sound.play('track01');
  sound.play('track02');

  // Change the volume of both tracks.
  sound.volume(0.5);

  // // After a second, pause both sounds in the group.
  // setTimeout(function() {
  //   sound.pause();
  // }, 1000);

  console.log('init')
  console.log(c.alfa)
}

document.addEventListener('DOMContentLoaded', init)
