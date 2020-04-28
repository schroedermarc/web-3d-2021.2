var canvasMessageGenerator = (msgs) => {
  const canvasList = [];
  const canvasSize = 512;
  const fontSize = 48;

  const splitText = (inputText) => {
    let splitWords = inputText.split(' ');

    let newFrags = [];
    splitWords.forEach((word, i) => {
      if (i % 2 === 1) {
        newFrags.push([splitWords[i - 1], splitWords[i]].join(' '));
      } else if (i === splitWords.length - 1) {
        newFrags.push(word);
      }
    });

    return newFrags;
  };

  msgs.forEach((msg, i) => {
    // create canvas object
    // const canvas = document.createElement('canvas');
    const canvas = document.getElementById(`custom-canvas-${i}`);
    // create context
    const ctx = canvas.getContext('2d');
    // set dimensions
    canvas.width = canvasSize;
    canvas.height = canvasSize;

    // gradient
    const gradient = ctx.createRadialGradient(
      canvasSize / 2,
      canvasSize / 2,
      100,
      canvasSize / 2,
      canvasSize / 2,
      300
    );

    gradient.addColorStop(0.2, '#141DD9');
    gradient.addColorStop(0.5, '#0F18BF');
    gradient.addColorStop(1, '#030973');

    // draw background
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const splitTexts = splitText(msg);
    const totalTextHeight = fontSize * splitTexts.length;
    const startY = (canvasSize - totalTextHeight + fontSize) / 2;

    ctx.font = `${fontSize}px sans-serif`;
    ctx.fillStyle = '#ffffff';
    ctx.strokeStyle = '#ffffff';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    splitTexts.forEach((textSnip, i) => {
      ctx.fillText(textSnip, canvasSize / 2, startY + fontSize * i);
    });
    // draw text

    // add to list of canvases
    canvasList.push(canvas);
  });

  console.log(canvasList);
  return canvasList;
};
