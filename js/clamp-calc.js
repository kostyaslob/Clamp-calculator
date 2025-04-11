function calculateClamp() {
  const minWidth = parseFloat(document.getElementById("minWidth").value);
  const minValue = parseFloat(document.getElementById("minValue").value);
  const maxWidth = parseFloat(document.getElementById("maxWidth").value);
  const maxValue = parseFloat(document.getElementById("maxValue").value);

  const a = ((maxValue - minValue) / (maxWidth - minWidth)) * 100;
  const b = minValue - a * (minWidth / 100);

  const bFormatted = b < 0
    ? `- ${Math.abs(b).toFixed(2)}px`
    : `+ ${b.toFixed(2)}px`;

  const result = `clamp(${minValue}px, calc(${a.toFixed(2)}vw ${bFormatted}), ${maxValue}px)`;
  document.getElementById("output").textContent = result + ";";

  document.getElementById("copyBtn").style.display = "inline-block";
}

function copyResult() {
  const output = document.getElementById("output").textContent;
  const button = document.getElementById("copyBtn");

  navigator.clipboard.writeText(output)
    .then(() => {
        button.textContent = "Copied";
        button.classList.add("copied");
        button.disabled = true;

      setTimeout(() => {
        button.textContent = "Copy";
        button.classList.remove("copied");
        button.disabled = false;
      }, 1000);
    })
    .catch(() => {
      button.textContent = "Error";
      setTimeout(() => {
        button.textContent = "Copy";
      }, 1000);
    });
}