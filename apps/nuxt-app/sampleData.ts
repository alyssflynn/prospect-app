import { jobStatusOptions, type JobData } from '~/types'


function getRandomInt(min:number, max:number) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}

function getRandomJobStatus(){
    return jobStatusOptions[getRandomInt(0, jobStatusOptions.length-1)] 
}

function getRandomDate() {
    const randomYear = getRandomInt(2020, 2024)
    const randomMonth = getRandomInt(0, 11)
    const randomDay = getRandomInt(0, 31)
    const randomHour = getRandomInt(0, 23)
    const randomMin = getRandomInt(0, 59)
    return new Date(randomYear, randomMonth, randomDay, randomHour, randomMin)
}

let priorDate = new Date('2024-05-01T03:24:00').toLocaleString()
let currentDate = new Date().toLocaleString()


export const JobList: JobData[] = [{
  _id: 1,
  company: 'Google',
  title: 'Front-end Developer',
  contact: 'lindsay.walton@example.com',
  status: getRandomJobStatus(),
  active: true,
  updated: getRandomDate().toLocaleString(),
  created: priorDate,
  notes: 'blah'
}, {
  _id: 2,
  company: 'Meta',
  title: 'Designer',
  contact: 'courtney.henry@example.com',
  status: getRandomJobStatus(),
  active: true,
  updated: getRandomDate().toLocaleString(),
  created: priorDate,
  notes: 'blah'
}, {
  _id: 3,
  company: 'Amazon',
  title: 'Director of Product',
  contact: 'tom.cook@example.com',
  status: getRandomJobStatus(),
  active: true,
  updated: getRandomDate().toLocaleString(),
  created: priorDate,
  notes: 'blah'
}, {
  _id: 4,
  company: 'Netflix',
  title: 'Copywriter',
  contact: 'whitney.francis@example.com',
  status: getRandomJobStatus(),
  active: true,
  updated: getRandomDate().toLocaleString(),
  created: priorDate,
  notes: 'blah'
}, {
  _id: 5,
  company: 'Walmart',
  title: 'Senior Designer',
  contact: 'leonard.krasner@example.com',
  status: getRandomJobStatus(),
  active: false,
  updated: getRandomDate().toLocaleString(),
  created: priorDate,
  notes: 'blah'
}, {
  _id: 6,
  company: 'DigitalOcean',
  title: 'Principal Designer',
  contact: 'floyd.miles@example.com',
  status: getRandomJobStatus(),
  active: true,
  updated: currentDate,
  created: priorDate,
  notes: 'blah'
}]
