import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="Hou tae play" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Guess the wird 'ithin 6 shotties. Efter ilka shottie, the color o the tiles will
        chynge for tae shaw hou near yer shottie wis tae the wird.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="W"
          status="correct"
        />
        <Cell value="E" />
        <Cell value="A" />
        <Cell value="R" />
        <Cell value="Y" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter W is 'ithin the wird and in the richt kistie.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="B" />
        <Cell value="I" />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="D"
          status="present"
        />
        <Cell value="I" />
        <Cell value="N" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter D is 'ithin the wird but in the wrang kistie.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="A" />
        <Cell value="H" />
        <Cell value="A" />
        <Cell isRevealing={true} isCompleted={true} value="U" status="absent" />
        <Cell value="D" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter U isna in the wird in at aw.
      </p>

      <p className="mt-6 italic text-sm text-gray-500 dark:text-gray-300">
        This is drawn frae a pautent code version o the wird guessin gemm awbody kens -{' '}
        <a
          href="https://github.com/cwackerfuss/react-wordle"
          className="underline font-bold"
        >
           scance ower the code
        </a>{' '}
      </p>
    </BaseModal>
  )
}
