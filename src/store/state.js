export default {
  startingLoads: [
    {
      id: 'bench',
      name: 'Wyciskanie leżąc',
      value: 40
    },
    {
      id: 'squat',
      name: 'Przysiad',
      value: 40
    },
    {
      id: 'deadlift',
      name: 'Martwy ciąg',
      value: 40
    },
    {
      id: 'ohp',
      name: 'Wyciskanie nad głową',
      value: 40
    },
    {
      id: 'rows',
      name: 'Wiosłowanie sztangą',
      value: 40
    },
    {
      id: 'pullUp',
      name: 'Podciąganie',
      value: 40
    },
    {
      id: 'bicep',
      name: 'Uginanie sztangi na biceps',
      value: 40
    },
    {
      id: 'tricep',
      name: 'Dipsy',
      value: 40
    },
    {
      id: 'facepull',
      name: 'Facepulls',
      value: 40
    }
  ],
  availibleWeights: ['2.5'],
  results: [
    {
      id: 'bench',
      name: 'Wyciskanie leżąc',
      data: [
        {
          reps: 21,
          load: 40
        },
        {
          reps: 16,
          load: 45
        },
        {
          reps: 20,
          load: 46
        }
      ]
    },
    {
      id: 'squat',
      name: 'Przysiad',
      data: [
        {
          reps: 21,
          load: 40
        },
        {
          reps: 16,
          load: 45
        },
        {
          reps: 20,
          load: 46
        },
        {
          reps: 16,
          load: 47.5
        }
      ]
    },
    {
      id: 'deadlift',
      name: 'Martwy ciąg',
      data: [
        {
          reps: 15,
          load: 60
        },
        {
          reps: 17,
          load: 62.5
        }
      ]
    },
    {
      id: 'ohp',
      name: 'Wyciskanie żołnierskie',
      data: [
        {
          reps: 13,
          load: 25
        },
        {
          reps: 16,
          load: 26
        }
      ]
    }
  ],
  currentWorkoutId: 2,
  workouts: [
    {
      id: 1,
      name: 'tydzień A trening A',
      excercises: [
        {
          name: 'Przysiad ze sztangą',
          excerciseKey: 'squat',
          lastSeriesAMRAP: true,
          series: ['5', '5'],
          seriesInfo: '2x5 | 1x5+'
        },
        {
          name: 'Wyciskanie leżąc',
          excerciseKey: 'bench',
          lastSeriesAMRAP: true,
          series: ['5', '5'],
          seriesInfo: '2x5 | 1x5+'
        },
        {
          name: 'Podciąganie',
          excerciseKey: 'pullUp',
          lastSeriesAMRAP: false,
          series: ['8', '8', '8'],
          seriesInfo: '3x6-8'
        },
        {
          name: 'Uginanie sztangi na biceps',
          excerciseKey: 'bicep',
          lastSeriesAMRAP: false,
          series: ['12', '12', '12'],
          seriesInfo: '3x10-12'
        }
      ]
    },
    {
      id: 2,
      name: 'tydzień A trening B',
      excercises: [
        {
          name: 'Martwy ciag',
          excerciseKey: 'deadlift',
          lastSeriesAMRAP: true,
          series: ['5', '5'],
          seriesInfo: '2x5 | 1x5+'
        },
        {
          name: 'Wyciskanie nad głowę sztangi stojąc',
          excerciseKey: 'ohp',
          lastSeriesAMRAP: true,
          series: ['5', '5'],
          seriesInfo: '2x5 | 1x5+'
        },
        {
          name: 'Wiosłowanie sztangą',
          excerciseKey: 'rows',
          lastSeriesAMRAP: false,
          series: ['8', '8', '8'],
          seriesInfo: '3x6-8'
        },
        {
          name: 'Dipsy',
          excerciseKey: 'tricep',
          lastSeriesAMRAP: false,
          series: ['8', '8', '8'],
          seriesInfo: '3x6-8'
        }
      ]
    }
  ]
}
