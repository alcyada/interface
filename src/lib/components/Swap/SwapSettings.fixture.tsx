import { FixtureProvider } from 'lib/theme/test'

import { Modal } from '../Dialog'
import { SettingsDialog } from './Settings'

export default (
  <FixtureProvider height={360}>
    <Modal>
      <SettingsDialog onClose={() => void 0} />
    </Modal>
  </FixtureProvider>
)
