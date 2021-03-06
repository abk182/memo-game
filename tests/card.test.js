import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import { Card } from '../game/components/card'

test('Card test is working', () => {
/*
    const card = shallow(
        <Card id={'01'} value={'H5'} handler={obj => console.log(obj)}/>
    )

    expect(card.test()).toEqual('H5')
*/
    const component = renderer.create(
        <Card id={'01'} value={'H5'} handler={obj => console.log(obj)}/>
    )

    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
    tree.props.onClick()

    tree = component.toJSON()
    expect(tree).toMatchSnapshot()
})