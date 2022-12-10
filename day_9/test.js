const zczytajRoznice = (roznica, wspolrzedna) => {
  switch (roznica) {
    case 2:
      wspolrzedna++;
      break;
    case -2:
      wspolrzedna--;
      break;
    default:
      break;
  }
};
const aktualizujOgon = () => {
  let roznicaX = glowa.x - ogon.x;
  let roznicaY = glowa.y - ogon.y;
  zczytajRoznice(roznicaX, ogon.x);
  zczytajRoznice(roznicaY, ogon.y);
};

const aktualizujTabeleWartosci = (tabWartosci, x, y) => {
  if (!tabWartosci.includes({ x: x, y: y })) {
    tabWartosci.push();
  }
};

let tabWartosci = [];
let glowa = { x: 2, y: 0 };
let ogon = { x: 0, y: 0 };

aktualizujOgon();

console.log(tabWartosci.length);
