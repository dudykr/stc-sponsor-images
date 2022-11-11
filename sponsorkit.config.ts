import { defineConfig, presets } from 'sponsorkit'



export default defineConfig({
  tiers: [
    {
      title: 'Past Sponsors',
      monthlyDollars: -1,
      preset: presets.xs,
    },
    {
      title: 'Backers',
      preset: presets.small,
    },
    {
      title: 'Sponsors',
      monthlyDollars: 100,
      preset: {
        avatar: {
          size: 42,
        },
        boxWidth: 52,
        boxHeight: 52,
        container: {
          sidePadding: 30,
        },
      }
    },
    {
      title: 'Bronze Sponsors',
      monthlyDollars: 500,
      preset: presets.medium,
    },
    {
      title: 'Silver Sponsors',
      monthlyDollars: 1000,
      preset: presets.large,
    },
  ]
})
