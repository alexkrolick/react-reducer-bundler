// returns a random number after a random amount of time
export default async function() {
  return new Promise(resolve =>
    setTimeout(
      () => Math.round(random(1000)),
      random(1000)
    )
  );
}

function random(max: number) {
  return Math.random() * max;
}
