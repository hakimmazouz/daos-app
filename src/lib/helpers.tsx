export const memberAmount = (amount: number) => {
  return `${amount} ${amount == 1 ? "member" : "members"}`;
};
export const ensembleAmount = (amount: number) => {
  return `${amount} ${amount == 1 ? "ensemble" : "ensembles"}`;
};

export const cls = (...args) =>
  args.reduce((total, current) => {
    if (current) {
      if (typeof current == "object") {
        for (let key in current) {
          if (current[key]) total += " " + key;
        }
      }
      if (typeof current == "string") total += " " + current;
      if (typeof current == "function") total += "" + current?.();
    }

    return total;
  }, "");
