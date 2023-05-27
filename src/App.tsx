import React, { useEffect, useState } from 'react'

import questions from './questions.json'
import Button from './components/Button'
import Question from './components/Question'
import ProgressBar from './components/ProgressBar'
import { toTitleCase } from './utils'
import { Question as QuestionType } from './types'
import useDebounceEffect from './hooks/useDebounceEffect'
import api from './api';

type DataT = Record<string, Record<string, string>>

function App() {
  const [index, setIndex] = useState(0)
  const [data, setData] = useState<DataT>({})
  const [status, setStatus] = useState({ state: '', lastSaved: new Date() })
  const [modal, setModal] = useState<string | null>(null)
  const [newquestions, setNewQuestions] = useState<QuestionType[]>(questions);

  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get('/questions/get');
        
        setNewQuestions(response.data);
        
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []); 




  const hideModal = () => {
    document.body.style.overflow = 'auto'
    setModal(null)
  }

  const showModal = (newModal: string) => {
    document.body.style.overflow = 'hidden' 
    setModal(newModal)
  }


  

  const save = async () => {
    if (Object.keys(data).length > 0) {
      setStatus({ ...status, state: 'working' })
      
      const questionId = newquestions[index].id;
      console.log("this is dat aaaaaaaaaaa", {

        "answer": data[questionId],
        "questionId": newquestions[index].id,
        "fieldId": Object.keys(data[questionId])
      });
      try {
        const response = await api.post('/answer/save',{
          "answer": data[questionId],
          "questionId": newquestions[index].id,
          "fieldId": Object.keys(data[questionId])
        });
        setStatus({ state: 'saved', lastSaved: new Date() })
        
        
      } catch (error) {
        console.error(error);
      }
      
    }
  }

  useDebounceEffect(save, [data], 1000)
  


  const renderStatus = () => {
    switch (status.state) {
      case 'saved':
        return `Saved at ${status.lastSaved.toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit'
        })}`
      case 'working':
        return 'Saving...'
      case 'error':
        return 'Error'
      default:
        return null
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name, dataset } = e.target
    const fieldId = dataset?.fieldId
    if (!fieldId) throw Error('field id not found in input handler')
    const filedName = name
    setData({ ...data, [filedName]: { ...data[filedName], [fieldId]: value } })
  }

const question: QuestionType = newquestions[index]; 

return (
  <>
    <div className="m-10 mx-auto max-w-5xl">
      <div className="relative flex flex-col overflow-hidden rounded-lg bg-gray-100 p-7 pt-20">
        <ProgressBar current={index + 1} max={newquestions.length} />
        <Question question={newquestions[index]} onChange={handleChange} />
        <div className="flex-1 my-5"></div>
        <div className="flex items-center justify-between space-x-4">
          <Button
            onClick={() => {
              setIndex(index - 1);
            }}
            disabled={index < 1}
            className="flex-shrink-0"
          >
            &larr; Back
          </Button>
          {newquestions[index].modals && (
            <Button
              variant="outline"
              onClick={() => showModal('description')}
              className="flex-shrink-0"
            >
              Modal
            </Button>
          )}
          <span className="text-right flex-1">{renderStatus()}</span>
          <div className="space-x-4">
            <Button className="flex-shrink-0">Save and Exit</Button>
            <Button
              onClick={() => {
                setIndex(index + 1);
              }}
              disabled={index >= newquestions.length - 1}
              className="flex-shrink-0"
            >
              Next &rarr;
            </Button>
          </div>
        </div>
      </div>  
    </div>

    {modal && question && question.modals && modal in question.modals && (
      <div className="fixed inset-0 z-10 flex items-center justify-center">
        <div className="z-20 mx-auto max-w-xl space-y-5 rounded-lg border border-gray-300 bg-white p-6">
          <h1 className="text-xl font-bold text-gray-800">
            {toTitleCase(modal)}
          </h1>
          <p>{question.modals[modal]}</p>
          <Button onClick={hideModal}>Done</Button>
        </div>
        <div
          className="absolute inset-0 bg-black opacity-60 cursor-pointer"
          onClick={hideModal}
        />
      </div>
    )}

    {/* <div>
      <pre>question = {JSON.stringify(newquestions[index], null, 2)}</pre>
      <pre>data = {JSON.stringify(data, null, 2)}</pre>
    </div> */}
  </>
);



}

export default App
