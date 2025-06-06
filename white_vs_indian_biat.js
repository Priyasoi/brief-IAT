define(['pipAPI', 'https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.*/BIAT/qualtrics/qbiat6.js'], function(APIConstructor, iatExtension){
  var API = new APIConstructor();

  return iatExtension({
    practiceCategory1 : {
      name : 'Good',
      title : {
        media : {word : 'Good'},
        css : {color:'#2E8B57','font-size':'1.8em'},
        height : 4,
        startStimulus : {
          media : {word : 'Joy, Love, Peace, Wonderful'},
          css : {color:'#2E8B57','font-size':'1em'},
          height : 2
        }
      },
      stimulusMedia : [
        {word : 'Joy'},
        {word : 'Love'},
        {word : 'Peace'},
        {word : 'Wonderful'},
        {word : 'Pleasure'},
        {word : 'Friend'}
      ],
      stimulusCss : {color:'#2E8B57','font-size':'2em'}
    },
    practiceCategory2 : {
      name : 'Bad',
      title : {
        media : {word : 'Bad'},
        css : {color:'#B22222','font-size':'1.8em'},
        height : 4,
        startStimulus : {
          media : {word : 'Agony, Evil, War, Horrible'},
          css : {color:'#B22222','font-size':'1em'},
          height : 2
        }
      },
      stimulusMedia : [
        {word : 'Agony'},
        {word : 'Terrible'},
        {word : 'Horrible'},
        {word : 'Nasty'},
        {word : 'Evil'},
        {word : 'War'}
      ],
      stimulusCss : {color:'#B22222','font-size':'2em'}
    },
    categories : [
      {
        name : 'White People',
        title : {
          media : {word : 'White People'},
          css : {color:'#000080','font-size':'1.8em'},
          height : 4,
          startStimulus : {
            media : {word : 'Emily, Jake, Sarah, Ryan'},
            css : {color:'#000080','font-size':'1em'},
            height : 2
          }
        },
        stimulusMedia : [
          {word : 'Emily'},
          {word : 'Jake'},
          {word : 'Sarah'},
          {word : 'Ryan'},
          {word : 'Heather'},
          {word : 'Brandon'}
        ],
        stimulusCss : {color:'#000080','font-size':'2em'}
      },
      {
        name : 'Indian People',
        title : {
          media : {word : 'Indian People'},
          css : {color:'#800000','font-size':'1.8em'},
          height : 4,
          startStimulus : {
            media : {word : 'Priya, Rahul, Anjali, Arjun'},
            css : {color:'#800000','font-size':'1em'},
            height : 2
          }
        },
        stimulusMedia : [
          {word : 'Priya'},
          {word : 'Rahul'},
          {word : 'Anjali'},
          {word : 'Arjun'},
          {word : 'Neha'},
          {word : 'Ravi'}
        ],
        stimulusCss : {color:'#800000','font-size':'2em'}
      }
    ]
  });
});
