const image = document.getElementById('myImage');

image.addEventListener('click', (event) => {
  let x = event.offsetX;
  let y = event.offsetY;

  // Handle scaling
  const naturalWidth = image.naturalWidth;
  const naturalHeight = image.naturalHeight;
  const displayedWidth = image.width;
  const displayedHeight = image.height;

  if (naturalWidth !== displayedWidth || naturalHeight !== displayedHeight) {
    const scaleX = naturalWidth / displayedWidth;
    const scaleY = naturalHeight / displayedHeight;
    x *= scaleX;
    y *= scaleY;
  }

  console.log(`Clicked at pixel: x=${x}, y=${y}`);

  // Griggs: 246, 500
  let footprint_distance = Math.sqrt( (x-246)**2 + (y-500)**2 );
  console.log("Footprint distance: " + footprint_distance);
  if (footprint_distance < 80) {
     const griggsReport = `

- SIZE OF SHOE: 12 Mens

    `;
    alert(griggsReport);
  }


 // Trash: 309, 327
  let trash_distance = Math.sqrt( (x-309)**2 + (y-327)**2 );
  console.log("Trash distance: " + trash_distance);
  
if (trash_distance < 50) {
  // Create overlay
  const overlay = document.createElement('div');
  overlay.style.position = 'fixed';
  overlay.style.top = '0';
  overlay.style.left = '0';
  overlay.style.width = '100%';
  overlay.style.height = '100%';
  overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
  overlay.style.zIndex = '999';
  document.body.appendChild(overlay);

  // Create popup
  const popup = document.createElement('div');
  popup.style.position = 'fixed';
  popup.style.top = '30%';
  popup.style.left = '50%';
  popup.style.transform = 'translate(-50%, -50%)';
  popup.style.background = 'white';
  popup.style.border = '2px solid #333';
  popup.style.padding = '40px';
  popup.style.zIndex = '1000';
  popup.style.textAlign = 'center';
  popup.style.boxShadow = '0 0 10px rgba(0,0,0,0.5)';
  
  // Add image
  const img = document.createElement('img');
  img.src = 'glasses.png';
  img.alt = 'Glasses';
  img.style.maxWidth = '500px';
  popup.appendChild(img);

  // Add close button
  const button = document.createElement('button');
  button.textContent = 'Close';
  button.style.marginTop = '10px';
  button.onclick = () => {
    document.body.removeChild(popup);
    document.body.removeChild(overlay);
  };
  popup.appendChild(document.createElement('br'));
  popup.appendChild(button);

  document.body.appendChild(popup);
}

});

