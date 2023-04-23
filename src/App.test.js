import { mount, configure } from 'enzyme';
import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import Adapter from '@wojtekmaj/enzyme-adapter-react-latest';
import App from '../App';
configure({adapter: new Adapter()})

test('the contact is blank by default', () => {
  const wrapper = mount(<Contact />)
  wrapper.findWhere(el => {
    console.log(el.html())
    return wrapper.hasClass("buttonType")
  })
  wrapper.find("button")
  expect(wrapper.text()).toBe("Blank")
  
});
