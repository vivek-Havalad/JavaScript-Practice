var input =  {

  establishments: [

    {

      'name': 'Apollo',

      'doctors': [

        {

          'id': 1,

          'name': 'Dr. Akshay Prabhu',

          'age': 30,

          'is_enabled': true,

        },

        {

          'id': 2,

          'name': 'Dr. Neetu',

          'age': 40,

          'is_enabled': false,

        }

      ],

    },
 {

      'name': 'Fortis',

      'doctors': [

        {

          'id': 1,

          'name': 'Dr. Akshay Prabhu',

          'age': 30,

          'is_enabled': true,

        },

        {

          'id': 3,

          'name': 'Dr. Amlaan',

          'age': 52,

          'is_enabled': true,

        }

      ],

    }

  ]

};


function transform(ins) {
	let p = [];
	let ids = [];	
	for(let i in ins) {
			let lst = ins[i];
		for(let k = 0; k < lst.length; k++) {
		for(let t = 0; t < lst[k]['doctors'].length; t++) {
				if(!ids.includes(lst[k]['doctors'][t]['id'])) {
				p.push(lst[k]['doctors'][t]);ids.push(lst[k]['doctors'][t]['id']);
				}
			}	
		}
	}
	console.log(p);
}
transform(input);
