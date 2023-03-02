import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, M as validate_each_argument, v as validate_slots, e as element, t as text, n as space, c as claim_element, a as children, b as claim_text, f as detach_dev, p as claim_space, h as attr_dev, j as add_location, k as insert_dev, l as append_dev, x as noop, o as svg_element, q as set_style, N as destroy_each } from './client.ab8d32b7.js';
import { c as classmates } from './classmates.883c4989.js';
import { c as createPersonGroups } from './createPersonGroups.7c5a2af0.js';

/* src/routes/memoriam.svelte generated by Svelte v3.35.0 */
const file = "src/routes/memoriam.svelte";

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

// (85:12) {#each classmateColumn1 as classmate}
function create_each_block_1(ctx) {
	let li;
	let a;
	let t0_value = /*classmate*/ ctx[3].name + "";
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
			a = claim_element(li_nodes, "A", { href: true });
			var a_nodes = children(a);
			t0 = claim_text(a_nodes, t0_value);
			a_nodes.forEach(detach_dev);
			t1 = claim_space(li_nodes);
			li_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(a, "href", "classmate?back=memoriam&name=" + /*classmate*/ ctx[3].name + "&photoId=" + /*classmate*/ ctx[3].cloudinaryId + "&deceased=" + /*classmate*/ ctx[3].deceased + "&confirmed=" + /*classmate*/ ctx[3].confirmed);
			add_location(a, file, 86, 16, 3881);
			attr_dev(li, "class", "transition duration-300 ease-in-out hover:text-orange-500 hover:font-semibold hover:bg-gray-300 transform hover:-translate-y-0 hover:scale-110");
			add_location(li, file, 85, 14, 3709);
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
		source: "(85:12) {#each classmateColumn1 as classmate}",
		ctx
	});

	return block;
}

// (93:12) {#each classmateColumn2 as classmate}
function create_each_block(ctx) {
	let li;
	let a;
	let t0_value = /*classmate*/ ctx[3].name + "";
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
			a = claim_element(li_nodes, "A", { href: true });
			var a_nodes = children(a);
			t0 = claim_text(a_nodes, t0_value);
			a_nodes.forEach(detach_dev);
			t1 = claim_space(li_nodes);
			li_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(a, "href", "classmate?back=memoriam&name=" + /*classmate*/ ctx[3].name + "&photoId=" + /*classmate*/ ctx[3].cloudinaryId + "&deceased=" + /*classmate*/ ctx[3].deceased + "&confirmed=" + /*classmate*/ ctx[3].confirmed);
			add_location(a, file, 94, 16, 4475);
			attr_dev(li, "class", "transition duration-300 ease-in-out hover:text-orange-500 hover:font-semibold hover:bg-gray-300 transform hover:-translate-y-0 hover:scale-110");
			add_location(li, file, 93, 14, 4303);
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
		source: "(93:12) {#each classmateColumn2 as classmate}",
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
	let div11;
	let h1;
	let t1;
	let t2;
	let div10;
	let div6;
	let div1;
	let img;
	let img_src_value;
	let t3;
	let div5;
	let p0;
	let t4;
	let t5;
	let div2;
	let t6;
	let t7;
	let p1;
	let t8;
	let t9;
	let div3;
	let t10;
	let t11;
	let p2;
	let t12;
	let t13;
	let div4;
	let t14;
	let t15;
	let p3;
	let t16;
	let t17;
	let p4;
	let t18;
	let t19;
	let div9;
	let div7;
	let p5;
	let em;
	let t20;
	let t21;
	let t22;
	let div8;
	let ul0;
	let t23;
	let ul1;
	let each_value_1 = /*classmateColumn1*/ ctx[0];
	validate_each_argument(each_value_1);
	let each_blocks_1 = [];

	for (let i = 0; i < each_value_1.length; i += 1) {
		each_blocks_1[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
	}

	let each_value = /*classmateColumn2*/ ctx[1];
	validate_each_argument(each_value);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const block = {
		c: function create() {
			section = element("section");
			div0 = element("div");
			svg = svg_element("svg");
			polygon = svg_element("polygon");
			t0 = space();
			div11 = element("div");
			h1 = element("h1");
			t1 = text("In Memoriam");
			t2 = space();
			div10 = element("div");
			div6 = element("div");
			div1 = element("div");
			img = element("img");
			t3 = space();
			div5 = element("div");
			p0 = element("p");
			t4 = text("Reading the names on this list as you begin that morning cup of\n            coffee changes your day. Every name brings back a memory....a class,\n            a date, a conversation.");
			t5 = space();
			div2 = element("div");
			t6 = text("~");
			t7 = space();
			p1 = element("p");
			t8 = text("It was a life long ago, but yesterday. We were perched on the rim\n            of the world, ready to jump in and make our mark. Hopefully every\n            member of this list got to experience life's thrills.");
			t9 = space();
			div3 = element("div");
			t10 = text("~");
			t11 = space();
			p2 = element("p");
			t12 = text("A child, an accomplishment, holding hands at the close of the day.\n            ...a pat on the back when they needed it most and friends in the \n            final moments.");
			t13 = space();
			div4 = element("div");
			t14 = text("~");
			t15 = space();
			p3 = element("p");
			t16 = text("They were all an important part of our lives...our dreams. Hopefully\n            those of us that remain will represent those who are gone with\n            loving pride and honor these memories that make us smile and laugh.\n            and remember that time....");
			t17 = space();
			p4 = element("p");
			t18 = text("An internet search of what to say here about our classmates who \n            have gone before us turned up this note. Attributions to its \n            author, Bob Condron");
			t19 = space();
			div9 = element("div");
			div7 = element("div");
			p5 = element("p");
			em = element("em");
			t20 = text("Click");
			t21 = text(" on a name to see more.");
			t22 = space();
			div8 = element("div");
			ul0 = element("ul");

			for (let i = 0; i < each_blocks_1.length; i += 1) {
				each_blocks_1[i].c();
			}

			t23 = space();
			ul1 = element("ul");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

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
			div11 = claim_element(section_nodes, "DIV", { class: true });
			var div11_nodes = children(div11);
			h1 = claim_element(div11_nodes, "H1", { class: true });
			var h1_nodes = children(h1);
			t1 = claim_text(h1_nodes, "In Memoriam");
			h1_nodes.forEach(detach_dev);
			t2 = claim_space(div11_nodes);
			div10 = claim_element(div11_nodes, "DIV", { class: true });
			var div10_nodes = children(div10);
			div6 = claim_element(div10_nodes, "DIV", { class: true });
			var div6_nodes = children(div6);
			div1 = claim_element(div6_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			img = claim_element(div1_nodes, "IMG", { alt: true, class: true, src: true });
			div1_nodes.forEach(detach_dev);
			t3 = claim_space(div6_nodes);
			div5 = claim_element(div6_nodes, "DIV", { class: true });
			var div5_nodes = children(div5);
			p0 = claim_element(div5_nodes, "P", { class: true });
			var p0_nodes = children(p0);
			t4 = claim_text(p0_nodes, "Reading the names on this list as you begin that morning cup of\n            coffee changes your day. Every name brings back a memory....a class,\n            a date, a conversation.");
			p0_nodes.forEach(detach_dev);
			t5 = claim_space(div5_nodes);
			div2 = claim_element(div5_nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			t6 = claim_text(div2_nodes, "~");
			div2_nodes.forEach(detach_dev);
			t7 = claim_space(div5_nodes);
			p1 = claim_element(div5_nodes, "P", { class: true });
			var p1_nodes = children(p1);
			t8 = claim_text(p1_nodes, "It was a life long ago, but yesterday. We were perched on the rim\n            of the world, ready to jump in and make our mark. Hopefully every\n            member of this list got to experience life's thrills.");
			p1_nodes.forEach(detach_dev);
			t9 = claim_space(div5_nodes);
			div3 = claim_element(div5_nodes, "DIV", { class: true });
			var div3_nodes = children(div3);
			t10 = claim_text(div3_nodes, "~");
			div3_nodes.forEach(detach_dev);
			t11 = claim_space(div5_nodes);
			p2 = claim_element(div5_nodes, "P", { class: true });
			var p2_nodes = children(p2);
			t12 = claim_text(p2_nodes, "A child, an accomplishment, holding hands at the close of the day.\n            ...a pat on the back when they needed it most and friends in the \n            final moments.");
			p2_nodes.forEach(detach_dev);
			t13 = claim_space(div5_nodes);
			div4 = claim_element(div5_nodes, "DIV", { class: true });
			var div4_nodes = children(div4);
			t14 = claim_text(div4_nodes, "~");
			div4_nodes.forEach(detach_dev);
			t15 = claim_space(div5_nodes);
			p3 = claim_element(div5_nodes, "P", { class: true });
			var p3_nodes = children(p3);
			t16 = claim_text(p3_nodes, "They were all an important part of our lives...our dreams. Hopefully\n            those of us that remain will represent those who are gone with\n            loving pride and honor these memories that make us smile and laugh.\n            and remember that time....");
			p3_nodes.forEach(detach_dev);
			t17 = claim_space(div5_nodes);
			p4 = claim_element(div5_nodes, "P", { class: true });
			var p4_nodes = children(p4);
			t18 = claim_text(p4_nodes, "An internet search of what to say here about our classmates who \n            have gone before us turned up this note. Attributions to its \n            author, Bob Condron");
			p4_nodes.forEach(detach_dev);
			div5_nodes.forEach(detach_dev);
			div6_nodes.forEach(detach_dev);
			t19 = claim_space(div10_nodes);
			div9 = claim_element(div10_nodes, "DIV", { class: true });
			var div9_nodes = children(div9);
			div7 = claim_element(div9_nodes, "DIV", { class: true });
			var div7_nodes = children(div7);
			p5 = claim_element(div7_nodes, "P", {});
			var p5_nodes = children(p5);
			em = claim_element(p5_nodes, "EM", {});
			var em_nodes = children(em);
			t20 = claim_text(em_nodes, "Click");
			em_nodes.forEach(detach_dev);
			t21 = claim_text(p5_nodes, " on a name to see more.");
			p5_nodes.forEach(detach_dev);
			div7_nodes.forEach(detach_dev);
			t22 = claim_space(div9_nodes);
			div8 = claim_element(div9_nodes, "DIV", { class: true });
			var div8_nodes = children(div8);
			ul0 = claim_element(div8_nodes, "UL", { class: true });
			var ul0_nodes = children(ul0);

			for (let i = 0; i < each_blocks_1.length; i += 1) {
				each_blocks_1[i].l(ul0_nodes);
			}

			ul0_nodes.forEach(detach_dev);
			t23 = claim_space(div8_nodes);
			ul1 = claim_element(div8_nodes, "UL", { class: true });
			var ul1_nodes = children(ul1);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(ul1_nodes);
			}

			ul1_nodes.forEach(detach_dev);
			div8_nodes.forEach(detach_dev);
			div9_nodes.forEach(detach_dev);
			div10_nodes.forEach(detach_dev);
			div11_nodes.forEach(detach_dev);
			section_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(polygon, "class", "text-white fill-current");
			attr_dev(polygon, "points", "2560 0 2560 100 0 100");
			add_location(polygon, file, 25, 6, 710);
			attr_dev(svg, "class", "absolute bottom-0 overflow-hidden");
			attr_dev(svg, "xmlns", "http://www.w3.org/2000/svg");
			attr_dev(svg, "preserveAspectRatio", "none");
			attr_dev(svg, "version", "1.1");
			attr_dev(svg, "viewBox", "0 0 2560 100");
			attr_dev(svg, "x", "0");
			attr_dev(svg, "y", "0");
			add_location(svg, file, 17, 4, 503);
			attr_dev(div0, "class", "bottom-auto top-0 left-0 right-0 w-full absolute\n    pointer-events-none overflow-hidden -mt-20");
			set_style(div0, "height", "80px");
			add_location(div0, file, 13, 2, 359);
			attr_dev(h1, "class", "my-12 text-3xl md:text-5xl font-semibold text-center");
			add_location(h1, file, 31, 4, 882);
			attr_dev(img, "alt", "Light behind cemetary tree");
			attr_dev(img, "class", "max-w-screen-sm lg:max-w-full h-20 md:h-28 lg:h-48 shadow-2xl \n              ml-0 md:ml-6 lg:ml-0 mb-8 lg:mb-none\n              transform scale-x-250 md:scale-x-150 lg:scale-x-250\n              shadow-xl-orange lg:shadow-2xl-orange");
			if (img.src !== (img_src_value = "chs_lorimer_cemetary.jpeg")) attr_dev(img, "src", img_src_value);
			add_location(img, file, 35, 10, 1150);
			attr_dev(div1, "class", "flex w-full m-0 p-0 justify-center");
			add_location(div1, file, 34, 8, 1091);
			attr_dev(p0, "class", "text-lg leading-normal text-gray-600");
			add_location(p0, file, 44, 10, 1558);
			attr_dev(div2, "class", "text-2xl font-extrabold text-gray-400 leading-snug");
			add_location(div2, file, 49, 10, 1825);
			attr_dev(p1, "class", "text-lg leading-normal text-gray-600");
			add_location(p1, file, 50, 10, 1907);
			attr_dev(div3, "class", "text-2xl font-extrabold text-gray-400 leading-snug");
			add_location(div3, file, 55, 10, 2203);
			attr_dev(p2, "class", "text-lg leading-normal text-gray-600");
			add_location(p2, file, 56, 10, 2285);
			attr_dev(div4, "class", "text-2xl font-extrabold text-gray-400 leading-snug");
			add_location(div4, file, 61, 10, 2543);
			attr_dev(p3, "class", "text-lg leading-normal text-gray-600");
			add_location(p3, file, 62, 10, 2625);
			attr_dev(p4, "class", "mt-8 text-sm leading-normal text-gray-600");
			add_location(p4, file, 68, 10, 2974);
			attr_dev(div5, "class", "text-center");
			add_location(div5, file, 43, 8, 1522);
			attr_dev(div6, "class", "flex flex-wrap w-full md:w-6/12 mb-4 content-start");
			add_location(div6, file, 33, 6, 1018);
			add_location(em, file, 79, 13, 3472);
			add_location(p5, file, 79, 10, 3469);
			attr_dev(div7, "class", "flex flex-wrap place-content-center w-full");
			add_location(div7, file, 78, 8, 3402);
			attr_dev(ul0, "class", "mt-2 text-lg text-gray-600 leading-relaxed");
			add_location(ul0, file, 83, 10, 3589);
			attr_dev(ul1, "class", "ml-0 md:ml-6 mt-0 md:mt-2 text-lg text-gray-600 leading-relaxed");
			add_location(ul1, file, 91, 10, 4162);
			attr_dev(div8, "class", "flex w-full justify-center");
			add_location(div8, file, 82, 8, 3538);
			attr_dev(div9, "class", "flex flex-col justify-center w-full md:w-5/12 \n        ml-1 md:ml-12 lg:ml-20 px-4 border-gray-300 border-2 shadow-2xl");
			add_location(div9, file, 76, 6, 3261);
			attr_dev(div10, "class", "flex flex-wrap content-center");
			add_location(div10, file, 32, 4, 968);
			attr_dev(div11, "class", "container w-full mx-auto lg:py-none px-4");
			add_location(div11, file, 30, 2, 823);
			attr_dev(section, "class", "relative py-12 lg:py-20");
			add_location(section, file, 12, 0, 315);
		},
		m: function mount(target, anchor) {
			insert_dev(target, section, anchor);
			append_dev(section, div0);
			append_dev(div0, svg);
			append_dev(svg, polygon);
			append_dev(section, t0);
			append_dev(section, div11);
			append_dev(div11, h1);
			append_dev(h1, t1);
			append_dev(div11, t2);
			append_dev(div11, div10);
			append_dev(div10, div6);
			append_dev(div6, div1);
			append_dev(div1, img);
			append_dev(div6, t3);
			append_dev(div6, div5);
			append_dev(div5, p0);
			append_dev(p0, t4);
			append_dev(div5, t5);
			append_dev(div5, div2);
			append_dev(div2, t6);
			append_dev(div5, t7);
			append_dev(div5, p1);
			append_dev(p1, t8);
			append_dev(div5, t9);
			append_dev(div5, div3);
			append_dev(div3, t10);
			append_dev(div5, t11);
			append_dev(div5, p2);
			append_dev(p2, t12);
			append_dev(div5, t13);
			append_dev(div5, div4);
			append_dev(div4, t14);
			append_dev(div5, t15);
			append_dev(div5, p3);
			append_dev(p3, t16);
			append_dev(div5, t17);
			append_dev(div5, p4);
			append_dev(p4, t18);
			append_dev(div10, t19);
			append_dev(div10, div9);
			append_dev(div9, div7);
			append_dev(div7, p5);
			append_dev(p5, em);
			append_dev(em, t20);
			append_dev(p5, t21);
			append_dev(div9, t22);
			append_dev(div9, div8);
			append_dev(div8, ul0);

			for (let i = 0; i < each_blocks_1.length; i += 1) {
				each_blocks_1[i].m(ul0, null);
			}

			append_dev(div8, t23);
			append_dev(div8, ul1);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(ul1, null);
			}
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*classmateColumn1*/ 1) {
				each_value_1 = /*classmateColumn1*/ ctx[0];
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

			if (dirty & /*classmateColumn2*/ 2) {
				each_value = /*classmateColumn2*/ ctx[1];
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
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(section);
			destroy_each(each_blocks_1, detaching);
			destroy_each(each_blocks, detaching);
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
	validate_slots("Memoriam", slots, []);
	const deceased = classmates.filter(classmate => classmate.deceased === "TRUE");
	const [classmateColumn1, classmateColumn2] = createPersonGroups(deceased);
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Memoriam> was created with unknown prop '${key}'`);
	});

	$$self.$capture_state = () => ({
		classmates,
		createPersonGroups,
		deceased,
		classmateColumn1,
		classmateColumn2
	});

	return [classmateColumn1, classmateColumn2];
}

class Memoriam extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Memoriam",
			options,
			id: create_fragment.name
		});
	}
}

export default Memoriam;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVtb3JpYW0uYjlmZDViNjguanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvbWVtb3JpYW0uc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XG4gIGltcG9ydCBjbGFzc21hdGVzIGZyb20gJy4uL2Fzc2V0cy9jbGFzc21hdGVzLmpzb24nXG4gIGltcG9ydCBjcmVhdGVQZXJzb25Hcm91cHMgZnJvbSAnLi4vdXRpbHMvY3JlYXRlUGVyc29uR3JvdXBzJ1xuXG4gIGNvbnN0IGRlY2Vhc2VkID0gY2xhc3NtYXRlcy5maWx0ZXIoKGNsYXNzbWF0ZSkgPT4gY2xhc3NtYXRlLmRlY2Vhc2VkID09PSAnVFJVRScpXG5cbiAgY29uc3QgW2NsYXNzbWF0ZUNvbHVtbjEsIGNsYXNzbWF0ZUNvbHVtbjJdID0gY3JlYXRlUGVyc29uR3JvdXBzKGRlY2Vhc2VkKVxuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cbjwvc3R5bGU+XG5cbjxzZWN0aW9uIGNsYXNzPVwicmVsYXRpdmUgcHktMTIgbGc6cHktMjBcIj5cbiAgPGRpdlxuICAgIGNsYXNzPVwiYm90dG9tLWF1dG8gdG9wLTAgbGVmdC0wIHJpZ2h0LTAgdy1mdWxsIGFic29sdXRlXG4gICAgcG9pbnRlci1ldmVudHMtbm9uZSBvdmVyZmxvdy1oaWRkZW4gLW10LTIwXCJcbiAgICBzdHlsZT1cImhlaWdodDogODBweDtcIj5cbiAgICA8c3ZnXG4gICAgICBjbGFzcz1cImFic29sdXRlIGJvdHRvbS0wIG92ZXJmbG93LWhpZGRlblwiXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgIHByZXNlcnZlQXNwZWN0UmF0aW89XCJub25lXCJcbiAgICAgIHZlcnNpb249XCIxLjFcIlxuICAgICAgdmlld0JveD1cIjAgMCAyNTYwIDEwMFwiXG4gICAgICB4PVwiMFwiXG4gICAgICB5PVwiMFwiPlxuICAgICAgPHBvbHlnb25cbiAgICAgICAgY2xhc3M9XCJ0ZXh0LXdoaXRlIGZpbGwtY3VycmVudFwiXG4gICAgICAgIHBvaW50cz1cIjI1NjAgMCAyNTYwIDEwMCAwIDEwMFwiIC8+XG4gICAgPC9zdmc+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyIHctZnVsbCBteC1hdXRvIGxnOnB5LW5vbmUgcHgtNFwiPlxuICAgIDxoMSBjbGFzcz1cIm15LTEyIHRleHQtM3hsIG1kOnRleHQtNXhsIGZvbnQtc2VtaWJvbGQgdGV4dC1jZW50ZXJcIj5JbiBNZW1vcmlhbTwvaDE+XG4gICAgPGRpdiBjbGFzcz1cImZsZXggZmxleC13cmFwIGNvbnRlbnQtY2VudGVyXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiZmxleCBmbGV4LXdyYXAgdy1mdWxsIG1kOnctNi8xMiBtYi00IGNvbnRlbnQtc3RhcnRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZsZXggdy1mdWxsIG0tMCBwLTAganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICA8aW1nXG4gICAgICAgICAgICBhbHQ9XCJMaWdodCBiZWhpbmQgY2VtZXRhcnkgdHJlZVwiXG4gICAgICAgICAgICBjbGFzcz1cIm1heC13LXNjcmVlbi1zbSBsZzptYXgtdy1mdWxsIGgtMjAgbWQ6aC0yOCBsZzpoLTQ4IHNoYWRvdy0yeGwgXG4gICAgICAgICAgICAgIG1sLTAgbWQ6bWwtNiBsZzptbC0wIG1iLTggbGc6bWItbm9uZVxuICAgICAgICAgICAgICB0cmFuc2Zvcm0gc2NhbGUteC0yNTAgbWQ6c2NhbGUteC0xNTAgbGc6c2NhbGUteC0yNTBcbiAgICAgICAgICAgICAgc2hhZG93LXhsLW9yYW5nZSBsZzpzaGFkb3ctMnhsLW9yYW5nZVwiXG4gICAgICAgICAgICBzcmM9XCJjaHNfbG9yaW1lcl9jZW1ldGFyeS5qcGVnXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgIDxwIGNsYXNzPVwidGV4dC1sZyBsZWFkaW5nLW5vcm1hbCB0ZXh0LWdyYXktNjAwXCI+XG4gICAgICAgICAgICBSZWFkaW5nIHRoZSBuYW1lcyBvbiB0aGlzIGxpc3QgYXMgeW91IGJlZ2luIHRoYXQgbW9ybmluZyBjdXAgb2ZcbiAgICAgICAgICAgIGNvZmZlZSBjaGFuZ2VzIHlvdXIgZGF5LiBFdmVyeSBuYW1lIGJyaW5ncyBiYWNrIGEgbWVtb3J5Li4uLmEgY2xhc3MsXG4gICAgICAgICAgICBhIGRhdGUsIGEgY29udmVyc2F0aW9uLlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC0yeGwgZm9udC1leHRyYWJvbGQgdGV4dC1ncmF5LTQwMCBsZWFkaW5nLXNudWdcIj5+PC9kaXY+XG4gICAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0LWxnIGxlYWRpbmctbm9ybWFsIHRleHQtZ3JheS02MDBcIj5cbiAgICAgICAgICAgIEl0IHdhcyBhIGxpZmUgbG9uZyBhZ28sIGJ1dCB5ZXN0ZXJkYXkuIFdlIHdlcmUgcGVyY2hlZCBvbiB0aGUgcmltXG4gICAgICAgICAgICBvZiB0aGUgd29ybGQsIHJlYWR5IHRvIGp1bXAgaW4gYW5kIG1ha2Ugb3VyIG1hcmsuIEhvcGVmdWxseSBldmVyeVxuICAgICAgICAgICAgbWVtYmVyIG9mIHRoaXMgbGlzdCBnb3QgdG8gZXhwZXJpZW5jZSBsaWZlJ3MgdGhyaWxscy5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtMnhsIGZvbnQtZXh0cmFib2xkIHRleHQtZ3JheS00MDAgbGVhZGluZy1zbnVnXCI+fjwvZGl2PlxuICAgICAgICAgIDxwIGNsYXNzPVwidGV4dC1sZyBsZWFkaW5nLW5vcm1hbCB0ZXh0LWdyYXktNjAwXCI+XG4gICAgICAgICAgICBBIGNoaWxkLCBhbiBhY2NvbXBsaXNobWVudCwgaG9sZGluZyBoYW5kcyBhdCB0aGUgY2xvc2Ugb2YgdGhlIGRheS5cbiAgICAgICAgICAgIC4uLmEgcGF0IG9uIHRoZSBiYWNrIHdoZW4gdGhleSBuZWVkZWQgaXQgbW9zdCBhbmQgZnJpZW5kcyBpbiB0aGUgXG4gICAgICAgICAgICBmaW5hbCBtb21lbnRzLlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC0yeGwgZm9udC1leHRyYWJvbGQgdGV4dC1ncmF5LTQwMCBsZWFkaW5nLXNudWdcIj5+PC9kaXY+XG4gICAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0LWxnIGxlYWRpbmctbm9ybWFsIHRleHQtZ3JheS02MDBcIj5cbiAgICAgICAgICAgIFRoZXkgd2VyZSBhbGwgYW4gaW1wb3J0YW50IHBhcnQgb2Ygb3VyIGxpdmVzLi4ub3VyIGRyZWFtcy4gSG9wZWZ1bGx5XG4gICAgICAgICAgICB0aG9zZSBvZiB1cyB0aGF0IHJlbWFpbiB3aWxsIHJlcHJlc2VudCB0aG9zZSB3aG8gYXJlIGdvbmUgd2l0aFxuICAgICAgICAgICAgbG92aW5nIHByaWRlIGFuZCBob25vciB0aGVzZSBtZW1vcmllcyB0aGF0IG1ha2UgdXMgc21pbGUgYW5kIGxhdWdoLlxuICAgICAgICAgICAgYW5kIHJlbWVtYmVyIHRoYXQgdGltZS4uLi5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPHAgY2xhc3M9XCJtdC04IHRleHQtc20gbGVhZGluZy1ub3JtYWwgdGV4dC1ncmF5LTYwMFwiPlxuICAgICAgICAgICAgQW4gaW50ZXJuZXQgc2VhcmNoIG9mIHdoYXQgdG8gc2F5IGhlcmUgYWJvdXQgb3VyIGNsYXNzbWF0ZXMgd2hvIFxuICAgICAgICAgICAgaGF2ZSBnb25lIGJlZm9yZSB1cyB0dXJuZWQgdXAgdGhpcyBub3RlLiBBdHRyaWJ1dGlvbnMgdG8gaXRzIFxuICAgICAgICAgICAgYXV0aG9yLCBCb2IgQ29uZHJvblxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzcz1cImZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgdy1mdWxsIG1kOnctNS8xMiBcbiAgICAgICAgbWwtMSBtZDptbC0xMiBsZzptbC0yMCBweC00IGJvcmRlci1ncmF5LTMwMCBib3JkZXItMiBzaGFkb3ctMnhsXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGZsZXgtd3JhcCBwbGFjZS1jb250ZW50LWNlbnRlciB3LWZ1bGxcIj5cbiAgICAgICAgICA8cD48ZW0+Q2xpY2s8L2VtPiBvbiBhIG5hbWUgdG8gc2VlIG1vcmUuPC9wPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCB3LWZ1bGwganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICA8dWwgY2xhc3M9XCJtdC0yIHRleHQtbGcgdGV4dC1ncmF5LTYwMCBsZWFkaW5nLXJlbGF4ZWRcIj5cbiAgICAgICAgICAgIHsjZWFjaCBjbGFzc21hdGVDb2x1bW4xIGFzIGNsYXNzbWF0ZX1cbiAgICAgICAgICAgICAgPGxpIGNsYXNzPVwidHJhbnNpdGlvbiBkdXJhdGlvbi0zMDAgZWFzZS1pbi1vdXQgaG92ZXI6dGV4dC1vcmFuZ2UtNTAwIGhvdmVyOmZvbnQtc2VtaWJvbGQgaG92ZXI6YmctZ3JheS0zMDAgdHJhbnNmb3JtIGhvdmVyOi10cmFuc2xhdGUteS0wIGhvdmVyOnNjYWxlLTExMFwiPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJjbGFzc21hdGU/YmFjaz1tZW1vcmlhbSZuYW1lPXsgY2xhc3NtYXRlLm5hbWUgfSZwaG90b0lkPXsgY2xhc3NtYXRlLmNsb3VkaW5hcnlJZCB9JmRlY2Vhc2VkPXsgY2xhc3NtYXRlLmRlY2Vhc2VkIH0mY29uZmlybWVkPXsgY2xhc3NtYXRlLmNvbmZpcm1lZCB9XCI+XG4gICAgICAgICAgICAgICAgICB7IGNsYXNzbWF0ZS5uYW1lIH1cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvbGk+ICAgICAgICAgIHsvZWFjaH1cbiAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDx1bCBjbGFzcz1cIm1sLTAgbWQ6bWwtNiBtdC0wIG1kOm10LTIgdGV4dC1sZyB0ZXh0LWdyYXktNjAwIGxlYWRpbmctcmVsYXhlZFwiPlxuICAgICAgICAgICAgeyNlYWNoIGNsYXNzbWF0ZUNvbHVtbjIgYXMgY2xhc3NtYXRlfVxuICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJ0cmFuc2l0aW9uIGR1cmF0aW9uLTMwMCBlYXNlLWluLW91dCBob3Zlcjp0ZXh0LW9yYW5nZS01MDAgaG92ZXI6Zm9udC1zZW1pYm9sZCBob3ZlcjpiZy1ncmF5LTMwMCB0cmFuc2Zvcm0gaG92ZXI6LXRyYW5zbGF0ZS15LTAgaG92ZXI6c2NhbGUtMTEwXCI+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cImNsYXNzbWF0ZT9iYWNrPW1lbW9yaWFtJm5hbWU9eyBjbGFzc21hdGUubmFtZSB9JnBob3RvSWQ9eyBjbGFzc21hdGUuY2xvdWRpbmFyeUlkIH0mZGVjZWFzZWQ9eyBjbGFzc21hdGUuZGVjZWFzZWQgfSZjb25maXJtZWQ9eyBjbGFzc21hdGUuY29uZmlybWVkIH1cIj5cbiAgICAgICAgICAgICAgICAgIHsgY2xhc3NtYXRlLm5hbWUgfVxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIHsvZWFjaH1cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvc2VjdGlvbj4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBdUZvQixHQUFTLElBQUMsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3VFQURzQixHQUFTLElBQUMsSUFBSSwrQkFBYSxHQUFTLElBQUMsWUFBWSxnQ0FBYyxHQUFTLElBQUMsUUFBUSxpQ0FBZSxHQUFTLElBQUMsU0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBU3ZKLEdBQVMsSUFBQyxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7dUVBRHNCLEdBQVMsSUFBQyxJQUFJLCtCQUFhLEdBQVMsSUFBQyxZQUFZLGdDQUFjLEdBQVMsSUFBQyxRQUFRLGlDQUFlLEdBQVMsSUFBQyxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt5Q0FWeEosR0FBZ0I7Ozs7a0NBQXJCLE1BQUk7Ozs7dUNBUUMsR0FBZ0I7Ozs7Z0NBQXJCLE1BQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3dDQVJDLEdBQWdCOzs7O2lDQUFyQixNQUFJOzs7Ozs7Ozs7Ozs7Ozs7O3dDQUFKLE1BQUk7Ozs7c0NBUUMsR0FBZ0I7Ozs7K0JBQXJCLE1BQUk7Ozs7Ozs7Ozs7Ozs7Ozs7b0NBQUosTUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0F4RlYsUUFBUSxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUUsU0FBUyxJQUFLLFNBQVMsQ0FBQyxRQUFRLEtBQUssTUFBTTtRQUV4RSxnQkFBZ0IsRUFBRSxnQkFBZ0IsSUFBSSxrQkFBa0IsQ0FBQyxRQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
