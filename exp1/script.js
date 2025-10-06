function calculateTriangleArea() {
  let a = parseFloat(document.getElementById("sideA").value);
  let b = parseFloat(document.getElementById("sideB").value);
  let c = parseFloat(document.getElementById("sideC").value);

  const resultDiv = document.getElementById("triangleResult");

  if (isNaN(a) || isNaN(b) || isNaN(c) || a <= 0 || b <= 0 || c <= 0) {
    resultDiv.innerHTML = "Enter valid positive sides.";
    return;
  }

  let s = (a + b + c) / 2;
  let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
  resultDiv.innerHTML = `Area of Triangle: ${area.toFixed(2)}`;
}

function calculateRectangleArea() {
  let length = parseFloat(document.getElementById("rectLength").value);
  let breadth = parseFloat(document.getElementById("rectBreadth").value);

  const resultDiv = document.getElementById("rectangleResult");

  if (isNaN(length) || isNaN(breadth) || length <= 0 || breadth <= 0) {
    resultDiv.innerHTML = "Enter valid dimensions.";
    return;
  }

  let area = length * breadth;
  resultDiv.innerHTML = `Area of Rectangle: ${area.toFixed(2)}`;
}

function calculateCircleArea() {
  let radius = parseFloat(document.getElementById("circleRadius").value);

  const resultDiv = document.getElementById("circleResult");

  if (isNaN(radius) || radius <= 0) {
    resultDiv.innerHTML = "Enter valid radius.";
    return;
  }

  let area = Math.PI * radius * radius;
  resultDiv.innerHTML = `Area of Circle: ${area.toFixed(2)}`;
}
