import axios from 'axios'

export async function fetchHIBPData(dataUrl) {
  return await axios.get(dataUrl)
}

export function rando(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}

export function getFunName() {
  const adjectives = [
    'adorable',
    'beautiful',
    'clean',
    'drab',
    'elegant',
    'fancy',
    'glamorous',
    'handsome',
    'long',
    'magnificent',
    'old-fashioned',
    'plain',
    'quaint',
    'sparkling',
    'ugliest',
    'unsightly',
    'angry',
    'bewildered',
    'clumsy',
    'defeated',
    'embarrassed',
    'fierce',
    'grumpy',
    'helpless',
    'itchy',
    'jealous',
    'lazy',
    'mysterious',
    'nervous',
    'obnoxious',
    'panicky',
    'repulsive',
    'scary',
    'thoughtless',
    'uptight',
    'worried',
  ]

  const verbs = [
    'correct',
    'be',
    'have',
    'do',
    'say',
    'go',
    'get',
    'make',
    'know',
    'think',
    'take',
    'see',
    'come',
    'want',
    'use',
    'find',
    'give',
    'tell',
    'work',
    'call',
    'try',
    'ask',
    'need',
    'feel',
    'become',
    'leave',
    'put',
    'mean',
    'keep',
    'let',
  ]

  const nouns = [
    'women',
    'men',
    'children',
    'teeth',
    'feet',
    'people',
    'leaves',
    'mice',
    'geese',
    'halves',
    'knives',
    'wives',
    'lives',
    'elves',
    'loaves',
    'potatoes',
    'tomatoes',
    'cacti',
    'foci',
    'fungi',
    'nuclei',
    'syllabuses',
    'analyses',
    'diagnoses',
    'oases',
    'theses',
    'crises',
    'phenomena',
    'criteria',
    'data',
  ]

  return `${rando(verbs)} ${rando(adjectives)} ${rando(
    adjectives
  )} ${rando(nouns)}`
}
