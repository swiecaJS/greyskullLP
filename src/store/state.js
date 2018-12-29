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
        }
      ]
    }
  ]
}
