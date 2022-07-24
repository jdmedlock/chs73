const { init } = require('../serverless.js');

exports.handler = init({
	appDir: "_app",
	assets: new Set([".DS_Store","chs_be_a_hero.jpeg","chs_faculty_finley.jpeg","chs_friends.avif","chs_friends.jpeg","chs_graduation.jpeg","chs_graduation.webp","chs_homecoming.jpeg","chs_homecoming_float.jpeg","chs_lorimer_cemetary.jpeg","chs_memories.jpeg","chs_stay_tuned.png","chs_stay_tuned.png.back","chs_students_office.jpeg","chs_tiger.jpeg","chs_tiger.png","chs_tiger_192.png","chs_tiger_32.png","chs_tiger_36.png","chs_tiger_512.png","chs_tigerhunt.jpeg","dogwood_social_club.png","drury_plaza.jpeg","favicon.png","global.css","manifest.json"]),
	mimeTypes: {".jpeg":"image/jpeg",".avif":"image/avif",".webp":"image/webp",".png":"image/png",".css":"text/css",".json":"application/json"},
	_: {
		entry: {"file":"start-946cc750.js","js":["start-946cc750.js","chunks/index-ff1b2efb.js","chunks/index-332aa153.js","chunks/singletons-d1fb5791.js"],"css":[]},
		nodes: [
			() => Promise.resolve().then(() => require('../server/nodes/0.js')),
			() => Promise.resolve().then(() => require('../server/nodes/1.js')),
			() => Promise.resolve().then(() => require('../server/nodes/7.js')),
			() => Promise.resolve().then(() => require('../server/nodes/2.js')),
			() => Promise.resolve().then(() => require('../server/nodes/3.js')),
			() => Promise.resolve().then(() => require('../server/nodes/4.js')),
			() => Promise.resolve().then(() => require('../server/nodes/5.js')),
			() => Promise.resolve().then(() => require('../server/nodes/6.js')),
			() => Promise.resolve().then(() => require('../server/nodes/8.js')),
			() => Promise.resolve().then(() => require('../server/nodes/9.js')),
			() => Promise.resolve().then(() => require('../server/nodes/10.js'))
		],
		routes: [
			{
				type: 'page',
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				id: "classmate",
				pattern: /^\/classmate\/?$/,
				names: [],
				types: [],
				path: "/classmate",
				shadow: null,
				a: [0,3],
				b: [1]
			},
			{
				type: 'page',
				id: "classmates",
				pattern: /^\/classmates\/?$/,
				names: [],
				types: [],
				path: "/classmates",
				shadow: null,
				a: [0,4],
				b: [1]
			},
			{
				type: 'page',
				id: "events",
				pattern: /^\/events\/?$/,
				names: [],
				types: [],
				path: "/events",
				shadow: null,
				a: [0,5],
				b: [1]
			},
			{
				type: 'page',
				id: "faculty",
				pattern: /^\/faculty\/?$/,
				names: [],
				types: [],
				path: "/faculty",
				shadow: null,
				a: [0,6],
				b: [1]
			},
			{
				type: 'page',
				id: "facultymember",
				pattern: /^\/facultymember\/?$/,
				names: [],
				types: [],
				path: "/facultymember",
				shadow: null,
				a: [0,7],
				b: [1]
			},
			{
				type: 'page',
				id: "memoriam",
				pattern: /^\/memoriam\/?$/,
				names: [],
				types: [],
				path: "/memoriam",
				shadow: null,
				a: [0,8],
				b: [1]
			},
			{
				type: 'page',
				id: "tigerhunt",
				pattern: /^\/tigerhunt\/?$/,
				names: [],
				types: [],
				path: "/tigerhunt",
				shadow: null,
				a: [0,9],
				b: [1]
			},
			{
				type: 'page',
				id: "updatecontact",
				pattern: /^\/updatecontact\/?$/,
				names: [],
				types: [],
				path: "/updatecontact",
				shadow: null,
				a: [0,10],
				b: [1]
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
});
