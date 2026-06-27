import { TimelineEvent, Achievement, Interest, FunFact } from '@/lib/types'

export const aboutData = {
  introduction: {
    title: 'Who I am',
    bio: 'I\'m Kanan Mirchandani, a creative technologist and visual storyteller. I believe in the intersection of art and engineering, where thoughtful design meets elegant code.',
    location: 'Earth',
  },
  timeline: [
    {
      id: '1',
      year: '2015',
      title: 'The Beginning',
      description: 'Started my journey into web development and creative coding.',
    },
    {
      id: '2',
      year: '2018',
      title: 'Creative Turn',
      description: 'Discovered photography and visual design as creative outlets.',
    },
    {
      id: '3',
      year: '2021',
      title: 'Building Things',
      description: 'Focused on building full-stack applications and platforms.',
    },
    {
      id: '4',
      year: '2024',
      title: 'Present Day',
      description: 'Combining all passions into meaningful digital experiences.',
    },
  ] as TimelineEvent[],
  interests: [
    {
      id: '1',
      name: 'Photography',
      description: 'Capturing moments, light, and emotion through the lens.',
    },
    {
      id: '2',
      name: 'Writing',
      description: 'Exploring ideas through storytelling and essays.',
    },
    {
      id: '3',
      name: 'Technology',
      description: 'Building innovative solutions with modern tools.',
    },
    {
      id: '4',
      name: 'Art',
      description: 'Creating and appreciating visual expressions of ideas.',
    },
    {
      id: '5',
      name: 'Music',
      description: 'Listening, exploring, and occasionally creating soundtracks.',
    },
  ] as Interest[],
  achievements: [
    {
      id: '1',
      title: 'Award One',
      description: 'Recognition for innovative project work.',
      date: '2023',
    },
    {
      id: '2',
      title: 'Award Two',
      description: 'Contribution to open-source community.',
      date: '2023',
    },
    {
      id: '3',
      title: 'Award Three',
      description: 'Excellence in design and development.',
      date: '2024',
    },
  ] as Achievement[],
  funFacts: [
    {
      id: '1',
      text: 'I take photos with film cameras.',
    },
    {
      id: '2',
      text: 'I have a weakness for vintage typography.',
    },
    {
      id: '3',
      text: 'I design in Figma at 2 AM.',
    },
    {
      id: '4',
      text: 'My favorite color is actually all of them.',
    },
    {
      id: '5',
      text: 'I believe in analog tools for thinking.',
    },
  ] as FunFact[],
}
