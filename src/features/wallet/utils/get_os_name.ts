export const getOSName = (os: {name?: string; version?: string}) => {
  const osName = os.name?.toLowerCase() || ''
  const osVersion = os.version?.toLowerCase() || ''
  const linuxDesktopNames = [
    'linux',
    'ubuntu',
    'debian',
    'fedora',
    'arch',
    'centos',
    'red hat',
    'suse',
    'mint',
  ]
  const isLinuxDesktop = linuxDesktopNames.some((name) =>
    osName.includes(name)
  )
  const isArmLinux =
    isLinuxDesktop &&
    (osName.includes('arm') ||
      osName.includes('aarch64') ||
      osVersion.includes('arm') ||
      osVersion.includes('aarch64'))

  return osName.includes('win')
    ? 'Windows'
    : osName.includes('mac')
      ? 'macOS'
      : isLinuxDesktop
        ? isArmLinux
          ? 'Linux ARM'
          : 'Linux'
        : 'Unknown'
}
