export const siteTaskDefinitions = [
  {
    key: 'mediaDistribution',
    label: 'Release Media',
    route: '/updates',
    description: 'Latest release media and newsroom announcements.',
    contentType: 'mediaDistribution',
    enabled: true,
  },
] as const

export const siteTaskViews = {
  mediaDistribution: '/updates',
} as const
