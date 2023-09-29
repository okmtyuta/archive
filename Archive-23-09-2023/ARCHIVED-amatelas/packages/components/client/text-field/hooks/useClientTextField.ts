import { useState } from 'react'
import { ClientTextFieldValue } from '../types/ClientTextFieldValue'

export const useClientTextField = () => {
  const [clientTextFieldValue, setClientTextFieldValue] = useState<ClientTextFieldValue>({})

  return {
    clientTextFieldValue,
    setClientTextFieldValue
  }
}
