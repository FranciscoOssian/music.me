var listWhiteKeys = document.getElementsByClassName('wk');
var listBlackKeys = document.getElementsByClassName('bk');

function play(nota){
    var synth = new Tone.Synth().toMaster();
    synth.triggerAttackRelease(nota, "8n");
}

var notesWhite = ["C4", "D4", "E4", "F4", "G4", "A4", "B4"];

listWhiteKeys[0].onclick = () => play(notesWhite[0]);
listWhiteKeys[1].onclick = () => play(notesWhite[1]);
listWhiteKeys[2].onclick = () => play(notesWhite[2]);
listWhiteKeys[3].onclick = () => play(notesWhite[3]);
listWhiteKeys[4].onclick = () => play(notesWhite[4]);
listWhiteKeys[5].onclick = () => play(notesWhite[5]);
listWhiteKeys[6].onclick = () => play(notesWhite[6]);

var notesBlack = ["C#4", "D#4", "F#4", "G#4", "A#4"];

listBlackKeys[0].onclick = () => play(notesBlack[0]);
listBlackKeys[1].onclick = () => play(notesBlack[1]);
listBlackKeys[2].onclick = () => play(notesBlack[2]);
listBlackKeys[3].onclick = () => play(notesBlack[3]);
listBlackKeys[4].onclick = () => play(notesBlack[4]);
