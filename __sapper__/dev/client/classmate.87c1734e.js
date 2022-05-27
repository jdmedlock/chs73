import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, z as goto, A as create_component, B as claim_component, C as mount_component, x as noop, D as transition_in, E as transition_out, F as destroy_component, e as element, t as text, c as claim_element, a as children, b as claim_text, f as detach_dev, h as attr_dev, j as add_location, k as insert_dev, l as append_dev, n as space, p as claim_space, u as listen_dev } from './client.b3129c38.js';
import { I as Image } from './Image.b364f772.js';

/* src/routes/classmate.svelte generated by Svelte v3.35.0 */
const file = "src/routes/classmate.svelte";

// (35:4) {#if cloudinaryId !== ""}
function create_if_block_3(ctx) {
	let image;
	let current;

	image = new Image({
			props: {
				class: "text-center",
				cloud_name: "dk0zvtfed",
				public_id: /*cloudinaryId*/ ctx[2],
				transformation: [
					{
						width: 400,
						height: 400,
						gravity: "face",
						radius: "max",
						crop: "crop"
					},
					{ width: 200, crop: "scale" }
				]
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(image.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(image.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(image, target, anchor);
			current = true;
		},
		p: noop,
		i: function intro(local) {
			if (current) return;
			transition_in(image.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(image.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(image, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_3.name,
		type: "if",
		source: "(35:4) {#if cloudinaryId !== \\\"\\\"}",
		ctx
	});

	return block;
}

// (50:6) {#if deceased === 'TRUE'}
function create_if_block_2(ctx) {
	let p;
	let t;

	const block = {
		c: function create() {
			p = element("p");
			t = text("(Deceased)");
			this.h();
		},
		l: function claim(nodes) {
			p = claim_element(nodes, "P", { class: true });
			var p_nodes = children(p);
			t = claim_text(p_nodes, "(Deceased)");
			p_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(p, "class", "text-center w-full text-xl mt-0 md:text-2xl font-normal");
			add_location(p, file, 50, 8, 1569);
		},
		m: function mount(target, anchor) {
			insert_dev(target, p, anchor);
			append_dev(p, t);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(p);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_2.name,
		type: "if",
		source: "(50:6) {#if deceased === 'TRUE'}",
		ctx
	});

	return block;
}

// (69:6) {#if confirmed === 'FALSE'}
function create_if_block_1(ctx) {
	let div3;
	let div2;
	let div1;
	let img;
	let img_src_value;
	let t0;
	let div0;
	let t1;
	let mounted;
	let dispose;

	const block = {
		c: function create() {
			div3 = element("div");
			div2 = element("div");
			div1 = element("div");
			img = element("img");
			t0 = space();
			div0 = element("div");
			t1 = text("Tiger Hunt");
			this.h();
		},
		l: function claim(nodes) {
			div3 = claim_element(nodes, "DIV", { class: true });
			var div3_nodes = children(div3);
			div2 = claim_element(div3_nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			div1 = claim_element(div2_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			img = claim_element(div1_nodes, "IMG", { src: true, alt: true });
			t0 = claim_space(div1_nodes);
			div0 = claim_element(div1_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			t1 = claim_text(div0_nodes, "Tiger Hunt");
			div0_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			div3_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			if (img.src !== (img_src_value = "chs_tiger_36.png")) attr_dev(img, "src", img_src_value);
			attr_dev(img, "alt", "CHS Tiger");
			add_location(img, file, 78, 14, 2966);
			attr_dev(div0, "class", "ml-2 self-center");
			add_location(div0, file, 79, 14, 3026);
			attr_dev(div1, "class", "flex flex-wrap place-self-center w-full m-0");
			add_location(div1, file, 77, 12, 2894);
			attr_dev(div2, "class", "bg-orange-500 text-white active:bg-gray-700 \n            font-bold uppercase rounded shadow hover:shadow-lg\n            outline-none focus:outline-none \n            h-12 m-1 px-3 md:px-6 py-1 md:py-2 text-sm md:text-base\n            transition duration-300 ease-in-out \n            hover:text-gray-800 hover:font-semibold transform hover:-translate-y-0 hover:scale-110");
			add_location(div2, file, 70, 10, 2458);
			attr_dev(div3, "class", "flex flex-col ml-2");
			add_location(div3, file, 69, 8, 2415);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div3, anchor);
			append_dev(div3, div2);
			append_dev(div2, div1);
			append_dev(div1, img);
			append_dev(div1, t0);
			append_dev(div1, div0);
			append_dev(div0, t1);

			if (!mounted) {
				dispose = listen_dev(div2, "click", /*handleTigerHunt*/ ctx[6], false, false, false);
				mounted = true;
			}
		},
		p: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(div3);
			mounted = false;
			dispose();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_1.name,
		type: "if",
		source: "(69:6) {#if confirmed === 'FALSE'}",
		ctx
	});

	return block;
}

// (88:4) {#if confirmed === 'FALSE'}
function create_if_block(ctx) {
	let div;
	let t0;
	let t1;
	let t2;

	const block = {
		c: function create() {
			div = element("div");
			t0 = text("Do you know how to contact ");
			t1 = text(/*firstName*/ ctx[0]);
			t2 = text("? Click on Tiger Hunt!");
			this.h();
		},
		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);
			t0 = claim_text(div_nodes, "Do you know how to contact ");
			t1 = claim_text(div_nodes, /*firstName*/ ctx[0]);
			t2 = claim_text(div_nodes, "? Click on Tiger Hunt!");
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(div, "class", "text-sm md:text-lg mt-4 ml-3 justify-self-end");
			add_location(div, file, 88, 6, 3217);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);
			append_dev(div, t0);
			append_dev(div, t1);
			append_dev(div, t2);
		},
		p: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block.name,
		type: "if",
		source: "(88:4) {#if confirmed === 'FALSE'}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let section;
	let div1;
	let t0;
	let div0;
	let p;
	let t1;
	let t2;
	let t3;
	let div4;
	let div3;
	let a;
	let div2;
	let t4;
	let t5;
	let t6;
	let current;
	let if_block0 = /*cloudinaryId*/ ctx[2] !== "" && create_if_block_3(ctx);
	let if_block1 = /*deceased*/ ctx[3] === "TRUE" && create_if_block_2(ctx);
	let if_block2 = /*confirmed*/ ctx[4] === "FALSE" && create_if_block_1(ctx);
	let if_block3 = /*confirmed*/ ctx[4] === "FALSE" && create_if_block(ctx);

	const block = {
		c: function create() {
			section = element("section");
			div1 = element("div");
			if (if_block0) if_block0.c();
			t0 = space();
			div0 = element("div");
			p = element("p");
			t1 = text(/*classmateName*/ ctx[1]);
			t2 = space();
			if (if_block1) if_block1.c();
			t3 = space();
			div4 = element("div");
			div3 = element("div");
			a = element("a");
			div2 = element("div");
			t4 = text("Back");
			t5 = space();
			if (if_block2) if_block2.c();
			t6 = space();
			if (if_block3) if_block3.c();
			this.h();
		},
		l: function claim(nodes) {
			section = claim_element(nodes, "SECTION", { class: true });
			var section_nodes = children(section);
			div1 = claim_element(section_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			if (if_block0) if_block0.l(div1_nodes);
			t0 = claim_space(div1_nodes);
			div0 = claim_element(div1_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			p = claim_element(div0_nodes, "P", { class: true });
			var p_nodes = children(p);
			t1 = claim_text(p_nodes, /*classmateName*/ ctx[1]);
			p_nodes.forEach(detach_dev);
			t2 = claim_space(div0_nodes);
			if (if_block1) if_block1.l(div0_nodes);
			div0_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			t3 = claim_space(section_nodes);
			div4 = claim_element(section_nodes, "DIV", { class: true });
			var div4_nodes = children(div4);
			div3 = claim_element(div4_nodes, "DIV", { class: true });
			var div3_nodes = children(div3);
			a = claim_element(div3_nodes, "A", { href: true, class: true });
			var a_nodes = children(a);
			div2 = claim_element(a_nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			t4 = claim_text(div2_nodes, "Back");
			div2_nodes.forEach(detach_dev);
			a_nodes.forEach(detach_dev);
			t5 = claim_space(div3_nodes);
			if (if_block2) if_block2.l(div3_nodes);
			div3_nodes.forEach(detach_dev);
			t6 = claim_space(div4_nodes);
			if (if_block3) if_block3.l(div4_nodes);
			div4_nodes.forEach(detach_dev);
			section_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(p, "class", "text-center font-semibold w-full\n        mt-2 text-2xl md:text-4xl");
			add_location(p, file, 45, 6, 1413);
			attr_dev(div0, "class", "flex flex-col w-full\n      text-3xl md:text-6xl font-semibold");
			add_location(div0, file, 43, 4, 1331);
			attr_dev(div1, "class", "flex flex-wrap place-content-center ml-0 md:ml-8 mt-20");
			add_location(div1, file, 33, 2, 945);
			attr_dev(div2, "class", "flex place-self-center");
			add_location(div2, file, 64, 8, 2295);
			attr_dev(a, "href", "/" + /*backPage*/ ctx[5] + "/#" + /*classmateName*/ ctx[1].toLowerCase().replace(/\s+/g, ""));
			attr_dev(a, "class", "flex bg-orange-500 text-white active:bg-gray-700 \n        font-bold uppercase rounded shadow hover:shadow-lg\n        outline-none focus:outline-none\n        h-12 m-1 px-3 md:px-6 py-1 md:py-2 text-sm md:text-base\n        transition duration-300 ease-in-out \n      hover:text-gray-800 hover:font-semibold transform hover:-translate-y-0 hover:scale-110");
			add_location(a, file, 57, 6, 1842);
			attr_dev(div3, "class", "flex place-content-center text-center w-full");
			add_location(div3, file, 56, 4, 1777);
			attr_dev(div4, "class", "flex flex-wrap place-content-center w-full \n    ml-0 md:ml-8 mt-1 md:mt-2");
			add_location(div4, file, 54, 2, 1685);
			attr_dev(section, "class", "flex flex-wrap place-content-center w-full");
			add_location(section, file, 32, 0, 882);
		},
		m: function mount(target, anchor) {
			insert_dev(target, section, anchor);
			append_dev(section, div1);
			if (if_block0) if_block0.m(div1, null);
			append_dev(div1, t0);
			append_dev(div1, div0);
			append_dev(div0, p);
			append_dev(p, t1);
			append_dev(div0, t2);
			if (if_block1) if_block1.m(div0, null);
			append_dev(section, t3);
			append_dev(section, div4);
			append_dev(div4, div3);
			append_dev(div3, a);
			append_dev(a, div2);
			append_dev(div2, t4);
			append_dev(div3, t5);
			if (if_block2) if_block2.m(div3, null);
			append_dev(div4, t6);
			if (if_block3) if_block3.m(div4, null);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			if (/*cloudinaryId*/ ctx[2] !== "") if_block0.p(ctx, dirty);
			if (/*confirmed*/ ctx[4] === "FALSE") if_block2.p(ctx, dirty);
			if (/*confirmed*/ ctx[4] === "FALSE") if_block3.p(ctx, dirty);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(if_block0);
			current = true;
		},
		o: function outro(local) {
			transition_out(if_block0);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(section);
			if (if_block0) if_block0.d();
			if (if_block1) if_block1.d();
			if (if_block2) if_block2.d();
			if (if_block3) if_block3.d();
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

async function preload(page, session) {
	return {
		params: {
			back: page.query.back,
			firstName: page.query.firstName,
			classmateName: page.query.name,
			cloudinaryId: page.query.photoId,
			deceased: page.query.deceased,
			confirmed: page.query.confirmed
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Classmate", slots, []);
	let { params } = $$props;
	let { back, firstName, classmateName, cloudinaryId, deceased, confirmed } = params;
	let backPage = back === "classmate" ? "classmates" : back;

	const handleTigerHunt = async () => {
		await goto(`updatecontact?back=classmate&firstName=${firstName}&name=${classmateName}&photoId=${cloudinaryId}&deceased=${deceased}&confirmed=${confirmed}&type=classmate`);
	};

	const writable_props = ["params"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Classmate> was created with unknown prop '${key}'`);
	});

	$$self.$$set = $$props => {
		if ("params" in $$props) $$invalidate(7, params = $$props.params);
	};

	$$self.$capture_state = () => ({
		preload,
		goto,
		Image,
		params,
		back,
		firstName,
		classmateName,
		cloudinaryId,
		deceased,
		confirmed,
		backPage,
		handleTigerHunt
	});

	$$self.$inject_state = $$props => {
		if ("params" in $$props) $$invalidate(7, params = $$props.params);
		if ("back" in $$props) back = $$props.back;
		if ("firstName" in $$props) $$invalidate(0, firstName = $$props.firstName);
		if ("classmateName" in $$props) $$invalidate(1, classmateName = $$props.classmateName);
		if ("cloudinaryId" in $$props) $$invalidate(2, cloudinaryId = $$props.cloudinaryId);
		if ("deceased" in $$props) $$invalidate(3, deceased = $$props.deceased);
		if ("confirmed" in $$props) $$invalidate(4, confirmed = $$props.confirmed);
		if ("backPage" in $$props) $$invalidate(5, backPage = $$props.backPage);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [
		firstName,
		classmateName,
		cloudinaryId,
		deceased,
		confirmed,
		backPage,
		handleTigerHunt,
		params
	];
}

class Classmate extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { params: 7 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Classmate",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*params*/ ctx[7] === undefined && !("params" in props)) {
			console.warn("<Classmate> was created without expected prop 'params'");
		}
	}

	get params() {
		throw new Error("<Classmate>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set params(value) {
		throw new Error("<Classmate>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export default Classmate;
export { preload };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xhc3NtYXRlLjg3YzE3MzRlLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcm91dGVzL2NsYXNzbWF0ZS5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdCBjb250ZXh0PVwibW9kdWxlXCI+XG5cdGV4cG9ydCBhc3luYyBmdW5jdGlvbiBwcmVsb2FkKHBhZ2UsIHNlc3Npb24pIHtcblx0XHRyZXR1cm4geyBcbiAgICAgIHBhcmFtczoge1xuICAgICAgICBiYWNrOiBwYWdlLnF1ZXJ5LmJhY2ssXG4gICAgICAgIGZpcnN0TmFtZTogcGFnZS5xdWVyeS5maXJzdE5hbWUsXG4gICAgICAgIGNsYXNzbWF0ZU5hbWU6IHBhZ2UucXVlcnkubmFtZSxcbiAgICAgICAgY2xvdWRpbmFyeUlkOiBwYWdlLnF1ZXJ5LnBob3RvSWQsXG4gICAgICAgIGRlY2Vhc2VkOiBwYWdlLnF1ZXJ5LmRlY2Vhc2VkLFxuICAgICAgICBjb25maXJtZWQ6IHBhZ2UucXVlcnkuY29uZmlybWVkLFxuICAgICAgfVxuICAgIH1cbiAgfVxuPC9zY3JpcHQ+XG5cbjxzY3JpcHQ+XG4gIGltcG9ydCB7IGdvdG8gfSBmcm9tICdAc2FwcGVyL2FwcCdcbiAgaW1wb3J0IHsgSW1hZ2UgfSBmcm9tICdAY2xvdWRpbmFyeS9zdmVsdGUnXG5cbiAgZXhwb3J0IGxldCBwYXJhbXNcbiAgbGV0IHsgYmFjaywgZmlyc3ROYW1lLCBjbGFzc21hdGVOYW1lLCBjbG91ZGluYXJ5SWQsIGRlY2Vhc2VkLCBjb25maXJtZWQgfSA9IHBhcmFtc1xuICBsZXQgYmFja1BhZ2UgPSBiYWNrID09PSBcImNsYXNzbWF0ZVwiID8gXCJjbGFzc21hdGVzXCIgOiBiYWNrXG5cbiAgY29uc3QgaGFuZGxlVGlnZXJIdW50ID0gYXN5bmMgKCkgPT4ge1xuICAgIGF3YWl0IGdvdG8oYHVwZGF0ZWNvbnRhY3Q/YmFjaz1jbGFzc21hdGUmZmlyc3ROYW1lPSR7IGZpcnN0TmFtZSB9Jm5hbWU9JHsgY2xhc3NtYXRlTmFtZSB9JnBob3RvSWQ9JHsgY2xvdWRpbmFyeUlkIH0mZGVjZWFzZWQ9JHsgZGVjZWFzZWQgfSZjb25maXJtZWQ9JHsgY29uZmlybWVkIH0mdHlwZT1jbGFzc21hdGVgKVxuICB9XG5cbjwvc2NyaXB0PlxuXG48c3R5bGU+XG48L3N0eWxlPlxuXG48c2VjdGlvbiBjbGFzcz1cImZsZXggZmxleC13cmFwIHBsYWNlLWNvbnRlbnQtY2VudGVyIHctZnVsbFwiPlxuICA8ZGl2IGNsYXNzPVwiZmxleCBmbGV4LXdyYXAgcGxhY2UtY29udGVudC1jZW50ZXIgbWwtMCBtZDptbC04IG10LTIwXCI+XG4gICAgeyNpZiBjbG91ZGluYXJ5SWQgIT09IFwiXCJ9XG4gICAgICA8SW1hZ2UgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiXG4gICAgICAgIGNsb3VkX25hbWU9XCJ7IHByb2Nlc3MuZW52LkNMT1VESU5BUllfTkFNRSB9XCIgXG4gICAgICAgIHB1YmxpY19pZD17IGNsb3VkaW5hcnlJZCB9XG4gICAgICAgIHRyYW5zZm9ybWF0aW9uPVwie1tcbiAgICAgICAgICB7IHdpZHRoOiA0MDAsIGhlaWdodDogNDAwLCBncmF2aXR5OiAnZmFjZScsIHJhZGl1czogJ21heCcsIGNyb3A6ICdjcm9wJyB9LFxuICAgICAgICAgIHsgd2lkdGg6IDIwMCwgY3JvcDogJ3NjYWxlJyB9XG4gICAgICAgIF19XCIgLz5cbiAgICB7L2lmfVxuICAgIDxkaXYgY2xhc3M9XCJmbGV4IGZsZXgtY29sIHctZnVsbFxuICAgICAgdGV4dC0zeGwgbWQ6dGV4dC02eGwgZm9udC1zZW1pYm9sZFwiPlxuICAgICAgPHAgY2xhc3M9XCJ0ZXh0LWNlbnRlciBmb250LXNlbWlib2xkIHctZnVsbFxuICAgICAgICBtdC0yIHRleHQtMnhsIG1kOnRleHQtNHhsXCI+XG4gICAgICAgIHsgY2xhc3NtYXRlTmFtZSB9XG4gICAgICA8L3A+XG4gICAgICB7I2lmIGRlY2Vhc2VkID09PSAnVFJVRSd9XG4gICAgICAgIDxwIGNsYXNzPVwidGV4dC1jZW50ZXIgdy1mdWxsIHRleHQteGwgbXQtMCBtZDp0ZXh0LTJ4bCBmb250LW5vcm1hbFwiPihEZWNlYXNlZCk8L3A+XG4gICAgICB7L2lmfVxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cImZsZXggZmxleC13cmFwIHBsYWNlLWNvbnRlbnQtY2VudGVyIHctZnVsbCBcbiAgICBtbC0wIG1kOm1sLTggbXQtMSBtZDptdC0yXCI+XG4gICAgPGRpdiBjbGFzcz1cImZsZXggcGxhY2UtY29udGVudC1jZW50ZXIgdGV4dC1jZW50ZXIgdy1mdWxsXCI+XG4gICAgICA8YSBocmVmPVwiL3sgYmFja1BhZ2UgfS8jeyBjbGFzc21hdGVOYW1lLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvXFxzKy9nLCAnJykgfVwiXG4gICAgICAgIGNsYXNzPVwiZmxleCBiZy1vcmFuZ2UtNTAwIHRleHQtd2hpdGUgYWN0aXZlOmJnLWdyYXktNzAwIFxuICAgICAgICBmb250LWJvbGQgdXBwZXJjYXNlIHJvdW5kZWQgc2hhZG93IGhvdmVyOnNoYWRvdy1sZ1xuICAgICAgICBvdXRsaW5lLW5vbmUgZm9jdXM6b3V0bGluZS1ub25lXG4gICAgICAgIGgtMTIgbS0xIHB4LTMgbWQ6cHgtNiBweS0xIG1kOnB5LTIgdGV4dC1zbSBtZDp0ZXh0LWJhc2VcbiAgICAgICAgdHJhbnNpdGlvbiBkdXJhdGlvbi0zMDAgZWFzZS1pbi1vdXQgXG4gICAgICBob3Zlcjp0ZXh0LWdyYXktODAwIGhvdmVyOmZvbnQtc2VtaWJvbGQgdHJhbnNmb3JtIGhvdmVyOi10cmFuc2xhdGUteS0wIGhvdmVyOnNjYWxlLTExMFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBwbGFjZS1zZWxmLWNlbnRlclwiPlxuICAgICAgICAgIEJhY2tcbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2E+XG4gICAgICB7I2lmIGNvbmZpcm1lZCA9PT0gJ0ZBTFNFJ31cbiAgICAgICAgPGRpdiBjbGFzcz1cImZsZXggZmxleC1jb2wgbWwtMlwiPlxuICAgICAgICAgIDxkaXYgb246Y2xpY2s9eyBoYW5kbGVUaWdlckh1bnQgfVxuICAgICAgICAgICAgY2xhc3M9XCJiZy1vcmFuZ2UtNTAwIHRleHQtd2hpdGUgYWN0aXZlOmJnLWdyYXktNzAwIFxuICAgICAgICAgICAgZm9udC1ib2xkIHVwcGVyY2FzZSByb3VuZGVkIHNoYWRvdyBob3ZlcjpzaGFkb3ctbGdcbiAgICAgICAgICAgIG91dGxpbmUtbm9uZSBmb2N1czpvdXRsaW5lLW5vbmUgXG4gICAgICAgICAgICBoLTEyIG0tMSBweC0zIG1kOnB4LTYgcHktMSBtZDpweS0yIHRleHQtc20gbWQ6dGV4dC1iYXNlXG4gICAgICAgICAgICB0cmFuc2l0aW9uIGR1cmF0aW9uLTMwMCBlYXNlLWluLW91dCBcbiAgICAgICAgICAgIGhvdmVyOnRleHQtZ3JheS04MDAgaG92ZXI6Zm9udC1zZW1pYm9sZCB0cmFuc2Zvcm0gaG92ZXI6LXRyYW5zbGF0ZS15LTAgaG92ZXI6c2NhbGUtMTEwXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBmbGV4LXdyYXAgcGxhY2Utc2VsZi1jZW50ZXIgdy1mdWxsIG0tMFwiPlxuICAgICAgICAgICAgICA8aW1nIHNyYz1cImNoc190aWdlcl8zNi5wbmdcIiBhbHQ9XCJDSFMgVGlnZXJcIi8+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtbC0yIHNlbGYtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgVGlnZXIgSHVudFxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIHsvaWZ9XG4gICAgPC9kaXY+XG4gICAgeyNpZiBjb25maXJtZWQgPT09ICdGQUxTRSd9XG4gICAgICA8ZGl2IGNsYXNzPVwidGV4dC1zbSBtZDp0ZXh0LWxnIG10LTQgbWwtMyBqdXN0aWZ5LXNlbGYtZW5kXCI+XG4gICAgICAgIERvIHlvdSBrbm93IGhvdyB0byBjb250YWN0IHsgZmlyc3ROYW1lIH0/IENsaWNrIG9uIFRpZ2VyIEh1bnQhXG4gICAgICA8L2Rpdj5cbiAgICB7L2lmfVxuICA8L2Rpdj5cbjwvc2VjdGlvbj5cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztnQkFvQ3NCLFdBQTJCO2dDQUM3QixHQUFZOzs7TUFFcEIsS0FBSyxFQUFFLEdBQUc7TUFBRSxNQUFNLEVBQUUsR0FBRztNQUFFLE9BQU8sRUFBRSxNQUFNO01BQUUsTUFBTSxFQUFFLEtBQUs7TUFBRSxJQUFJLEVBQUUsTUFBTTs7T0FDckUsS0FBSyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzREQThCWCxHQUFlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzJCQW1CSixHQUFTOzs7Ozs7Ozs0Q0FBVCxHQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQXZEckMsR0FBWSxRQUFLLEVBQUU7OEJBZWpCLEdBQVEsUUFBSyxNQUFNOytCQW1CbkIsR0FBUyxRQUFLLE9BQU87K0JBbUJ2QixHQUFTLFFBQUssT0FBTzs7Ozs7Ozs7OzsrQkF4Q3BCLEdBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhDQUFiLEdBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQ0FVTCxHQUFRLCtCQUFNLEdBQWEsSUFBQyxXQUFXLEdBQUcsT0FBTyxDQUFDLE1BQU0sRUFBRSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7d0JBdkJyRSxHQUFZLFFBQUssRUFBRTtxQkFrQ2pCLEdBQVMsUUFBSyxPQUFPO3FCQW1CdkIsR0FBUyxRQUFLLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7ZUF0RlAsT0FBTyxDQUFDLElBQUksRUFBRSxPQUFPOztFQUV0QyxNQUFNO0dBQ0osSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSTtHQUNyQixTQUFTLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTO0dBQy9CLGFBQWEsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUk7R0FDOUIsWUFBWSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTztHQUNoQyxRQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRO0dBQzdCLFNBQVMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVM7Ozs7Ozs7O09BVTFCLE1BQUE7T0FDTCxJQUFJLEVBQUUsU0FBUyxFQUFFLGFBQWEsRUFBRSxZQUFZLEVBQUUsUUFBUSxFQUFFLFNBQVMsS0FBSyxNQUFBO0tBQ3hFLFFBQVEsR0FBRyxJQUFJLEtBQUssV0FBVyxHQUFHLFlBQVksR0FBRyxJQUFBOztPQUUvQyxlQUFlO1FBQ2IsSUFBSSwyQ0FBNEMsU0FBUyxTQUFXLGFBQWEsWUFBYyxZQUFZLGFBQWUsUUFBUSxjQUFnQixTQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
