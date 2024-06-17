import { Play } from 'phosphor-react'
import {
  CountdownContainer,
  FormContainer,
  HomeContainer,
  Separator,
  StartCountdownButton,
  TaskInput,
  MinutesAmountInput,
} from './styles'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

/*
 function register(name: string){//recebe o nome do input
  return{
    onchange: () => void,
    onBlur: () => void,
    onFocus: () => void
  }//retorna metodos
 }
*/

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Informe a tarefa'),
  MinutesAmount: zod
    .number()
    .min(5, 'O ciclo precisa ser de no minimo 5 minutos!')
    .max(60, 'O ciclo precisa ser de no máximo 60 minutos!'),
})

// interface NewCycleFormData {
//   task: string
//   minutesAmount: number
// }

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

export function Home() {
  // const { register, handleSubmit, watch, formState } = useForm({
  const { register, handleSubmit, watch, reset } = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      MinutesAmount: 0,
    },
  })

  // console.log(formState.errors)

  function handleCreateNewCycle(data: NewCycleFormData) {
    console.log(data)
    reset()
  }

  const task = watch('task')
  const isSubmitDisabled = !task

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)}>
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput
            placeholder="Dê um nome para o seu projeto"
            type="text"
            id="task"
            list="task-sugestions"
            {...register('task')}
          />
          <datalist id="task-sugestions"></datalist>

          <label htmlFor="MinutesAmount">durante</label>
          <MinutesAmountInput
            type="number"
            id="MinutesAmount"
            placeholder="00"
            step={5}
            min={5}
            max={60}
            {...register('MinutesAmount', { valueAsNumber: true })}
          />
          <span>minutos.</span>
        </FormContainer>

        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>

        <StartCountdownButton disabled={isSubmitDisabled} type="submit">
          <Play size={24} />
          Começar
        </StartCountdownButton>
      </form>
    </HomeContainer>
  )
}
