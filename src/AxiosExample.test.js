import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import axios from 'axios';
import AxiosExample from './AxiosExample';

jest.mock('axios');

test('fetches and displays user data', async () => {
    const mockResponse = { data: [{ cityName: 'Pune' }, {cityName:'Mumbai'},{cityName:'Chennai'}]};

    axios.get.mockResolvedValue(mockResponse);

    render(<AxiosExample />);

const userNameElement = await waitFor(() => screen.getByText(/Chennai/i));
expect(userNameElement).toBeInTheDocument();
})

