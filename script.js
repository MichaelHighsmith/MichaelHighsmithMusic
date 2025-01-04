// Map notes to sound files or MIDI events
const noteMap = {
    "C": "path/to/C.mp3",
    "C#": "path/to/Csharp.mp3",
    "D": "path/to/D.mp3",
    "D#": "path/to/Dsharp.mp3",
    "E": "path/to/E.mp3",
    "F": "path/to/F.mp3",
    "F#": "path/to/Fsharp.mp3",
    "G": "path/to/G.mp3",
    "G#": "path/to/Gsharp.mp3",
    "A": "path/to/A.mp3",
    "A#": "path/to/Asharp.mp3",
    "B": "path/to/B.mp3",
    "C2": "path/to/C2.mp3",
    "C#2": "path/to/Csharp2.mp3",
    "D2": "path/to/D2.mp3",
    "D#2": "path/to/Dsharp2.mp3",
    "E2": "path/to/E2.mp3",
    // Add paths for more notes as needed
  };
  
  document.querySelectorAll('.key').forEach(key => {
    key.addEventListener('mouseenter', () => {
      const note = key.getAttribute('data-note');
      const audio = new Audio(noteMap[note]);
      audio.play();
    });
  });
  