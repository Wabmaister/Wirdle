export const GAME_TITLE = process.env.REACT_APP_GAME_NAME!

export const WIN_MESSAGES = ['Braw!', 'Grand', 'Weel duin!']
export const GAME_COPIED_MESSAGE = 'Gemm copied tae the clipbuird'
export const NOT_ENOUGH_LETTERS_MESSAGE = 'No eneuch letters'
export const WORD_NOT_FOUND_MESSAGE = 'Wird no fund'
export const HARD_MODE_ALERT_MESSAGE = 'Hard Mode can juist be enabelt at the stert!'
export const CORRECT_WORD_MESSAGE = (solution: string) =>
  `The wird wis ${solution}`
export const WRONG_SPOT_MESSAGE = (guess: string, position: number) =>
  `Maun uise ${guess} in poseetion ${position}`
export const NOT_CONTAINED_MESSAGE = (letter: string) =>
  `Guess maun conteen ${letter}`
export const ENTER_TEXT = 'Enter'
export const DELETE_TEXT = 'Delete'
export const STATISTICS_TITLE = 'Tallies'
export const GUESS_DISTRIBUTION_TEXT = 'Shottie Spreid'
export const NEW_WORD_TEXT = 'New wird in'
export const SHARE_TEXT = 'Share'
export const TOTAL_TRIES_TEXT = 'Total shotties'
export const SUCCESS_RATE_TEXT = 'Win rate'
export const CURRENT_STREAK_TEXT = 'Current rin'
export const BEST_STREAK_TEXT = 'Best rin'
