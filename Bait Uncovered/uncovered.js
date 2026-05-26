
const box1 = document.getElementById('Q1');
const box2 = document.getElementById('Q2');
const box3 = document.getElementById('Q3');
const box4 = document.getElementById('Q4');
const box5 = document.getElementById('Q5');
const box6 = document.getElementById('Q6');
const submitBtn = document.getElementById('submit-btn');
const scoreDisplay = document.getElementById('score-display');
const scoreResets = document.getElementById('score-resets');

// Reusable function to play the sound
function playClickSound() {
  const audio = new Audio(chrome.runtime.getURL('clue.mp3'));
  audio.play().catch(error => console.error("Audio playback failed:", error));
}

// 2. Load the saved settings when the popup opens
chrome.storage.local.get(['b1', 'b2', 'b3', 'b4', 'b5', 'b6'], (result) => {
  if (result.b1 !== undefined) box1.checked = result.b1;
  if (result.b2 !== undefined) box2.checked = result.b2;
  if (result.b3 !== undefined) box3.checked = result.b3;
  if (result.b4 !== undefined) box4.checked = result.b4;
  if (result.b5 !== undefined) box5.checked = result.b5;
  if (result.b6 !== undefined) box6.checked = result.b6;
});


box1.addEventListener('change', () => { 
  chrome.storage.local.set({ b1: box1.checked }); 
  if (box1.checked) playClickSound(); 
});

box2.addEventListener('change', () => { 
  chrome.storage.local.set({ b2: box2.checked }); 
  if (box2.checked) playClickSound(); 
});

box3.addEventListener('change', () => { 
  chrome.storage.local.set({ b3: box3.checked }); 
  if (box3.checked) playClickSound(); 
});

box4.addEventListener('change', () => { 
  chrome.storage.local.set({ b4: box4.checked }); 
  if (box4.checked) playClickSound(); 
});

box5.addEventListener('change', () => { 
  chrome.storage.local.set({ b5: box5.checked }); 
  if (box5.checked) playClickSound(); 
});

box6.addEventListener('change', () => { 
  chrome.storage.local.set({ b6: box6.checked }); 
  if (box6.checked) playClickSound(); 
});

// 4. Calculate Score Logic
submitBtn.addEventListener('click', () => {
  let checkedCount = 0;

  if (box1.checked) checkedCount++;
  if (box2.checked) checkedCount++;
  if (box3.checked) checkedCount++;
  if (box4.checked) checkedCount++;
  if (box5.checked) checkedCount++;
  if (box6.checked) checkedCount++;

  let scorePercent = Math.round(((6 - checkedCount) / 6) * 100);

  scoreDisplay.innerText = `Credibility Score: ${scorePercent}% (${checkedCount} red flags found)`;
  
  if (scorePercent >= 70) {
    scoreDisplay.style.color = "green";
  } else if (scorePercent >= 40) {
    scoreDisplay.style.color = "orange";
  } else {
    scoreDisplay.style.color = "red";
  }
});

// --- Example Text Toggle Logic ---
document.querySelectorAll('.example-btn').forEach(btn => {
  btn.addEventListener('click', (event) => {
    event.preventDefault(); 
    
    const targetId = btn.getAttribute('data-target');
    const targetEl = document.getElementById(targetId);
    
    if (targetEl.style.display === "block") {
      targetEl.style.display = "none";
    } else {
      targetEl.style.display = "block";
    }
  });
});
