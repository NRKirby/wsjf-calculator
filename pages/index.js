import { useState, useEffect } from 'react'
import Select from '../components/select'

export default function Home() {

  const ValueOptions = [{value:5, name: 'Killer'},{value:2, name: 'Bonus'},{value:1, name: 'Meh'}];
  const UrgencyOptions = [{value:5, name: 'ASAP'},{value:2, name: 'Soon'},{value:1, name: 'Whenever'}];
  const EstimateOptions = [{value: 1, name: '1'},{value: 2, name: '2'},{value: 3, name: '3'},{value: 5, name: '5'},{value: 8, name: '8'},{value: 13, name: '13'},{value: 21, name: '21'}];

  const [selectedValue, setSelectedValue] = useState();
  const [selectedUrgency, setSelectedUrgency] = useState();
  const [selectedEstimate, setSelectedEstimate] = useState();
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const total = calculateTotal(selectedValue, selectedUrgency, selectedEstimate);
    setTotal(total)
  }, [selectedUrgency, selectedValue, selectedEstimate])

  function calculateTotal(value, urgency, estimate) {
    const parsedValue = parseInt(value);
    const parsedUrgency = parseInt(urgency);
    const parsedEstimate = parseInt(estimate);

    if (isNaN(value) || isNaN(urgency) || isNaN(estimate)) {
      return 0;
    }

    return (parsedValue + parsedUrgency) / parsedEstimate;
  }

  useEffect(() => {
    document.getElementById('value').focus();
  }, [])


  return (
    <div className="flex p-8">
  
      <Select 
          label={'Value'} 
          setValue={setSelectedValue}
          optionArray={ValueOptions} />
      
      <Select 
          label={'Urgency'}
          setValue={setSelectedUrgency}
          optionArray={UrgencyOptions} />
      
      <Select
          label={'Estimate'} 
          setValue={setSelectedEstimate}
          optionArray={EstimateOptions} />

      <div className="w-36 mx-4">
        <label htmlFor="total" className="block text-sm font-medium text-gray-700">
          Total
        </label>
        <div className="mt-1">
          <input
            type="text"
            name="total"
            id="total"
            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
            value={isNaN(total) ? 0 : total.toFixed(1)}
            readOnly
          />
        </div>
      </div>
    </div>
  )
}
