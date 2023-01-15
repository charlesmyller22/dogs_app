import React from 'react'

export const useForm = () => {

    const [value, setValue] = React.useState('')

function onChange(event) {
    setValue(target.value)
}

  return {
    value, 
    setValue,
    onChange,
  }
}
