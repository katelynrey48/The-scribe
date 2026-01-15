
const journalImage = document.getElementById("journalImage");
const entryText = document.getElementById("entryText");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
const halfOpenEntry = "   Prologue:\n If you're reading this, I'll be gone. Not in the way you imagine, not dead, nor vanished. I'll be gone from this wretched place, away from The Leader's glaring eyes, away from the small mercy bought with my silence, away from fear. I cannot live my life under her rule. I can no longer make excuses for my submission.";






let currentPage = 0; 


const entries = [
  "   Entry 1:\n I am the Leader’s scribe. I have been the second I became an adult. I was told it was an honor. My mother cried when they selected me. I thought it was pride. Now I understand it was relief. I record decrees, corrections, and Punishments. I do not ask questions. That is part of the training. They say the record must be clean, even when the events are not. I cannot keep personal thoughts in the records.",
  "   Entry 2:\n They asked me to witness again today.That is the word they use, witness, as if it is a gift to witness such a thing. She corrected my spelling of “insubordination.” Very gently. The way one might correct a child. I thanked her. I thanked her while they dragged the boy out. My pen leaked onto the book. The blot looks like a person kneeling. I tried to wipe it up and only made it worse. I have been told everything must be kept as record. I am keeping this as record.",
  "   Entry 3:\n Today I dreamt that the boy was alive, standing beside my desk. In my dream my hands would not move. I felt ashamed that i felt relief. After that I have started writing less accurately. Not in a way they would notice, only in the way that matters. I do not write these punishments as necessary. Nor do I write them as justfied. ",
  "   Entry 4:\n  I watched her today,  The Leader, smiling while she assigned another sentence. Her hand was steady. Mine shook. No one noticed. That, I think, is my advantage. At dawn, I will fold these pages into my coat. I may burn them, or carry them. Either way, I will stop lending my hand to a system that doesnt serve me. Let them find another scribe. I choose to be more than that."
];


function renderPage() {

  if (currentPage === 0) {
    journalImage.src = "cover.PNG";
    entryText.style.display = "none";
    return;
  }



if (currentPage === 1) {
  journalImage.src = "halfopenbook.PNG";
  entryText.style.display = "block";  
  entryText.textContent = halfOpenEntry;
  return;
}


  journalImage.src = "fullyopenbook.PNG";
  entryText.style.display = "block";

  let entryIndex = currentPage - 2;

  if (entryIndex < 0) entryIndex = 0;
  if (entryIndex >= entries.length) entryIndex = entries.length - 1;

  entryText.textContent = entries[entryIndex];
}


journalImage.addEventListener("click", () => {
  if (currentPage === 0) currentPage = 1;
  else if (currentPage === 1) currentPage = 2;
  renderPage();
});


nextBtn.addEventListener("click", () => {
  currentPage++;
  if (currentPage > entries.length + 1) currentPage = entries.length + 1;
  renderPage();
});


prevBtn.addEventListener("click", () => {
  currentPage--;
  if (currentPage < 0) currentPage = 0;
  renderPage();
});


renderPage();
