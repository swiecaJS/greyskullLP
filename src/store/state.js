export default {
  basicLoads: {
    bench: 55,
    squat: 50,
    rows: 1,
    pullUp: 0,
    bicep: 15,
    tricep: 0,
    deadlift: 65,
    ohp: 30,
    facepull: 0
  },
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
  currentWorkoutId: 1,
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
    }
  ]
}
