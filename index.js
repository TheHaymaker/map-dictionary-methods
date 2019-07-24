const waterfalls = [
  {
    name: 'waterfall 1',
    rules: [
      {
        name: 'rule A'
      },
      {
        name: 'rule B'
      },
      {
        name: 'rule C'
      },
    ]
  },
  {
    name: 'waterfall 2',
    rules: [
      {
        name: 'rule A'
      },
      {
        name: 'rule B'
      },
    ]
  },
  {
    name: 'waterfall 3',
    rules: [
      {
        name: 'rule A'
      },
      {
        name: 'rule Y'
      },
      {
        name: 'rule Y'
      },
      {
        name: 'rule Z'
      },
    ]
  },
  {
    name: 'waterfall 4',
    rules: [
      {
        name: 'rule A'
      },
      {
        name: 'rule X'
      },
      {
        name: 'rule Y'
      },
    ]
  },
  {
    name: 'waterfall 5',
    rules: [
      {
        name: 'rule C'
      },
      {
        name: 'rule Z'
      },
      {
        name: 'rule C'
      },
      {
        name: 'rule C'
      },
    ]
  },
  {
    name: 'waterfall 6',
    rules: [
      {
        name: 'rule C'
      },
      {
        name: 'rule Z'
      },
      {
        name: 'rule C'
      },
      {
        name: 'rule C'
      },
    ]
  },
]

const createWaterfallDictionary = (wfList) => {
  const wfDictionary = {}

  wfList.map(wf => {
    wf.rules.map(rule => {
      wfDictionary[`${rule.name}`] = wfDictionary[`${rule.name}`] || []
      if(!wfDictionary[`${rule.name}`].includes(wf.name)) {
        wfDictionary[`${rule.name}`].push(wf.name)
      }

    }) 
  })
  console.log(wfDictionary)
  return wfDictionary
}

const wfDict = createWaterfallDictionary(waterfalls)

// { 'rule A':
//    [ 'waterfall 1', 'waterfall 2', 'waterfall 3', 'waterfall 4' ],
//   'rule B': [ 'waterfall 1', 'waterfall 2' ],
//   'rule C': [ 'waterfall 1', 'waterfall 5', 'waterfall 6' ],
//   'rule Y': [ 'waterfall 3', 'waterfall 4' ],
//   'rule Z': [ 'waterfall 3', 'waterfall 5', 'waterfall 6' ],
//   'rule X': [ 'waterfall 4' ] }
