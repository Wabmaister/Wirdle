import { BaseModal } from './BaseModal'
import { SettingsToggle } from './SettingsToggle'

type Props = {
  isOpen: boolean
  handleClose: () => void
  isHardMode: boolean
  handleHardMode: Function
  isDarkMode: boolean
  handleDarkMode: Function
  isHighContrastMode: boolean
  handleHighContrastMode: Function
}

export const SettingsModal = ({
  isOpen,
  handleClose,
  isHardMode,
  handleHardMode,
  isDarkMode,
  handleDarkMode,
  isHighContrastMode,
  handleHighContrastMode,
}: Props) => {
  return (
    <BaseModal title="Settins" isOpen={isOpen} handleClose={handleClose}>
      <div className="grid-cols-2 gap-4">
        <SettingsToggle
          settingName="Haurd Mode"
          flag={isHardMode}
          handleFlag={handleHardMode}
        />
        <SettingsToggle
          settingName="Daurk Mode"
          flag={isDarkMode}
          handleFlag={handleDarkMode}
        />
        <SettingsToggle
          settingName="Hie Contrast Mode"
          flag={isHighContrastMode}
          handleFlag={handleHighContrastMode}
        />
      </div>
    </BaseModal>
  )
}
