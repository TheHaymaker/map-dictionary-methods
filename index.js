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
    wfDictionary[`${wf.name}`] = wfDictionary[`${wf.name}`] || {}
    wf.rules.map(rule => {
      wfDictionary[`${wf.name}`].hasRule = wfDictionary[`${wf.name}`].hasRule || {} 
      wfDictionary[`${wf.name}`].hasRule[`${rule.name}`] = wf.name

    }) 
  })
  // console.log(wfDictionary)
  return wfDictionary
}

const getUniqRules = (dict) => {
  const masterRuleList = {}
  const waterfalls = Object.keys(dict).map(wf => {
    Object.keys(dict[wf].hasRule).map(ruleKey => {
      masterRuleList[ruleKey] = masterRuleList[ruleKey] || []
      masterRuleList[ruleKey].push(dict[wf].hasRule[ruleKey])
    })
  })
  console.log(masterRuleList)
  return masterRuleList
}

const wfDict = createWaterfallDictionary(waterfalls)
getUniqRules(wfDict)

{ 'rule A':
   [ 'waterfall 1', 'waterfall 2', 'waterfall 3', 'waterfall 4' ],
  'rule B': [ 'waterfall 1', 'waterfall 2' ],
  'rule C': [ 'waterfall 1', 'waterfall 5', 'waterfall 6' ],
  'rule Y': [ 'waterfall 3', 'waterfall 4' ],
  'rule Z': [ 'waterfall 3', 'waterfall 5', 'waterfall 6' ],
  'rule X': [ 'waterfall 4' ] }
