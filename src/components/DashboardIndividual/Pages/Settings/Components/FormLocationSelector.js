import React, { useState } from 'react'
import styled from 'styled-components';

// SELECT LOCATION
import Select from 'react-select';
// import SelectPlaces from 'react-select-places';

const FormLocationStyle = styled.div`

`;

export default function FormLocationSelector() {

    const [location, setLocation] = useState();

    const handleChange = (value) => {
        setLocation(value)
    }

    return (
    <FormLocationStyle>

    </FormLocationStyle>
  )
}
