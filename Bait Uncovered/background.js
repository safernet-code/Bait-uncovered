


// 1. Grab your HTML elements using your IDs
const box1 = document.getElementById('Q1');
const box2 = document.getElementById('Q2');
const box3 = document.getElementById('Q3');
const box4 = document.getElementById('Q4');
const box5 = document.getElementById('Q5');
const box6 = document.getElementById('Q6');

// 2. Load the saved settings when the popup opens
chrome.storage.local.get(['b1', 'b2', 'b3', 'b4', 'b5', 'b6'], (result) => {
  if (result.b1 !== undefined) box1.checked = result.b1;
  if (result.b2 !== undefined) box2.checked = result.b2;
  if (result.b3 !== undefined) box3.checked = result.b3;
  if (result.b4 !== undefined) box4.checked = result.b4;
  if (result.b5 !== undefined) box5.checked = result.b5;
  if (result.b6 !== undefined) box6.checked = result.b6;
});

// 3. Save the setting immediately when someone clicks a box
box1.addEventListener('change', () => {
  chrome.storage.local.set({ b1: box1.checked });
});

box2.addEventListener('change', () => {
  chrome.storage.local.set({ b2: box2.checked });
});

box3.addEventListener('change', () => {
  chrome.storage.local.set({ b3: box3.checked });
});

box4.addEventListener('change', () => {
  chrome.storage.local.set({ b4: box4.checked });
});

box5.addEventListener('change', () => {
  chrome.storage.local.set({ b5: box5.checked });
});

box6.addEventListener('change', () => {
  chrome.storage.local.set({ b6: box6.checked });
});