const fs = require('fs');
const R = 30; // Size of hexagon
const sqrt3 = Math.sqrt(3);
const W = 10 * R * sqrt3;
const H = 450; // 5 repeating vertical blocks of 90px

let svg = `<svg xmlns='http://www.w3.org/2000/svg' width='${W}' height='${H}' viewBox='0 0 ${W} ${H}'>`;
svg += `<defs>
  <path id='hex' d='M0,${-R} L${R*sqrt3/2},${-R/2} L${R*sqrt3/2},${R/2} L0,${R} L${-R*sqrt3/2},${R/2} L${-R*sqrt3/2},${-R/2} Z' stroke='rgba(200,200,200,0.4)' stroke-width='1.5' />
</defs>`;

for (let row = -2; row < 12; row++) {
  for (let col = -2; col < 12; col++) {
    const x = col * R * sqrt3 + (row % 2 === 0 ? 0 : R * sqrt3 / 2);
    const y = row * 1.5 * R;
    const isFilled = Math.random() < 0.12;
    const fill = isFilled ? 'rgba(225,225,225,0.6)' : 'none';
    svg += `<use href='#hex' x='${x}' y='${y}' fill='${fill}' />`;
  }
}
svg += '</svg>';
fs.writeFileSync('C:/PortoTree/public/hexagons.svg', svg);
console.log('Done!');
