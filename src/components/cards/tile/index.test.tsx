import React from 'react';
import { render, screen } from '@testing-library/react';
import { Tile } from './index';

describe('Tile', () => {
    test('render with proper href', () => {
        render(<Tile href={'youtube.com'} text={'Youtube'} />);
        expect(screen.getByRole('link')).toHaveAttribute(
            'href',
            '//youtube.com'
        );
    });
});
