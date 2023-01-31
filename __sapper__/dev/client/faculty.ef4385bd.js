import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, M as validate_each_argument, v as validate_slots, e as element, t as text, n as space, c as claim_element, a as children, b as claim_text, f as detach_dev, p as claim_space, h as attr_dev, j as add_location, k as insert_dev, l as append_dev, x as noop, o as svg_element, A as create_component, B as claim_component, q as set_style, C as mount_component, D as transition_in, E as transition_out, F as destroy_component, N as destroy_each } from './client.eb25ceae.js';
import { L as LetterIndex, B as BackToTop, c as createNameIndex } from './LetterIndex.c81fe2ad.js';
import { c as createPersonGroups } from './createPersonGroups.7c5a2af0.js';

var faculty = [
	{
		confirmed: "FALSE",
		inYearbook: "",
		firstName: "Dallas",
		lastName: "Albers",
		department: "Administration",
		position: "Title III Project Director",
		deceased: "",
		cloudinaryId: "/chs_faculty/Dallas_Albers_vijwud.png"
	},
	{
		confirmed: "FALSE",
		inYearbook: "",
		firstName: "Lawrence",
		lastName: "Aeschlimann",
		department: "Practical Arts",
		position: "Typing",
		deceased: "",
		cloudinaryId: "/chs_faculty/Lawrence_Aeschilmann_wvj3hq.jpg"
	},
	{
		confirmed: "FALSE",
		inYearbook: "",
		firstName: "Jewell",
		lastName: "Beauchamp",
		department: "Vocational Technical",
		position: "Technical Design and Drafting",
		deceased: "",
		cloudinaryId: "/chs_faculty/Jewel_Beauchamp_i2yrkp.jpg"
	},
	{
		confirmed: "FALSE",
		inYearbook: "",
		firstName: "Jo Ann",
		lastName: "Bock",
		department: "English",
		position: "English II",
		deceased: "",
		cloudinaryId: "/chs_faculty/Jo_Ann_Bock_p7jibn.jpg"
	},
	{
		confirmed: "FALSE",
		inYearbook: "",
		firstName: "Joyce",
		lastName: "Bowen",
		department: "Library",
		position: "Librarian",
		deceased: "",
		cloudinaryId: "/chs_faculty/Joyce_Bowen_qgbkwi.jpg"
	},
	{
		confirmed: "TRUE",
		inYearbook: "",
		firstName: "Leon",
		lastName: "Brinkopf",
		department: "Administration",
		position: "Assistant Principal",
		deceased: "TRUE",
		cloudinaryId: "/chs_faculty/Leon_Brinkopf_j14is0.jpg"
	},
	{
		confirmed: "FALSE",
		inYearbook: "",
		firstName: "Roy",
		lastName: "Brunkhorst",
		department: "Vocational Technical",
		position: "Auto Mechanics",
		deceased: "",
		cloudinaryId: "/chs_faculty/Roy_Brunkhorst_bmd8e4.jpg"
	},
	{
		confirmed: "FALSE",
		inYearbook: "",
		firstName: "Norval",
		lastName: "Cannon",
		department: "Mathematics",
		position: "Refresher, 1A-1B, Intermediate, Consumer",
		deceased: "",
		cloudinaryId: "/chs_faculty/Narvol_Cannon_n1biqo.jpg"
	},
	{
		confirmed: "FALSE",
		inYearbook: "",
		firstName: "Mary",
		lastName: "Carter",
		department: "History",
		position: "Government, Family Relations",
		deceased: "",
		cloudinaryId: "/chs_faculty/Mary_Carter_do0da5.jpg"
	},
	{
		confirmed: "FALSE",
		inYearbook: "",
		firstName: "Wilma",
		lastName: "Copeland",
		department: "Practical Arts",
		position: "Home Economics",
		deceased: "",
		cloudinaryId: "/chs_faculty/Wilma_Copeland_mruz2t.jpg"
	},
	{
		confirmed: "FALSE",
		inYearbook: "",
		firstName: "Polly",
		lastName: "Crowley",
		department: "Mathematics",
		position: "II-III",
		deceased: "",
		cloudinaryId: "/chs_faculty/Polly_Crowley_qwbgll.jpg"
	},
	{
		confirmed: "FALSE",
		inYearbook: "",
		firstName: "Claire",
		lastName: "Decker",
		department: "Library",
		position: "Head Librarian",
		deceased: "",
		cloudinaryId: "/chs_faculty/Claire_Decker_zqu5ui.jpg"
	},
	{
		confirmed: "FALSE",
		inYearbook: "",
		firstName: "John",
		lastName: "Decker",
		department: "History",
		position: "World Geography, American History",
		deceased: "",
		cloudinaryId: "/chs_faculty/Jonathan_Decker_x8ncho.jpg"
	},
	{
		confirmed: "FALSE",
		inYearbook: "",
		firstName: "Charles",
		lastName: "Dickens",
		department: "Vocational Technical",
		position: "Technical Electronics",
		deceased: "",
		cloudinaryId: "/chs_faculty/Charles_Dickens_f5xsxs.jpg"
	},
	{
		confirmed: "FALSE",
		inYearbook: "",
		firstName: "William",
		lastName: "East",
		department: "Counseling",
		position: "Sophomore Counselor",
		deceased: "",
		cloudinaryId: "/chs_faculty/William_East_qzwxca.jpg"
	},
	{
		confirmed: "FALSE",
		inYearbook: "",
		firstName: "Barbara",
		lastName: "Ellison",
		department: "Practical Arts",
		position: "Basic Business",
		deceased: "",
		cloudinaryId: "/chs_faculty/Barbara_Ellison_ldwasb.jpg"
	},
	{
		confirmed: "FALSE",
		inYearbook: "",
		firstName: "Bill",
		lastName: "Ewing",
		department: "Music",
		position: "Instrumental",
		deceased: "",
		cloudinaryId: "/chs_faculty/Bill_Ewing_dursck.jpg"
	},
	{
		confirmed: "FALSE",
		inYearbook: "",
		firstName: "Clarence",
		lastName: "Findley",
		department: "History",
		position: "American History",
		deceased: "",
		cloudinaryId: "/chs_faculty/Clarence_Finley_ei78xr.jpg"
	},
	{
		confirmed: "FALSE",
		inYearbook: "",
		firstName: "Ralph",
		lastName: "Ford",
		department: "Vocational Technical",
		position: "Counselor",
		deceased: "",
		cloudinaryId: "/chs_faculty/Ralph_Ford_wo1nl3.jpg"
	},
	{
		confirmed: "FALSE",
		inYearbook: "",
		firstName: "Robert",
		lastName: "Gau",
		department: "Science",
		position: "Earth, Chemistry, & General",
		deceased: "",
		cloudinaryId: "/chs_faculty/Robert_Gau_xdbduc.jpg"
	},
	{
		confirmed: "FALSE",
		inYearbook: "",
		firstName: "Joy",
		lastName: "Gilbert",
		department: "English",
		position: "Speech I-II, Drama",
		deceased: "",
		cloudinaryId: "/chs_faculty/Joy_Gilbert_wxstwq.jpg"
	},
	{
		confirmed: "FALSE",
		inYearbook: "",
		firstName: "Gary",
		lastName: "Gilbert",
		department: "",
		position: "",
		deceased: "",
		cloudinaryId: "/chs_faculty/"
	},
	{
		confirmed: "FALSE",
		inYearbook: "",
		firstName: "Melvin",
		lastName: "Gilhaus",
		department: "Music",
		position: "Orchestra",
		deceased: "",
		cloudinaryId: "/chs_faculty/Melvin_Gilhaus_j6ejju.jpg"
	},
	{
		confirmed: "FALSE",
		inYearbook: "",
		firstName: "Weldon",
		lastName: "Hager",
		department: "Administration",
		deceased: "Director of Student Activities",
		position: "",
		cloudinaryId: "/chs_faculty/Weldon_Hager_v5z4cu.png"
	},
	{
		confirmed: "FALSE",
		inYearbook: "",
		firstName: "Sharon",
		lastName: "Hulcy",
		department: "Physical Education",
		position: "P.E., Health",
		deceased: "",
		cloudinaryId: "/chs_faculty/Sharon_Hulcy_rvgfe1.jpg"
	},
	{
		confirmed: "FALSE",
		inYearbook: "",
		firstName: "David",
		lastName: "Jaynes",
		department: "Practical Arts",
		position: "Power Mechanics, Metal Work",
		deceased: "",
		cloudinaryId: "/chs_faculty/David_Jaynes_w5bvri.jpg"
	},
	{
		confirmed: "FALSE",
		inYearbook: "",
		firstName: "Norris",
		lastName: "Johnson",
		department: "Science",
		position: "Physics & Chemistry",
		deceased: "",
		cloudinaryId: "/chs_faculty/Norris_Johnson_pvkg0m.jpg"
	},
	{
		confirmed: "FALSE",
		inYearbook: "",
		firstName: "Bettye",
		lastName: "Kester",
		department: "Art",
		position: "Art I-II, Painting & Drawing",
		deceased: "",
		cloudinaryId: "/chs_faculty/Bettye_Kester_spqhgn.jpg"
	},
	{
		confirmed: "FALSE",
		inYearbook: "",
		firstName: "Vivian",
		lastName: "Kies",
		department: "History",
		position: "American History",
		deceased: "",
		cloudinaryId: "/chs_faculty/Vivian_Kies_beuusq.jpg"
	},
	{
		confirmed: "FALSE",
		inYearbook: "",
		firstName: "Beverly",
		lastName: "King",
		department: "Library",
		position: "Library Assistant",
		deceased: "",
		cloudinaryId: "/chs_faculty/Beverly_King_fcdx4s.jpg"
	},
	{
		confirmed: "FALSE",
		inYearbook: "",
		firstName: "Robert",
		lastName: "King",
		department: "Administration, Drivers Ed.",
		position: "",
		deceased: "",
		cloudinaryId: "/chs_faculty/Robert_King_qjproz.jpg"
	},
	{
		confirmed: "FALSE",
		inYearbook: "",
		firstName: "Paul",
		lastName: "Kitchen",
		department: "Physical Education",
		position: "P.E., Health",
		deceased: "",
		cloudinaryId: "/chs_faculty/Paul_Kitchen_fxgqvi.jpg"
	},
	{
		confirmed: "FALSE",
		inYearbook: "",
		firstName: "Robert",
		lastName: "Knight",
		department: "History",
		position: "Contemporary Issues, Government, Economics",
		deceased: "",
		cloudinaryId: "/chs_faculty/Robert_Knight_djry4j.jpg"
	},
	{
		confirmed: "FALSE",
		inYearbook: "",
		firstName: "Orville",
		lastName: "Krauss",
		department: "Vocational Technical",
		position: "Marketing, COE, DE",
		deceased: "",
		cloudinaryId: "/chs_faculty/Orville_Krauss_hubyn8.jpg"
	},
	{
		confirmed: "FALSE",
		inYearbook: "",
		firstName: "Donald",
		lastName: "Lang",
		department: "Vocational Technical",
		position: "Marketing, COE, DE",
		deceased: "",
		cloudinaryId: "/chs_faculty/Donald_Lang_u27zak.jpg"
	},
	{
		confirmed: "FALSE",
		inYearbook: "",
		firstName: "Leon",
		lastName: "Lefler",
		department: "Physical Education",
		position: "P.E.",
		deceased: "",
		cloudinaryId: "/chs_faculty/Leon_Lefler_tqyi9i.jpg"
	},
	{
		confirmed: "FALSE",
		inYearbook: "",
		firstName: "Leonard",
		lastName: "Little",
		department: "Practical arts",
		position: "Electricity, Woodworking",
		deceased: "",
		cloudinaryId: "/chs_faculty/Leonard_Little_m1ro2b.jpg"
	},
	{
		confirmed: "FALSE",
		inYearbook: "",
		firstName: "Elizabeth",
		lastName: "Lockhart",
		department: "English",
		position: "Journalism I-II, Newspaper, Yearbook",
		deceased: "",
		cloudinaryId: "/chs_faculty/Elizabeth_Lockhart_ieixx7.jpg"
	},
	{
		confirmed: "FALSE",
		inYearbook: "",
		firstName: "Barbara",
		lastName: "Lohr",
		department: "",
		position: "",
		deceased: "",
		cloudinaryId: "/chs_faculty/"
	},
	{
		confirmed: "FALSE",
		inYearbook: "",
		firstName: "Raymond",
		lastName: "Long",
		department: "English",
		position: "English II, Speech I-II",
		deceased: "",
		cloudinaryId: "/chs_faculty/Raymond_Long_zbiweu.jpg"
	},
	{
		confirmed: "FALSE",
		inYearbook: "",
		firstName: "Gary",
		lastName: "Lynch",
		department: "Science",
		position: "Biology",
		deceased: "",
		cloudinaryId: "/chs_faculty/Gary_Lynch_t7g01g.jpg"
	},
	{
		confirmed: "FALSE",
		inYearbook: "",
		firstName: "Sheila",
		lastName: "Lynch",
		department: "",
		position: "",
		deceased: "",
		cloudinaryId: "/chs_faculty/Sheila_Lynch_rxx2jn.png"
	},
	{
		confirmed: "FALSE",
		inYearbook: "",
		firstName: "Jan",
		lastName: "Mabrey",
		department: "Administration",
		position: "Secretary",
		deceased: "",
		cloudinaryId: "/chs_faculty/Jan_Mabrey_f5ilya.jpg"
	},
	{
		confirmed: "FALSE",
		inYearbook: "",
		firstName: "Thomas J.",
		lastName: "McFerron",
		department: "Vocational Technical",
		position: "Auto Body and Fender",
		deceased: "",
		cloudinaryId: "/chs_faculty/TJ_McFerron_es4kfp.jpg"
	},
	{
		confirmed: "FALSE",
		inYearbook: "",
		firstName: "Chrolotte",
		lastName: "Malahy",
		department: "English",
		position: "Latin I-II",
		deceased: "",
		cloudinaryId: "/chs_faculty/Charlotte_Malahy_ltazgp.jpg"
	},
	{
		confirmed: "FALSE",
		inYearbook: "",
		firstName: "Doris",
		lastName: "Mason",
		department: "",
		position: "",
		deceased: "",
		cloudinaryId: "/chs_faculty/"
	},
	{
		confirmed: "FALSE",
		inYearbook: "",
		firstName: "Dale",
		lastName: "Meier",
		department: "Counseling",
		position: "Sr. Counselor",
		deceased: "",
		cloudinaryId: "/chs_faculty/Dale_Meier_wxws3t.jpg"
	},
	{
		confirmed: "FALSE",
		inYearbook: "",
		firstName: "Dan",
		lastName: "Milligan",
		department: "Physical Education",
		position: "P.E.",
		deceased: "",
		cloudinaryId: "/chs_faculty/Dan_Milligan_mlbbji.jpg"
	},
	{
		confirmed: "FALSE",
		inYearbook: "",
		firstName: "Billy",
		lastName: "Mize",
		department: "Vocational Technical",
		position: "Graphic Arts",
		deceased: "",
		cloudinaryId: "/chs_faculty/Billy_Mize_k6nwnp.jpg"
	},
	{
		confirmed: "FALSE",
		inYearbook: "",
		firstName: "Alta",
		lastName: "Muegge",
		department: "History",
		position: "American History",
		deceased: "",
		cloudinaryId: "/chs_faculty/Alta_Muegge_w3pyus.jpg"
	},
	{
		confirmed: "FALSE",
		inYearbook: "",
		firstName: "Melba",
		lastName: "Myers",
		department: "",
		position: "",
		deceased: "",
		cloudinaryId: "/chs_faculty/"
	},
	{
		confirmed: "FALSE",
		inYearbook: "",
		firstName: "Ford",
		lastName: "Phillips",
		department: "English",
		position: "English III",
		deceased: "",
		cloudinaryId: "/chs_faculty/Ford_Phillips_pvknyt.jpg"
	},
	{
		confirmed: "FALSE",
		inYearbook: "",
		firstName: "Everett",
		lastName: "Plunk",
		department: "Mathematics",
		position: "III, Intermediate II",
		deceased: "",
		cloudinaryId: "/chs_faculty/Everett_Plunk_q7ojym.jpg"
	},
	{
		inYearbook: "",
		firstName: "Karen",
		lastName: "Profilet",
		department: "Science",
		position: "Biology",
		deceased: "",
		cloudinaryId: "/chs_faculty/Karen_Profilet_nawwye.jpg"
	},
	{
		confirmed: "FALSE",
		inYearbook: "",
		firstName: "Dorothy",
		lastName: "Pulley",
		department: "Practical Arts",
		position: "Home Economics",
		deceased: "",
		cloudinaryId: "/chs_faculty/Dorothy_Pulley_gwuede.jpg"
	},
	{
		confirmed: "FALSE",
		inYearbook: "",
		firstName: "Fred",
		lastName: "Pulley",
		department: "Drivers Ed.",
		position: "Instructor",
		deceased: "",
		cloudinaryId: "/chs_faculty/Fred_Pulley_p5mfwu.jpg"
	},
	{
		confirmed: "FALSE",
		inYearbook: "",
		firstName: "Josephine",
		lastName: "Renfrow",
		department: "Art",
		position: "Ceramics and Art Appreciation",
		deceased: "",
		cloudinaryId: "/chs_faculty/Jo_Renfrow_unxqxe.jpg"
	},
	{
		confirmed: "FALSE",
		inYearbook: "",
		firstName: "Payne",
		lastName: "Rose",
		department: "Vocational Technical",
		position: "Welding",
		deceased: "",
		cloudinaryId: "/chs_faculty/Payne_Rose_t1wyyr.jpg"
	},
	{
		confirmed: "FALSE",
		inYearbook: "",
		firstName: "Jack",
		lastName: "Russell",
		department: "Drivers Ed.",
		position: "Instructor",
		deceased: "",
		cloudinaryId: "/chs_faculty/Jack_Russell_xtqrwm.jpg"
	},
	{
		confirmed: "FALSE",
		inYearbook: "",
		firstName: "Alene",
		lastName: "Sadler",
		department: "English",
		position: "English IV, Humanities",
		deceased: "",
		cloudinaryId: "/chs_faculty/Alene_Sadler_rdu8wn.jpg"
	},
	{
		confirmed: "FALSE",
		inYearbook: "",
		firstName: "Joyce",
		lastName: "Sander",
		department: "Vocational Technical",
		position: "Child Care, Vocational Sewing",
		deceased: "",
		cloudinaryId: "/chs_faculty/Joyce_Sander_tidzss.jpg"
	},
	{
		confirmed: "FALSE",
		inYearbook: "",
		firstName: "Norma",
		lastName: "Sander",
		department: "Physical Education",
		position: "P.E.",
		deceased: "",
		cloudinaryId: "/chs_faculty/Norma_Sander_yof0iv.jpg"
	},
	{
		confirmed: "FALSE",
		inYearbook: "",
		firstName: "Charlotte",
		lastName: "Scherer",
		department: "Practical Arts",
		position: "Business",
		deceased: "",
		cloudinaryId: "/chs_faculty/Charlotte_Scherer_temdwr.jpg"
	},
	{
		confirmed: "FALSE",
		inYearbook: "",
		firstName: "Anthony",
		lastName: "Schuch",
		department: "Art",
		position: "Painting",
		deceased: "",
		cloudinaryId: "/chs_faculty/Anthony_Schuch_gmbdvx.jpg"
	},
	{
		confirmed: "FALSE",
		inYearbook: "",
		firstName: "Raymond",
		lastName: "Seyer",
		department: "Vocational Technical",
		position: "Auto Mechanics",
		deceased: "",
		cloudinaryId: "/chs_faculty/Ray_Seyer_kjoct1.jpg"
	},
	{
		confirmed: "FALSE",
		inYearbook: "",
		firstName: "Barbara",
		lastName: "Shock",
		department: "English",
		position: "Special Ed.",
		deceased: "",
		cloudinaryId: "/chs_faculty/Barbara_Shock_hwz6xg.jpg"
	},
	{
		confirmed: "FALSE",
		inYearbook: "",
		firstName: "Eugene",
		lastName: "Sifford",
		department: "Administration",
		position: "Principal",
		deceased: "",
		cloudinaryId: "/chs_faculty/Eugene_Sifford_jacqyz.jpg"
	},
	{
		confirmed: "FALSE",
		inYearbook: "",
		firstName: "Mary",
		lastName: "Sivia",
		department: "English",
		position: "French I-IV",
		deceased: "",
		cloudinaryId: "/chs_faculty/Mary_Siva_sxlpfk.jpg"
	},
	{
		confirmed: "FALSE",
		inYearbook: "",
		firstName: "Inez",
		lastName: "Smith",
		department: "English",
		position: "English IV, Composition",
		deceased: "",
		cloudinaryId: "/chs_faculty/Inez_Smith_vmbrpf.jpg"
	},
	{
		confirmed: "FALSE",
		inYearbook: "",
		firstName: "Gail",
		lastName: "Snider",
		department: "English",
		position: "Reading Improvement, English III",
		deceased: "",
		cloudinaryId: "/chs_faculty/Gail_Snider_hqbv10.jpg"
	},
	{
		confirmed: "FALSE",
		inYearbook: "",
		firstName: "Margaret",
		lastName: "Snider",
		department: "Counseling",
		position: "Junior Counselor",
		deceased: "",
		cloudinaryId: "/chs_faculty/Margret_Snider_h3tixz.jpg"
	},
	{
		confirmed: "FALSE",
		inYearbook: "",
		firstName: "Mike",
		lastName: "Sturm",
		department: "Physical Education",
		position: "P.E., Study Hall",
		deceased: "",
		cloudinaryId: "/chs_faculty/Mike_Sturm_tnpvic.jpg"
	},
	{
		confirmed: "FALSE",
		inYearbook: "",
		firstName: "Marsha",
		lastName: "Taylor",
		department: "English",
		position: "English III",
		deceased: "",
		cloudinaryId: "/chs_faculty/Marsha_Taylor_faehuw.jpg"
	},
	{
		confirmed: "FALSE",
		inYearbook: "",
		firstName: "Ann",
		lastName: "Teeters",
		department: "Administration",
		position: "Secretary",
		deceased: "",
		cloudinaryId: "/chs_faculty/Ann_Teeters_kkymsr.jpg"
	},
	{
		confirmed: "FALSE",
		inYearbook: "",
		firstName: "Ellen",
		lastName: "Towse",
		department: "Physical Education",
		position: "P.E.",
		deceased: "",
		cloudinaryId: "/chs_faculty/Ellen_Towse_yekzsc.jpg"
	},
	{
		confirmed: "FALSE",
		inYearbook: "",
		firstName: "Marie",
		lastName: "Trucky",
		department: "Physical Education",
		position: "School Nurse",
		deceased: "",
		cloudinaryId: "/chs_faculty/Marie_Truckey_vvjxp6.jpg"
	},
	{
		confirmed: "FALSE",
		inYearbook: "",
		firstName: "Jesse",
		lastName: "Varnon",
		department: "Practical Arts",
		position: "Drafting, Metal Work",
		deceased: "",
		cloudinaryId: "/chs_faculty/Jesse_Varnon_rez5os.jpg"
	},
	{
		confirmed: "FALSE",
		inYearbook: "",
		firstName: "Glennata",
		lastName: "Vogelsang",
		department: "Administration",
		position: "Secretary",
		deceased: "",
		cloudinaryId: "/chs_faculty/Glenneta_Vogelsang_ekrp04.jpg"
	},
	{
		confirmed: "FALSE",
		inYearbook: "",
		firstName: "Mildred",
		lastName: "Vogelsang",
		department: "",
		position: "",
		deceased: "",
		cloudinaryId: "/chs_faculty/"
	},
	{
		confirmed: "FALSE",
		inYearbook: "",
		firstName: "Eugene",
		lastName: "Warner",
		department: "Vocational Technical",
		position: "Refrigeration",
		deceased: "",
		cloudinaryId: "/chs_faculty/"
	},
	{
		confirmed: "FALSE",
		inYearbook: "",
		firstName: "Joe",
		lastName: "Warren",
		department: "Vocational Technical",
		position: "Refrigeration, Air Conditioning",
		deceased: "",
		cloudinaryId: "/chs_faculty/Eugene_Warner_guwukg.jpg"
	},
	{
		confirmed: "FALSE",
		inYearbook: "",
		firstName: "Grace",
		lastName: "Williams",
		department: "Mathematics",
		position: "II, III, IV, V",
		deceased: "",
		cloudinaryId: "/chs_faculty/Grace_Williams_v1vb9v.jpg"
	},
	{
		confirmed: "FALSE",
		inYearbook: "",
		firstName: "Judy",
		lastName: "Williams",
		department: "Music",
		position: "Vocal",
		deceased: "",
		cloudinaryId: "/chs_faculty/Judy_Williams_co2ix8.jpg"
	},
	{
		confirmed: "FALSE",
		inYearbook: "",
		firstName: "Linda",
		lastName: "Williams",
		department: "",
		position: "",
		deceased: "",
		cloudinaryId: "/chs_faculty/"
	},
	{
		confirmed: "FALSE",
		inYearbook: "",
		firstName: "Roscoe",
		lastName: "Williams",
		department: "Vocational Technical",
		position: "Data Processing",
		deceased: "",
		cloudinaryId: "/chs_faculty/Roscoe_Williams_ckb1vz.jpg"
	},
	{
		confirmed: "FALSE",
		inYearbook: "",
		firstName: "Fred",
		lastName: "Withrow",
		department: "History",
		position: "American History",
		deceased: "",
		cloudinaryId: "/chs_faculty/Fred_Withrow_s3akro.jpg"
	},
	{
		confirmed: "FALSE",
		inYearbook: "",
		firstName: "Jerry",
		lastName: "Witvoet",
		department: "History",
		position: "Psychology, Sociology, American History",
		deceased: "",
		cloudinaryId: "/chs_faculty/Jerry_Witvoet_har15k.jpg"
	},
	{
		confirmed: "FALSE",
		inYearbook: "",
		firstName: "Jerry",
		lastName: "Woemmel",
		department: "Practical Arts",
		position: "Typing, Business",
		deceased: "",
		cloudinaryId: "/chs_faculty/Jerry_Woemmel_otvhkp.jpg"
	},
	{
		confirmed: "FALSE",
		inYearbook: "",
		firstName: "Irene",
		lastName: "Wright",
		department: "",
		position: "",
		deceased: "",
		cloudinaryId: "/chs_faculty/"
	},
	{
		confirmed: "FALSE",
		inYearbook: "",
		firstName: "Katherine",
		lastName: "Wulfers",
		department: "",
		position: "",
		deceased: "",
		cloudinaryId: "/chs_faculty/"
	},
	{
		confirmed: "FALSE",
		inYearbook: "",
		firstName: "Opal",
		lastName: "Young",
		department: "",
		position: "",
		deceased: "",
		cloudinaryId: "/chs_faculty/"
	}
];

/* src/routes/faculty.svelte generated by Svelte v3.35.0 */
const file = "src/routes/faculty.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[3] = list[i];
	return child_ctx;
}

function get_each_context_1(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[3] = list[i];
	return child_ctx;
}

// (65:10) {#each facultyColumn1 as facultyMember}
function create_each_block_1(ctx) {
	let li;
	let a;
	let t0_value = /*facultyMember*/ ctx[3].name + "";
	let t0;
	let t1;

	const block = {
		c: function create() {
			li = element("li");
			a = element("a");
			t0 = text(t0_value);
			t1 = space();
			this.h();
		},
		l: function claim(nodes) {
			li = claim_element(nodes, "LI", { class: true });
			var li_nodes = children(li);
			a = claim_element(li_nodes, "A", { id: true, href: true });
			var a_nodes = children(a);
			t0 = claim_text(a_nodes, t0_value);
			a_nodes.forEach(detach_dev);
			t1 = claim_space(li_nodes);
			li_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(a, "id", /*facultyMember*/ ctx[3].name.toLowerCase().replace(/\s+/g, ""));
			attr_dev(a, "href", "facultymember?back=faculty&firstName=" + /*facultyMember*/ ctx[3].firstName + "&name=" + /*facultyMember*/ ctx[3].name + "&photoId=" + /*facultyMember*/ ctx[3].cloudinaryId + "&department=" + /*facultyMember*/ ctx[3].department + "&position=" + /*facultyMember*/ ctx[3].position + "&deceased=" + /*facultyMember*/ ctx[3].deceased + "&confirmed=" + /*facultyMember*/ ctx[3].confirmed);
			add_location(a, file, 66, 14, 2478);
			attr_dev(li, "class", "mt-2 transition duration-300 ease-in-out hover:text-orange-500 hover:font-semibold hover:bg-gray-300 transform hover:-translate-y-0 hover:scale-110");
			add_location(li, file, 65, 12, 2303);
		},
		m: function mount(target, anchor) {
			insert_dev(target, li, anchor);
			append_dev(li, a);
			append_dev(a, t0);
			append_dev(li, t1);
		},
		p: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(li);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block_1.name,
		type: "each",
		source: "(65:10) {#each facultyColumn1 as facultyMember}",
		ctx
	});

	return block;
}

// (75:10) {#each facultyColumn2 as facultyMember}
function create_each_block(ctx) {
	let li;
	let a;
	let t0_value = /*facultyMember*/ ctx[3].name + "";
	let t0;
	let t1;

	const block = {
		c: function create() {
			li = element("li");
			a = element("a");
			t0 = text(t0_value);
			t1 = space();
			this.h();
		},
		l: function claim(nodes) {
			li = claim_element(nodes, "LI", { class: true });
			var li_nodes = children(li);
			a = claim_element(li_nodes, "A", { id: true, href: true });
			var a_nodes = children(a);
			t0 = claim_text(a_nodes, t0_value);
			a_nodes.forEach(detach_dev);
			t1 = claim_space(li_nodes);
			li_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(a, "id", /*facultyMember*/ ctx[3].name.toLowerCase().replace(/\s+/g, ""));
			attr_dev(a, "href", "facultymember?back=faculty&firstName=" + /*facultyMember*/ ctx[3].firstName + "&name=" + /*facultyMember*/ ctx[3].name + "&photoId=" + /*facultyMember*/ ctx[3].cloudinaryId + "&department=" + /*facultyMember*/ ctx[3].department + "&position=" + /*facultyMember*/ ctx[3].position + "&deceased=" + /*facultyMember*/ ctx[3].deceased + "&confirmed=" + /*facultyMember*/ ctx[3].confirmed);
			add_location(a, file, 76, 14, 3262);
			attr_dev(li, "class", "mt-2 transition duration-300 ease-in-out hover:text-orange-500 hover:font-semibold hover:bg-gray-300 transform hover:-translate-y-0 hover:scale-110");
			add_location(li, file, 75, 12, 3087);
		},
		m: function mount(target, anchor) {
			insert_dev(target, li, anchor);
			append_dev(li, a);
			append_dev(a, t0);
			append_dev(li, t1);
		},
		p: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(li);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block.name,
		type: "each",
		source: "(75:10) {#each facultyColumn2 as facultyMember}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let section;
	let div0;
	let svg;
	let polygon;
	let t0;
	let div8;
	let div1;
	let h1;
	let t1;
	let t2;
	let div4;
	let div3;
	let div2;
	let picture;
	let img;
	let img_src_value;
	let t3;
	let div7;
	let div5;
	let p;
	let em;
	let t4;
	let t5;
	let t6;
	let letterindex;
	let t7;
	let div6;
	let ul0;
	let t8;
	let ul1;
	let t9;
	let backtotop;
	let current;

	letterindex = new LetterIndex({
			props: {
				pageName: "faculty",
				letterIndex: /*letterIndex*/ ctx[2]
			},
			$$inline: true
		});

	let each_value_1 = /*facultyColumn1*/ ctx[0];
	validate_each_argument(each_value_1);
	let each_blocks_1 = [];

	for (let i = 0; i < each_value_1.length; i += 1) {
		each_blocks_1[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
	}

	let each_value = /*facultyColumn2*/ ctx[1];
	validate_each_argument(each_value);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	backtotop = new BackToTop({
			props: { back: "faculty" },
			$$inline: true
		});

	const block = {
		c: function create() {
			section = element("section");
			div0 = element("div");
			svg = svg_element("svg");
			polygon = svg_element("polygon");
			t0 = space();
			div8 = element("div");
			div1 = element("div");
			h1 = element("h1");
			t1 = text("Faculty & Staff of 1973");
			t2 = space();
			div4 = element("div");
			div3 = element("div");
			div2 = element("div");
			picture = element("picture");
			img = element("img");
			t3 = space();
			div7 = element("div");
			div5 = element("div");
			p = element("p");
			em = element("em");
			t4 = text("Click");
			t5 = text(" on a name to see more.");
			t6 = space();
			create_component(letterindex.$$.fragment);
			t7 = space();
			div6 = element("div");
			ul0 = element("ul");

			for (let i = 0; i < each_blocks_1.length; i += 1) {
				each_blocks_1[i].c();
			}

			t8 = space();
			ul1 = element("ul");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			t9 = space();
			create_component(backtotop.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			section = claim_element(nodes, "SECTION", { class: true });
			var section_nodes = children(section);
			div0 = claim_element(section_nodes, "DIV", { class: true, style: true });
			var div0_nodes = children(div0);

			svg = claim_element(
				div0_nodes,
				"svg",
				{
					class: true,
					xmlns: true,
					preserveAspectRatio: true,
					version: true,
					viewBox: true,
					x: true,
					y: true
				},
				1
			);

			var svg_nodes = children(svg);
			polygon = claim_element(svg_nodes, "polygon", { class: true, points: true }, 1);
			children(polygon).forEach(detach_dev);
			svg_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			t0 = claim_space(section_nodes);
			div8 = claim_element(section_nodes, "DIV", { class: true });
			var div8_nodes = children(div8);
			div1 = claim_element(div8_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			h1 = claim_element(div1_nodes, "H1", { class: true });
			var h1_nodes = children(h1);
			t1 = claim_text(h1_nodes, "Faculty & Staff of 1973");
			h1_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			t2 = claim_space(div8_nodes);
			div4 = claim_element(div8_nodes, "DIV", { class: true });
			var div4_nodes = children(div4);
			div3 = claim_element(div4_nodes, "DIV", { class: true });
			var div3_nodes = children(div3);
			div2 = claim_element(div3_nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			picture = claim_element(div2_nodes, "PICTURE", {});
			var picture_nodes = children(picture);
			img = claim_element(picture_nodes, "IMG", { alt: true, class: true, src: true });
			picture_nodes.forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			div3_nodes.forEach(detach_dev);
			div4_nodes.forEach(detach_dev);
			t3 = claim_space(div8_nodes);
			div7 = claim_element(div8_nodes, "DIV", { class: true });
			var div7_nodes = children(div7);
			div5 = claim_element(div7_nodes, "DIV", { class: true });
			var div5_nodes = children(div5);
			p = claim_element(div5_nodes, "P", {});
			var p_nodes = children(p);
			em = claim_element(p_nodes, "EM", {});
			var em_nodes = children(em);
			t4 = claim_text(em_nodes, "Click");
			em_nodes.forEach(detach_dev);
			t5 = claim_text(p_nodes, " on a name to see more.");
			p_nodes.forEach(detach_dev);
			div5_nodes.forEach(detach_dev);
			t6 = claim_space(div7_nodes);
			claim_component(letterindex.$$.fragment, div7_nodes);
			t7 = claim_space(div7_nodes);
			div6 = claim_element(div7_nodes, "DIV", { class: true });
			var div6_nodes = children(div6);
			ul0 = claim_element(div6_nodes, "UL", { class: true });
			var ul0_nodes = children(ul0);

			for (let i = 0; i < each_blocks_1.length; i += 1) {
				each_blocks_1[i].l(ul0_nodes);
			}

			ul0_nodes.forEach(detach_dev);
			t8 = claim_space(div6_nodes);
			ul1 = claim_element(div6_nodes, "UL", { class: true });
			var ul1_nodes = children(ul1);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(ul1_nodes);
			}

			ul1_nodes.forEach(detach_dev);
			t9 = claim_space(div6_nodes);
			claim_component(backtotop.$$.fragment, div6_nodes);
			div6_nodes.forEach(detach_dev);
			div7_nodes.forEach(detach_dev);
			div8_nodes.forEach(detach_dev);
			section_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(polygon, "class", "text-white fill-current");
			attr_dev(polygon, "points", "2560 0 2560 100 0 100");
			add_location(polygon, file, 27, 6, 867);
			attr_dev(svg, "class", "absolute bottom-0 overflow-hidden");
			attr_dev(svg, "xmlns", "http://www.w3.org/2000/svg");
			attr_dev(svg, "preserveAspectRatio", "none");
			attr_dev(svg, "version", "1.1");
			attr_dev(svg, "viewBox", "0 0 2560 100");
			attr_dev(svg, "x", "0");
			attr_dev(svg, "y", "0");
			add_location(svg, file, 19, 4, 660);
			attr_dev(div0, "class", "bottom-auto top-0 left-0 right-0 w-full absolute\n    pointer-events-none overflow-hidden -mt-20");
			set_style(div0, "height", "80px");
			add_location(div0, file, 15, 2, 516);
			attr_dev(h1, "class", "my-12 text-3xl md:text-5xl font-semibold text-center");
			add_location(h1, file, 36, 6, 1126);
			attr_dev(div1, "class", "flex w-full justify-center");
			add_location(div1, file, 35, 4, 1079);
			attr_dev(img, "alt", "Faculty");
			attr_dev(img, "class", "max-w-screen-sm lg:max-w-full h-20 md:h-28 lg:h-96 \n                shadow-xl-orange lg:shadow-2xl-orange \n                ml-0 md:ml-0 lg:ml-0 mb-12 md:mb-8 lg:mb-none\n                transform scale-200 md:scale-150 lg:scale-100");
			if (img.src !== (img_src_value = "chs_faculty_finley.jpeg")) attr_dev(img, "src", img_src_value);
			add_location(img, file, 43, 12, 1431);
			add_location(picture, file, 42, 10, 1409);
			attr_dev(div2, "class", "flex flex-wrap w-full m-0 p-0 justify-center");
			add_location(div2, file, 41, 8, 1340);
			attr_dev(div3, "class", "flex max-w-full mb-4 content-start");
			add_location(div3, file, 40, 6, 1283);
			attr_dev(div4, "class", "flex justify-center w-full");
			add_location(div4, file, 39, 4, 1236);
			add_location(em, file, 57, 11, 2005);
			add_location(p, file, 57, 8, 2002);
			attr_dev(div5, "class", "flex flex-wrap place-content-center w-full");
			add_location(div5, file, 56, 6, 1937);
			attr_dev(ul0, "class", "text-lg text-gray-600 leading-tight");
			add_location(ul0, file, 63, 8, 2192);
			attr_dev(ul1, "class", "ml-0 md:ml-6 text-lg text-gray-600 leading-tight");
			add_location(ul1, file, 73, 8, 2963);
			attr_dev(div6, "class", "flex w-full justify-center");
			add_location(div6, file, 62, 6, 2143);
			attr_dev(div7, "class", "md:flex-row justify-center w-full lg:w-1/2 ml-1 p-4 border-gray-300 border-2 shadow-2xl");
			add_location(div7, file, 55, 4, 1829);
			attr_dev(div8, "class", "container flex flex-wrap justify-center w-full lg:7/12 mx-auto lg:py-none px-4");
			add_location(div8, file, 33, 2, 981);
			attr_dev(section, "class", "relative py-12 lg:py-20");
			add_location(section, file, 14, 0, 472);
		},
		m: function mount(target, anchor) {
			insert_dev(target, section, anchor);
			append_dev(section, div0);
			append_dev(div0, svg);
			append_dev(svg, polygon);
			append_dev(section, t0);
			append_dev(section, div8);
			append_dev(div8, div1);
			append_dev(div1, h1);
			append_dev(h1, t1);
			append_dev(div8, t2);
			append_dev(div8, div4);
			append_dev(div4, div3);
			append_dev(div3, div2);
			append_dev(div2, picture);
			append_dev(picture, img);
			append_dev(div8, t3);
			append_dev(div8, div7);
			append_dev(div7, div5);
			append_dev(div5, p);
			append_dev(p, em);
			append_dev(em, t4);
			append_dev(p, t5);
			append_dev(div7, t6);
			mount_component(letterindex, div7, null);
			append_dev(div7, t7);
			append_dev(div7, div6);
			append_dev(div6, ul0);

			for (let i = 0; i < each_blocks_1.length; i += 1) {
				each_blocks_1[i].m(ul0, null);
			}

			append_dev(div6, t8);
			append_dev(div6, ul1);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(ul1, null);
			}

			append_dev(div6, t9);
			mount_component(backtotop, div6, null);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*facultyColumn1*/ 1) {
				each_value_1 = /*facultyColumn1*/ ctx[0];
				validate_each_argument(each_value_1);
				let i;

				for (i = 0; i < each_value_1.length; i += 1) {
					const child_ctx = get_each_context_1(ctx, each_value_1, i);

					if (each_blocks_1[i]) {
						each_blocks_1[i].p(child_ctx, dirty);
					} else {
						each_blocks_1[i] = create_each_block_1(child_ctx);
						each_blocks_1[i].c();
						each_blocks_1[i].m(ul0, null);
					}
				}

				for (; i < each_blocks_1.length; i += 1) {
					each_blocks_1[i].d(1);
				}

				each_blocks_1.length = each_value_1.length;
			}

			if (dirty & /*facultyColumn2*/ 2) {
				each_value = /*facultyColumn2*/ ctx[1];
				validate_each_argument(each_value);
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(ul1, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value.length;
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(letterindex.$$.fragment, local);
			transition_in(backtotop.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(letterindex.$$.fragment, local);
			transition_out(backtotop.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(section);
			destroy_component(letterindex);
			destroy_each(each_blocks_1, detaching);
			destroy_each(each_blocks, detaching);
			destroy_component(backtotop);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Faculty", slots, []);
	const [facultyColumn1, facultyColumn2] = createPersonGroups(faculty);
	const letterIndex = createNameIndex(facultyColumn1.concat(facultyColumn2));
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Faculty> was created with unknown prop '${key}'`);
	});

	$$self.$capture_state = () => ({
		faculty,
		createNameIndex,
		createPersonGroups,
		BackToTop,
		LetterIndex,
		facultyColumn1,
		facultyColumn2,
		letterIndex
	});

	return [facultyColumn1, facultyColumn2, letterIndex];
}

class Faculty extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Faculty",
			options,
			id: create_fragment.name
		});
	}
}

export default Faculty;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjdWx0eS5lZjQzODViZC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3JvdXRlcy9mYWN1bHR5LnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0PlxuICBpbXBvcnQgZmFjdWx0eSBmcm9tICcuLi9hc3NldHMvZmFjdWx0eS5qc29uJ1xuICBpbXBvcnQgY3JlYXRlTmFtZUluZGV4IGZyb20gJy4uL3V0aWxzL2NyZWF0ZU5hbWVJbmRleCdcbiAgaW1wb3J0IGNyZWF0ZVBlcnNvbkdyb3VwcyBmcm9tICcuLi91dGlscy9jcmVhdGVQZXJzb25Hcm91cHMnXG4gIGltcG9ydCBCYWNrVG9Ub3AgZnJvbSAnLi4vY29tcG9uZW50cy9CYWNrVG9Ub3Auc3ZlbHRlJ1xuICBpbXBvcnQgTGV0dGVySW5kZXggZnJvbSAnLi4vY29tcG9uZW50cy9MZXR0ZXJJbmRleC5zdmVsdGUnXG5cbiAgY29uc3QgW2ZhY3VsdHlDb2x1bW4xLCBmYWN1bHR5Q29sdW1uMl0gPSBjcmVhdGVQZXJzb25Hcm91cHMoZmFjdWx0eSlcbiAgY29uc3QgbGV0dGVySW5kZXggPSBjcmVhdGVOYW1lSW5kZXgoZmFjdWx0eUNvbHVtbjEuY29uY2F0KGZhY3VsdHlDb2x1bW4yKSlcbjwvc2NyaXB0PlxuXG48c3R5bGU+XG48L3N0eWxlPlxuXG48c2VjdGlvbiBjbGFzcz1cInJlbGF0aXZlIHB5LTEyIGxnOnB5LTIwXCI+XG4gIDxkaXZcbiAgICBjbGFzcz1cImJvdHRvbS1hdXRvIHRvcC0wIGxlZnQtMCByaWdodC0wIHctZnVsbCBhYnNvbHV0ZVxuICAgIHBvaW50ZXItZXZlbnRzLW5vbmUgb3ZlcmZsb3ctaGlkZGVuIC1tdC0yMFwiXG4gICAgc3R5bGU9XCJoZWlnaHQ6IDgwcHg7XCI+XG4gICAgPHN2Z1xuICAgICAgY2xhc3M9XCJhYnNvbHV0ZSBib3R0b20tMCBvdmVyZmxvdy1oaWRkZW5cIlxuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICBwcmVzZXJ2ZUFzcGVjdFJhdGlvPVwibm9uZVwiXG4gICAgICB2ZXJzaW9uPVwiMS4xXCJcbiAgICAgIHZpZXdCb3g9XCIwIDAgMjU2MCAxMDBcIlxuICAgICAgeD1cIjBcIlxuICAgICAgeT1cIjBcIj5cbiAgICAgIDxwb2x5Z29uXG4gICAgICAgIGNsYXNzPVwidGV4dC13aGl0ZSBmaWxsLWN1cnJlbnRcIlxuICAgICAgICBwb2ludHM9XCIyNTYwIDAgMjU2MCAxMDAgMCAxMDBcIiAvPlxuICAgIDwvc3ZnPlxuICA8L2Rpdj5cblxuICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyIGZsZXggZmxleC13cmFwIGp1c3RpZnktY2VudGVyIHctZnVsbCBsZzo3LzEyIG14LWF1dG8gbGc6cHktbm9uZSBweC00XCI+XG5cbiAgICA8ZGl2IGNsYXNzPVwiZmxleCB3LWZ1bGwganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgIDxoMSBjbGFzcz1cIm15LTEyIHRleHQtM3hsIG1kOnRleHQtNXhsIGZvbnQtc2VtaWJvbGQgdGV4dC1jZW50ZXJcIj5GYWN1bHR5ICYgU3RhZmYgb2YgMTk3MzwvaDE+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwiZmxleCBqdXN0aWZ5LWNlbnRlciB3LWZ1bGxcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IG1heC13LWZ1bGwgbWItNCBjb250ZW50LXN0YXJ0XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGZsZXgtd3JhcCB3LWZ1bGwgbS0wIHAtMCBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgIDxwaWN0dXJlPlxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBhbHQ9XCJGYWN1bHR5XCJcbiAgICAgICAgICAgICAgY2xhc3M9XCJtYXgtdy1zY3JlZW4tc20gbGc6bWF4LXctZnVsbCBoLTIwIG1kOmgtMjggbGc6aC05NiBcbiAgICAgICAgICAgICAgICBzaGFkb3cteGwtb3JhbmdlIGxnOnNoYWRvdy0yeGwtb3JhbmdlIFxuICAgICAgICAgICAgICAgIG1sLTAgbWQ6bWwtMCBsZzptbC0wIG1iLTEyIG1kOm1iLTggbGc6bWItbm9uZVxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybSBzY2FsZS0yMDAgbWQ6c2NhbGUtMTUwIGxnOnNjYWxlLTEwMFwiXG4gICAgICAgICAgICAgIHNyYz1cImNoc19mYWN1bHR5X2ZpbmxleS5qcGVnXCIgLz5cbiAgICAgICAgICA8L3BpY3R1cmU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwibWQ6ZmxleC1yb3cganVzdGlmeS1jZW50ZXIgdy1mdWxsIGxnOnctMS8yIG1sLTEgcC00IGJvcmRlci1ncmF5LTMwMCBib3JkZXItMiBzaGFkb3ctMnhsXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiZmxleCBmbGV4LXdyYXAgcGxhY2UtY29udGVudC1jZW50ZXIgdy1mdWxsXCI+XG4gICAgICAgIDxwPjxlbT5DbGljazwvZW0+IG9uIGEgbmFtZSB0byBzZWUgbW9yZS48L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgIFxuICAgICAgPExldHRlckluZGV4IHBhZ2VOYW1lPVwiZmFjdWx0eVwiIGxldHRlckluZGV4PXsgbGV0dGVySW5kZXggfSAvPlxuXG4gICAgICA8ZGl2IGNsYXNzPVwiZmxleCB3LWZ1bGwganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgPHVsIGNsYXNzPVwidGV4dC1sZyB0ZXh0LWdyYXktNjAwIGxlYWRpbmctdGlnaHRcIj5cbiAgICAgICAgICB7I2VhY2ggZmFjdWx0eUNvbHVtbjEgYXMgZmFjdWx0eU1lbWJlcn1cbiAgICAgICAgICAgIDxsaSBjbGFzcz1cIm10LTIgdHJhbnNpdGlvbiBkdXJhdGlvbi0zMDAgZWFzZS1pbi1vdXQgaG92ZXI6dGV4dC1vcmFuZ2UtNTAwIGhvdmVyOmZvbnQtc2VtaWJvbGQgaG92ZXI6YmctZ3JheS0zMDAgdHJhbnNmb3JtIGhvdmVyOi10cmFuc2xhdGUteS0wIGhvdmVyOnNjYWxlLTExMFwiPlxuICAgICAgICAgICAgICA8YSBpZD1cInsgZmFjdWx0eU1lbWJlci5uYW1lLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvXFxzKy9nLCAnJykgfVwiXG4gICAgICAgICAgICAgICAgaHJlZj1cImZhY3VsdHltZW1iZXI/YmFjaz1mYWN1bHR5JmZpcnN0TmFtZT17IGZhY3VsdHlNZW1iZXIuZmlyc3ROYW1lIH0mbmFtZT17IGZhY3VsdHlNZW1iZXIubmFtZSB9JnBob3RvSWQ9eyBmYWN1bHR5TWVtYmVyLmNsb3VkaW5hcnlJZCB9JmRlcGFydG1lbnQ9eyBmYWN1bHR5TWVtYmVyLmRlcGFydG1lbnQgfSZwb3NpdGlvbj17IGZhY3VsdHlNZW1iZXIucG9zaXRpb24gfSZkZWNlYXNlZD17IGZhY3VsdHlNZW1iZXIuZGVjZWFzZWQgfSZjb25maXJtZWQ9e2ZhY3VsdHlNZW1iZXIuY29uZmlybWVkfVwiPlxuICAgICAgICAgICAgICAgIHsgZmFjdWx0eU1lbWJlci5uYW1lIH1cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICB7L2VhY2h9XG4gICAgICAgIDwvdWw+XG4gICAgICAgIDx1bCBjbGFzcz1cIm1sLTAgbWQ6bWwtNiB0ZXh0LWxnIHRleHQtZ3JheS02MDAgbGVhZGluZy10aWdodFwiPlxuICAgICAgICAgIHsjZWFjaCBmYWN1bHR5Q29sdW1uMiBhcyBmYWN1bHR5TWVtYmVyfVxuICAgICAgICAgICAgPGxpIGNsYXNzPVwibXQtMiB0cmFuc2l0aW9uIGR1cmF0aW9uLTMwMCBlYXNlLWluLW91dCBob3Zlcjp0ZXh0LW9yYW5nZS01MDAgaG92ZXI6Zm9udC1zZW1pYm9sZCBob3ZlcjpiZy1ncmF5LTMwMCB0cmFuc2Zvcm0gaG92ZXI6LXRyYW5zbGF0ZS15LTAgaG92ZXI6c2NhbGUtMTEwXCI+XG4gICAgICAgICAgICAgIDxhIGlkPVwieyBmYWN1bHR5TWVtYmVyLm5hbWUudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9cXHMrL2csICcnKSB9XCJcbiAgICAgICAgICAgICAgICBocmVmPVwiZmFjdWx0eW1lbWJlcj9iYWNrPWZhY3VsdHkmZmlyc3ROYW1lPXsgZmFjdWx0eU1lbWJlci5maXJzdE5hbWUgfSZuYW1lPXsgZmFjdWx0eU1lbWJlci5uYW1lIH0mcGhvdG9JZD17IGZhY3VsdHlNZW1iZXIuY2xvdWRpbmFyeUlkIH0mZGVwYXJ0bWVudD17IGZhY3VsdHlNZW1iZXIuZGVwYXJ0bWVudCB9JnBvc2l0aW9uPXsgZmFjdWx0eU1lbWJlci5wb3NpdGlvbiB9JmRlY2Vhc2VkPXsgZmFjdWx0eU1lbWJlci5kZWNlYXNlZCB9JmNvbmZpcm1lZD17ZmFjdWx0eU1lbWJlci5jb25maXJtZWR9XCI+XG4gICAgICAgICAgICAgICAgeyBmYWN1bHR5TWVtYmVyLm5hbWUgfVxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgIHsvZWFjaH1cbiAgICAgICAgPC91bD5cblxuICAgICAgICA8QmFja1RvVG9wIGJhY2s9XCJmYWN1bHR5XCIvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC9zZWN0aW9uPiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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
