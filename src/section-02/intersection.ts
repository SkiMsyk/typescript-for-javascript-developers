export {};

type Pitcher1 = {
  throwingSpeed: number;
};

type Batter1 = {
  battingAverage: number;
};

const Sasaki: Pitcher1 = {
  throwingSpeed: 154,
};

const Ochiai: Batter1 = {
  battingAverage: 0.367,
};

// intersection
type TwoWayPlayer = Pitcher1 & Batter1;
// equals
// {
//   throwingSpeed: number;
//   battingAverage: number;
// }

const Otani: TwoWayPlayer = {
  throwingSpeed: 165,
  battingAverage: 0.286,
};
