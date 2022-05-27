import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, e as element, o as svg_element, n as space, t as text, c as claim_element, a as children, f as detach_dev, p as claim_space, b as claim_text, h as attr_dev, j as add_location, q as set_style, k as insert_dev, l as append_dev, x as noop } from './client.69a4ddab.js';

/* src/routes/events.svelte generated by Svelte v3.35.0 */

const file = "src/routes/events.svelte";

function create_fragment(ctx) {
	let section;
	let div0;
	let svg;
	let polygon;
	let t0;
	let div5;
	let div4;
	let div1;
	let img;
	let img_src_value;
	let t1;
	let div3;
	let div2;
	let h3;
	let t2;
	let t3;
	let p;
	let t4;

	const block = {
		c: function create() {
			section = element("section");
			div0 = element("div");
			svg = svg_element("svg");
			polygon = svg_element("polygon");
			t0 = space();
			div5 = element("div");
			div4 = element("div");
			div1 = element("div");
			img = element("img");
			t1 = space();
			div3 = element("div");
			div2 = element("div");
			h3 = element("h3");
			t2 = text("Upcoming Events");
			t3 = space();
			p = element("p");
			t4 = text("We'll be updating the schedule of events as we get closer to our\n            reunion. Stay tuned...");
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
			div5 = claim_element(section_nodes, "DIV", { class: true });
			var div5_nodes = children(div5);
			div4 = claim_element(div5_nodes, "DIV", { class: true });
			var div4_nodes = children(div4);
			div1 = claim_element(div4_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			img = claim_element(div1_nodes, "IMG", { alt: true, class: true, src: true });
			div1_nodes.forEach(detach_dev);
			t1 = claim_space(div4_nodes);
			div3 = claim_element(div4_nodes, "DIV", { class: true });
			var div3_nodes = children(div3);
			div2 = claim_element(div3_nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			h3 = claim_element(div2_nodes, "H3", { class: true });
			var h3_nodes = children(h3);
			t2 = claim_text(h3_nodes, "Upcoming Events");
			h3_nodes.forEach(detach_dev);
			t3 = claim_space(div2_nodes);
			p = claim_element(div2_nodes, "P", { class: true });
			var p_nodes = children(p);
			t4 = claim_text(p_nodes, "We'll be updating the schedule of events as we get closer to our\n            reunion. Stay tuned...");
			p_nodes.forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			div3_nodes.forEach(detach_dev);
			div4_nodes.forEach(detach_dev);
			div5_nodes.forEach(detach_dev);
			section_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(polygon, "class", "text-white fill-current");
			attr_dev(polygon, "points", "2560 0 2560 100 0 100");
			add_location(polygon, file, 19, 6, 433);
			attr_dev(svg, "class", "absolute bottom-0 overflow-hidden");
			attr_dev(svg, "xmlns", "http://www.w3.org/2000/svg");
			attr_dev(svg, "preserveAspectRatio", "none");
			attr_dev(svg, "version", "1.1");
			attr_dev(svg, "viewBox", "0 0 2560 100");
			attr_dev(svg, "x", "0");
			attr_dev(svg, "y", "0");
			add_location(svg, file, 11, 4, 226);
			attr_dev(div0, "class", "bottom-auto top-0 left-0 right-0 w-full absolute\n    pointer-events-none overflow-hidden -mt-20");
			set_style(div0, "height", "80px");
			add_location(div0, file, 7, 2, 82);
			attr_dev(img, "alt", "Stay tuned");
			attr_dev(img, "class", "max-w-full rounded-lg shadow-lg mb-8 lg:mb-none");
			if (img.src !== (img_src_value = "chs_homecoming.jpeg")) attr_dev(img, "src", img_src_value);
			add_location(img, file, 27, 8, 709);
			attr_dev(div1, "class", "flex justify-center w-full md:w-4/12 m-auto px-4");
			add_location(div1, file, 26, 6, 638);
			attr_dev(h3, "class", "text-3xl font-semibold");
			add_location(h3, file, 34, 10, 949);
			attr_dev(p, "class", "mt-4 text-lg leading-relaxed text-gray-600");
			add_location(p, file, 35, 10, 1015);
			attr_dev(div2, "class", "md:pr-12");
			add_location(div2, file, 33, 8, 916);
			attr_dev(div3, "class", "w-full md:w-5/12 m-auto px-4");
			add_location(div3, file, 32, 6, 865);
			attr_dev(div4, "class", "flex flex-wrap");
			add_location(div4, file, 25, 4, 603);
			attr_dev(div5, "class", "container mx-auto py-8 lg:py-none px-4");
			add_location(div5, file, 24, 2, 546);
			attr_dev(section, "class", "relative py-12 lg:py-20");
			add_location(section, file, 6, 0, 38);
		},
		m: function mount(target, anchor) {
			insert_dev(target, section, anchor);
			append_dev(section, div0);
			append_dev(div0, svg);
			append_dev(svg, polygon);
			append_dev(section, t0);
			append_dev(section, div5);
			append_dev(div5, div4);
			append_dev(div4, div1);
			append_dev(div1, img);
			append_dev(div4, t1);
			append_dev(div4, div3);
			append_dev(div3, div2);
			append_dev(div2, h3);
			append_dev(h3, t2);
			append_dev(div2, t3);
			append_dev(div2, p);
			append_dev(p, t4);
		},
		p: noop,
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(section);
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

function instance($$self, $$props) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Events", slots, []);
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Events> was created with unknown prop '${key}'`);
	});

	return [];
}

class Events extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Events",
			options,
			id: create_fragment.name
		});
	}
}

export default Events;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnRzLmQwODBjNjMxLmpzIiwic291cmNlcyI6W10sInNvdXJjZXNDb250ZW50IjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
