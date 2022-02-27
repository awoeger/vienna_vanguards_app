import Matter from "matter-js";

export default restart => {
  let engine = Matter.Engine.create({ enableSleeping: false });

  let world = engine.world;


  engine.gravity.y = 0.4;

  return (
    physics: { engine, world },
    Attacker: Attacker(world, 'green', { x: 50, y: 200 }, { height: 50, width: 200 })

  )
}
