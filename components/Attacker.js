import Matter from 'matter-js'
import React from 'react'
import { View } from 'react-native'

const Attacker = props => {
  const widthBody = props.body.bounds.max.x - props.body.bounds.min.x
  const heightBody = props.body.bounds.max.y - props.body.bounds.min.y

  // Divide by two to get the center of the rectangle
  const xBody = props.body.position.x - widthBody / 2
  const yBody = props.body.position.y - heightBody / 2

  const color = props.color;

  return (
    <View style={{
      borderWidth: 1,
      borderColor: color,
      borderStyle: 'solid',
      position: 'absolute',
      left: xBody,
      top: yBody,
      width: widthBody,
      height: heightBody
    }} />
  )
}

export default (world, color, pos, size) => {
  const initialAttacker = Matter.Bodies.rectangle(
    pos.x,
    pos.y,
    size.width,
    size.height,
    { label: 'Attacker' }
  )
  Matter.World.add(world, initialBird)

  return {
    body: initialAttacker,
    color,
    pos,
    renderer: <Attacker />
  }
}
