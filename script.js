// Map notes to sound files or MIDI events
const noteMap = {
    "C": "https://github.com/MichaelHighsmith/MichaelHighsmithMusic/blob/main/Soaring.mp3",
    "C#": "https://github.com/MichaelHighsmith/MichaelHighsmithMusic/blob/main/Soaring.mp3",
    "D": "https://github.com/MichaelHighsmith/MichaelHighsmithMusic/blob/main/Soaring.mp3",
    "D#": "https://github.com/MichaelHighsmith/MichaelHighsmithMusic/blob/main/Soaring.mp3",
    "E": "https://github.com/MichaelHighsmith/MichaelHighsmithMusic/blob/main/Soaring.mp3",
    "F": "https://github.com/MichaelHighsmith/MichaelHighsmithMusic/blob/main/Soaring.mp3",
    "F#": "https://github.com/MichaelHighsmith/MichaelHighsmithMusic/blob/main/Soaring.mp3",
    "G": "https://github.com/MichaelHighsmith/MichaelHighsmithMusic/blob/main/ComingUpForAir.mp3",
    "G#": "https://github.com/MichaelHighsmith/MichaelHighsmithMusic/blob/main/Soaring.mp3",
    "A": "https://github.com/MichaelHighsmith/MichaelHighsmithMusic/blob/main/Soaring.mp3",
    "A#": "https://github.com/MichaelHighsmith/MichaelHighsmithMusic/blob/main/Soaring.mp3",
    "B": "https://github.com/MichaelHighsmith/MichaelHighsmithMusic/blob/main/Soaring.mp3",
    "C2": "https://github.com/MichaelHighsmith/MichaelHighsmithMusic/blob/main/Soaring.mp3",
    "C#2": "https://github.com/MichaelHighsmith/MichaelHighsmithMusic/blob/main/Soaring.mp3",
    "D2": "https://github.com/MichaelHighsmith/MichaelHighsmithMusic/blob/main/Soaring.mp3",
    "D#2": "https://github.com/MichaelHighsmith/MichaelHighsmithMusic/blob/main/Soaring.mp3",
    "E2": "https://github.com/MichaelHighsmith/MichaelHighsmithMusic/blob/main/Soaring.mp3"

    // Add paths for more notes as needed
  };
  
  document.querySelectorAll('.key').forEach(key => {
    key.addEventListener('mouseenter', () => {
      const note = key.getAttribute('data-note');
      const audio = new Audio(noteMap[note]);
      audio.play();
    });
  });
  