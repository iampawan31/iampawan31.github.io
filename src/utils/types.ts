export type basicInformationType = {
  firstName: string
  lastName: string
  age: number
  position: string
  city: string
  state: string
  country: string
  githubLink: string
  twitterLink: string
  facebookLink: string
  instagramLink: string
  linkedinLink: string
  about: string
}

export type educationType = {
  institutionName: string
  startedOn: string
  completedOn: string
  degree: string
  city: string
  state: string
  order: number
}

export type socialLinksType = {
  github: string
  twitter: string
  facebook: string
  instagram: string
  linkedin: string
}

export type experienceType = {
  company: string
  jobTitle: string
  from: string
  to: string
  responsibilities: string
  location: string
  technologies?: []
  order: number
}

export type TechnologyItemType = {
  name: string
  backgroundColor?: string
}
