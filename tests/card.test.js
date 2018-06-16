import React from 'react'
import renderer from 'react-test-renderer'
import { Card } from '../game/components/card'

test('Card test is working', () => {
    const component = renderer.create(
        <Card id={'01'} value={'H5'} handler={obj=>console.log(obj)}/>
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()

    tree.props.onClick()

    tree = component.toJSON()
    expect(tree).toMatchSnapshot()
})