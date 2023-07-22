(function(global) {
  let position = {
    x: 10,
    y: 10
  };

  const actions = [() => {}];

  let canvasElement = document.getElementById('canvas');
  const speed = canvasElement.dataset.speed || 200;
  const canvasSize = canvasElement.dataset.size || 100;

  canvasElement.width = canvasSize;
  canvasElement.height = canvasSize;
  let positionMarkerElement = document.getElementById('position_marker');
  let ctx = canvasElement.getContext('2d');

  function markDot() {
    actions.push(() => {
      ctx.fillStyle = '#222288';
      ctx.fillRect(position.x, position.y, 1, 1);
    });
  }

  function moveUp() {
    actions.push(() => {
      position.y = position.y - 1
    });
  }

  function moveDown() {
    actions.push(() => {
      position.y = position.y + 1
    });
  }

  function moveLeft() {
    actions.push(() => {
      position.x = position.x - 1
    });
  }

  function moveRight() {
    actions.push(() => {
      position.x = position.x + 1
    });
  }

  global.markDot = markDot;
  global.moveUp = moveUp;
  global.moveDown = moveDown;
  global.moveLeft = moveLeft;
  global.moveRight = moveRight;

  function updatePositionMarker() {
    const markerUnit = 100 / canvasSize;
    const markerSize = markerUnit * 0.75;
    positionMarkerElement.style.width = `${markerSize}%`;
    positionMarkerElement.style.height = `${markerSize}%`;
    positionMarkerElement.style.left = `${position.x * markerUnit + markerUnit / 6}%`;
    positionMarkerElement.style.top = `${position.y * markerUnit + markerUnit / 6}%`;
  }

  function runActions() {
    setInterval(() => {
      console.log("Tick");
      if (actions.length > 0) {
        const action = actions.shift();
        action();
      }
      updatePositionMarker();
    }, speed);
  }

  runActions();
})(window);
