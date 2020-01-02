export default function getRandomColor() {
  const colors = [
    "#f9ca24",
    "#f0932b",
    "#686de0",
    "#badc58",
    "#22a6b3",
    "#130f40",
    "#227093",
    "#33d9b2",
    "#2c3e50",
    "#2ecc71",
    "#8e44ad",
    "#e74c3c",
    "#d35400"
  ];

  const random = Math.floor(Math.random() * 13);

  return colors[random];
}
