import Empty from '..';
import {render} from '@testing-library/react';

describe('Empty', () => {
  test('basic', () => {
    const {container} = render(<Empty/>);
    expect(container).toMatchSnapshot();
  });
});
