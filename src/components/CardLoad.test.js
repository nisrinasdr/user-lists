import { render } from '@testing-library/react';
import CardLoad from './CardLoad';

// Test whether the components contain divs that build the UI for card lazyload 
test('renders cardload', () => {
  const {container} = render(<CardLoad />);
  const divCard = container.querySelector('.card')
  const divCardPicture = container.querySelector('.card-picture')
  const divCardText = container.querySelector('.card-text')

  expect(divCard).not.toBeNull()
  expect(divCardPicture).not.toBeNull()
  expect(divCardText).not.toBeNull()
});
