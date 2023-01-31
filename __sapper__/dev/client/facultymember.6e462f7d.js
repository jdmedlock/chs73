import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, z as goto, A as create_component, B as claim_component, C as mount_component, x as noop, D as transition_in, E as transition_out, F as destroy_component, e as element, t as text, c as claim_element, a as children, b as claim_text, f as detach_dev, h as attr_dev, j as add_location, k as insert_dev, l as append_dev, n as space, p as claim_space, u as listen_dev } from './client.4c4423f9.js';
import { I as Image } from './Image.8b79ccbd.js';

/* src/routes/facultymember.svelte generated by Svelte v3.35.0 */
const file = "src/routes/facultymember.svelte";

// (36:4) {#if cloudinaryId !== ""}
function create_if_block_3(ctx) {
	let image;
	let current;

	image = new Image({
			props: {
				class: "text-center",
				cloud_name: "dk0zvtfed",
				public_id: /*cloudinaryId*/ ctx[1],
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
		source: "(36:4) {#if cloudinaryId !== \\\"\\\"}",
		ctx
	});

	return block;
}

// (55:6) {#if deceased === 'TRUE'}
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
			attr_dev(p, "class", "text-center w-full text-xl mt-4 md:text-3xl font-normal");
			add_location(p, file, 55, 8, 1928);
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
		source: "(55:6) {#if deceased === 'TRUE'}",
		ctx
	});

	return block;
}

// (74:8) {#if confirmed === 'FALSE'}
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
			add_location(img, file, 83, 16, 3350);
			attr_dev(div0, "class", "ml-2 self-center");
			add_location(div0, file, 84, 16, 3412);
			attr_dev(div1, "class", "flex flex-wrap place-self-center w-full m-0");
			add_location(div1, file, 82, 14, 3276);
			attr_dev(div2, "class", "bg-orange-500 text-white active:bg-gray-700 \n              font-bold uppercase rounded shadow hover:shadow-lg\n              outline-none focus:outline-none \n              h-12 m-1 px-3 md:px-6 py-1 md:py-2 text-sm md:text-base\n              transition duration-300 ease-in-out \n            hover:text-gray-800 hover:font-semibold transform hover:-translate-y-0 hover:scale-110");
			add_location(div2, file, 75, 12, 2828);
			attr_dev(div3, "class", "flex flex-col ml-2");
			add_location(div3, file, 74, 10, 2783);
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
		source: "(74:8) {#if confirmed === 'FALSE'}",
		ctx
	});

	return block;
}

// (93:6) {#if confirmed === 'FALSE'}
function create_if_block(ctx) {
	let div;
	let t0;
	let t1;
	let t2;

	const block = {
		c: function create() {
			div = element("div");
			t0 = text("Do you know how to contact ");
			t1 = text(/*name*/ ctx[0]);
			t2 = text("? Click on Tiger Hunt!");
			this.h();
		},
		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);
			t0 = claim_text(div_nodes, "Do you know how to contact ");
			t1 = claim_text(div_nodes, /*name*/ ctx[0]);
			t2 = claim_text(div_nodes, "? Click on Tiger Hunt!");
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(div, "class", "text-sm md:text-lg mt-4 ml-3 justify-self-end");
			add_location(div, file, 93, 8, 3621);
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
		source: "(93:6) {#if confirmed === 'FALSE'}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let section;
	let div4;
	let t0;
	let div0;
	let p0;
	let t1;
	let t2;
	let p1;
	let t3;
	let t4;
	let t5;
	let t6;
	let t7;
	let div3;
	let div2;
	let a;
	let div1;
	let t8;
	let t9;
	let t10;
	let current;
	let if_block0 = /*cloudinaryId*/ ctx[1] !== "" && create_if_block_3(ctx);
	let if_block1 = /*deceased*/ ctx[4] === "TRUE" && create_if_block_2(ctx);
	let if_block2 = /*confirmed*/ ctx[5] === "FALSE" && create_if_block_1(ctx);
	let if_block3 = /*confirmed*/ ctx[5] === "FALSE" && create_if_block(ctx);

	const block = {
		c: function create() {
			section = element("section");
			div4 = element("div");
			if (if_block0) if_block0.c();
			t0 = space();
			div0 = element("div");
			p0 = element("p");
			t1 = text(/*name*/ ctx[0]);
			t2 = space();
			p1 = element("p");
			t3 = text(/*department*/ ctx[2]);
			t4 = text(" - ");
			t5 = text(/*position*/ ctx[3]);
			t6 = space();
			if (if_block1) if_block1.c();
			t7 = space();
			div3 = element("div");
			div2 = element("div");
			a = element("a");
			div1 = element("div");
			t8 = text("Back");
			t9 = space();
			if (if_block2) if_block2.c();
			t10 = space();
			if (if_block3) if_block3.c();
			this.h();
		},
		l: function claim(nodes) {
			section = claim_element(nodes, "SECTION", { class: true });
			var section_nodes = children(section);
			div4 = claim_element(section_nodes, "DIV", { class: true });
			var div4_nodes = children(div4);
			if (if_block0) if_block0.l(div4_nodes);
			t0 = claim_space(div4_nodes);
			div0 = claim_element(div4_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			p0 = claim_element(div0_nodes, "P", { class: true });
			var p0_nodes = children(p0);
			t1 = claim_text(p0_nodes, /*name*/ ctx[0]);
			p0_nodes.forEach(detach_dev);
			t2 = claim_space(div0_nodes);
			p1 = claim_element(div0_nodes, "P", { class: true });
			var p1_nodes = children(p1);
			t3 = claim_text(p1_nodes, /*department*/ ctx[2]);
			t4 = claim_text(p1_nodes, " - ");
			t5 = claim_text(p1_nodes, /*position*/ ctx[3]);
			p1_nodes.forEach(detach_dev);
			t6 = claim_space(div0_nodes);
			if (if_block1) if_block1.l(div0_nodes);
			div0_nodes.forEach(detach_dev);
			t7 = claim_space(div4_nodes);
			div3 = claim_element(div4_nodes, "DIV", { class: true });
			var div3_nodes = children(div3);
			div2 = claim_element(div3_nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			a = claim_element(div2_nodes, "A", { href: true, class: true });
			var a_nodes = children(a);
			div1 = claim_element(a_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			t8 = claim_text(div1_nodes, "Back");
			div1_nodes.forEach(detach_dev);
			a_nodes.forEach(detach_dev);
			t9 = claim_space(div2_nodes);
			if (if_block2) if_block2.l(div2_nodes);
			div2_nodes.forEach(detach_dev);
			t10 = claim_space(div3_nodes);
			if (if_block3) if_block3.l(div3_nodes);
			div3_nodes.forEach(detach_dev);
			div4_nodes.forEach(detach_dev);
			section_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(p0, "class", "text-center font-semibold w-full\n        mt-2 text-2xl md:text-4xl");
			add_location(p0, file, 46, 6, 1652);
			attr_dev(p1, "class", "text-center font-semibold w-full\n      mt-2 text-xl md:text-2xl");
			add_location(p1, file, 50, 6, 1765);
			attr_dev(div0, "class", "flex flex-col w-full\n      text-3xl md:text-6xl font-semibold");
			add_location(div0, file, 44, 4, 1570);
			attr_dev(div1, "class", "flex place-self-center");
			add_location(div1, file, 69, 10, 2653);
			attr_dev(a, "href", "/faculty/#" + /*name*/ ctx[0].toLowerCase().replace(/\s+/g, ""));
			attr_dev(a, "class", "flex bg-orange-500 text-white active:bg-gray-700 \n          font-bold uppercase rounded shadow hover:shadow-lg\n          outline-none focus:outline-none\n          h-12 m-1 px-3 md:px-6 py-1 md:py-2 text-sm md:text-base\n          transition duration-300 ease-in-out \n        hover:text-gray-800 hover:font-semibold transform hover:-translate-y-0 hover:scale-110");
			add_location(a, file, 62, 8, 2200);
			attr_dev(div2, "class", "flex place-content-center text-center w-full");
			add_location(div2, file, 61, 6, 2133);
			attr_dev(div3, "class", "flex flex-wrap place-content-center w-full\n      ml-0 md:ml-8 mt-1 md:mt-2");
			add_location(div3, file, 59, 4, 2038);
			attr_dev(div4, "class", "flex flex-wrap place-content-center ml-0 md:ml-8 mt-20");
			add_location(div4, file, 34, 2, 1184);
			attr_dev(section, "class", "flex flex-wrap place-content-center w-full");
			add_location(section, file, 33, 0, 1121);
		},
		m: function mount(target, anchor) {
			insert_dev(target, section, anchor);
			append_dev(section, div4);
			if (if_block0) if_block0.m(div4, null);
			append_dev(div4, t0);
			append_dev(div4, div0);
			append_dev(div0, p0);
			append_dev(p0, t1);
			append_dev(div0, t2);
			append_dev(div0, p1);
			append_dev(p1, t3);
			append_dev(p1, t4);
			append_dev(p1, t5);
			append_dev(div0, t6);
			if (if_block1) if_block1.m(div0, null);
			append_dev(div4, t7);
			append_dev(div4, div3);
			append_dev(div3, div2);
			append_dev(div2, a);
			append_dev(a, div1);
			append_dev(div1, t8);
			append_dev(div2, t9);
			if (if_block2) if_block2.m(div2, null);
			append_dev(div3, t10);
			if (if_block3) if_block3.m(div3, null);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			if (/*cloudinaryId*/ ctx[1] !== "") if_block0.p(ctx, dirty);
			if (/*confirmed*/ ctx[5] === "FALSE") if_block2.p(ctx, dirty);
			if (/*confirmed*/ ctx[5] === "FALSE") if_block3.p(ctx, dirty);
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
			name: page.query.name,
			cloudinaryId: page.query.photoId,
			department: page.query.department,
			position: page.query.position,
			deceased: page.query.deceased,
			confirmed: page.query.confirmed
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Facultymember", slots, []);
	let { params } = $$props;
	let { back, firstName, name, cloudinaryId, department, position, deceased, confirmed } = params;

	// console.log(`faculty - back: ${ back } firstName: ${ firstName } name: ${ name } cloudinaryId: ${ cloudinaryId } deceased: ${ deceased } confirmed: ${ confirmed }`)
	const handleTigerHunt = async () => {
		await goto(`updatecontact?back=facultymember&firstName=${firstName}&name=${name}&photoId=${cloudinaryId}&deceased=${deceased}&confirmed=${confirmed}&type=faculty&department=${department}&position=${position}`);
	};

	const writable_props = ["params"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Facultymember> was created with unknown prop '${key}'`);
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
		name,
		cloudinaryId,
		department,
		position,
		deceased,
		confirmed,
		handleTigerHunt
	});

	$$self.$inject_state = $$props => {
		if ("params" in $$props) $$invalidate(7, params = $$props.params);
		if ("back" in $$props) back = $$props.back;
		if ("firstName" in $$props) firstName = $$props.firstName;
		if ("name" in $$props) $$invalidate(0, name = $$props.name);
		if ("cloudinaryId" in $$props) $$invalidate(1, cloudinaryId = $$props.cloudinaryId);
		if ("department" in $$props) $$invalidate(2, department = $$props.department);
		if ("position" in $$props) $$invalidate(3, position = $$props.position);
		if ("deceased" in $$props) $$invalidate(4, deceased = $$props.deceased);
		if ("confirmed" in $$props) $$invalidate(5, confirmed = $$props.confirmed);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [
		name,
		cloudinaryId,
		department,
		position,
		deceased,
		confirmed,
		handleTigerHunt,
		params
	];
}

class Facultymember extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { params: 7 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Facultymember",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*params*/ ctx[7] === undefined && !("params" in props)) {
			console.warn("<Facultymember> was created without expected prop 'params'");
		}
	}

	get params() {
		throw new Error("<Facultymember>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set params(value) {
		throw new Error("<Facultymember>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export default Facultymember;
export { preload };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjdWx0eW1lbWJlci42ZTQ2MmY3ZC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3JvdXRlcy9mYWN1bHR5bWVtYmVyLnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0IGNvbnRleHQ9XCJtb2R1bGVcIj5cblx0ZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHByZWxvYWQocGFnZSwgc2Vzc2lvbikge1xuXHRcdHJldHVybiB7IFxuICAgICAgcGFyYW1zOiB7XG4gICAgICAgIGJhY2s6IHBhZ2UucXVlcnkuYmFjayxcbiAgICAgICAgZmlyc3ROYW1lOiBwYWdlLnF1ZXJ5LmZpcnN0TmFtZSxcbiAgICAgICAgbmFtZTogcGFnZS5xdWVyeS5uYW1lLFxuICAgICAgICBjbG91ZGluYXJ5SWQ6IHBhZ2UucXVlcnkucGhvdG9JZCxcbiAgICAgICAgZGVwYXJ0bWVudDogcGFnZS5xdWVyeS5kZXBhcnRtZW50LFxuICAgICAgICBwb3NpdGlvbjogcGFnZS5xdWVyeS5wb3NpdGlvbixcbiAgICAgICAgZGVjZWFzZWQ6IHBhZ2UucXVlcnkuZGVjZWFzZWQsXG4gICAgICAgIGNvbmZpcm1lZDogcGFnZS5xdWVyeS5jb25maXJtZWQsXG4gICAgICB9XG4gICAgfVxuICB9XG48L3NjcmlwdD5cblxuPHNjcmlwdD5cbiAgaW1wb3J0IHsgZ290byB9IGZyb20gJ0BzYXBwZXIvYXBwJztcbiAgaW1wb3J0IHsgSW1hZ2UgfSBmcm9tICdAY2xvdWRpbmFyeS9zdmVsdGUnXG5cbiAgZXhwb3J0IGxldCBwYXJhbXNcbiAgbGV0IHsgYmFjaywgZmlyc3ROYW1lLCBuYW1lLCBjbG91ZGluYXJ5SWQsIGRlcGFydG1lbnQsIHBvc2l0aW9uLCBkZWNlYXNlZCwgY29uZmlybWVkIH0gPSBwYXJhbXNcbiAgLy8gY29uc29sZS5sb2coYGZhY3VsdHkgLSBiYWNrOiAkeyBiYWNrIH0gZmlyc3ROYW1lOiAkeyBmaXJzdE5hbWUgfSBuYW1lOiAkeyBuYW1lIH0gY2xvdWRpbmFyeUlkOiAkeyBjbG91ZGluYXJ5SWQgfSBkZWNlYXNlZDogJHsgZGVjZWFzZWQgfSBjb25maXJtZWQ6ICR7IGNvbmZpcm1lZCB9YClcblxuICBjb25zdCBoYW5kbGVUaWdlckh1bnQgPSBhc3luYyAoKSA9PiB7XG4gICAgYXdhaXQgZ290byhgdXBkYXRlY29udGFjdD9iYWNrPWZhY3VsdHltZW1iZXImZmlyc3ROYW1lPSR7IGZpcnN0TmFtZSB9Jm5hbWU9JHsgbmFtZSB9JnBob3RvSWQ9JHsgY2xvdWRpbmFyeUlkIH0mZGVjZWFzZWQ9JHsgZGVjZWFzZWQgfSZjb25maXJtZWQ9JHsgY29uZmlybWVkIH0mdHlwZT1mYWN1bHR5JmRlcGFydG1lbnQ9JHsgZGVwYXJ0bWVudCB9JnBvc2l0aW9uPSR7IHBvc2l0aW9uIH1gKVxuICB9XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuPC9zdHlsZT5cblxuPHNlY3Rpb24gY2xhc3M9XCJmbGV4IGZsZXgtd3JhcCBwbGFjZS1jb250ZW50LWNlbnRlciB3LWZ1bGxcIj5cbiAgPGRpdiBjbGFzcz1cImZsZXggZmxleC13cmFwIHBsYWNlLWNvbnRlbnQtY2VudGVyIG1sLTAgbWQ6bWwtOCBtdC0yMFwiPlxuICAgIHsjaWYgY2xvdWRpbmFyeUlkICE9PSBcIlwifVxuICAgICAgPEltYWdlIGNsYXNzPVwidGV4dC1jZW50ZXJcIlxuICAgICAgICBjbG91ZF9uYW1lPVwieyBwcm9jZXNzLmVudi5DTE9VRElOQVJZX05BTUUgfVwiIFxuICAgICAgICBwdWJsaWNfaWQ9eyBjbG91ZGluYXJ5SWQgfVxuICAgICAgICB0cmFuc2Zvcm1hdGlvbj1cIntbXG4gICAgICAgICAgeyB3aWR0aDogNDAwLCBoZWlnaHQ6IDQwMCwgZ3Jhdml0eTogJ2ZhY2UnLCByYWRpdXM6ICdtYXgnLCBjcm9wOiAnY3JvcCcgfSxcbiAgICAgICAgICB7IHdpZHRoOiAyMDAsIGNyb3A6ICdzY2FsZScgfVxuICAgICAgICBdfVwiIC8+XG4gICAgey9pZn1cbiAgICA8ZGl2IGNsYXNzPVwiZmxleCBmbGV4LWNvbCB3LWZ1bGxcbiAgICAgIHRleHQtM3hsIG1kOnRleHQtNnhsIGZvbnQtc2VtaWJvbGRcIj5cbiAgICAgIDxwIGNsYXNzPVwidGV4dC1jZW50ZXIgZm9udC1zZW1pYm9sZCB3LWZ1bGxcbiAgICAgICAgbXQtMiB0ZXh0LTJ4bCBtZDp0ZXh0LTR4bFwiPlxuICAgICAgICB7IG5hbWUgfVxuICAgICAgPC9wPlxuICAgICAgPHAgY2xhc3M9XCJ0ZXh0LWNlbnRlciBmb250LXNlbWlib2xkIHctZnVsbFxuICAgICAgbXQtMiB0ZXh0LXhsIG1kOnRleHQtMnhsXCI+XG4gICAgICB7IGRlcGFydG1lbnQgfSAtIHsgcG9zaXRpb24gfVxuICAgICAgPC9wPlxuICAgICAgeyNpZiBkZWNlYXNlZCA9PT0gJ1RSVUUnfVxuICAgICAgICA8cCBjbGFzcz1cInRleHQtY2VudGVyIHctZnVsbCB0ZXh0LXhsIG10LTQgbWQ6dGV4dC0zeGwgZm9udC1ub3JtYWxcIj4oRGVjZWFzZWQpPC9wPlxuICAgICAgey9pZn1cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJmbGV4IGZsZXgtd3JhcCBwbGFjZS1jb250ZW50LWNlbnRlciB3LWZ1bGxcbiAgICAgIG1sLTAgbWQ6bWwtOCBtdC0xIG1kOm10LTJcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IHBsYWNlLWNvbnRlbnQtY2VudGVyIHRleHQtY2VudGVyIHctZnVsbFwiPlxuICAgICAgICA8YSBocmVmPVwiL2ZhY3VsdHkvI3sgbmFtZS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL1xccysvZywgJycpIH1cIlxuICAgICAgICAgIGNsYXNzPVwiZmxleCBiZy1vcmFuZ2UtNTAwIHRleHQtd2hpdGUgYWN0aXZlOmJnLWdyYXktNzAwIFxuICAgICAgICAgIGZvbnQtYm9sZCB1cHBlcmNhc2Ugcm91bmRlZCBzaGFkb3cgaG92ZXI6c2hhZG93LWxnXG4gICAgICAgICAgb3V0bGluZS1ub25lIGZvY3VzOm91dGxpbmUtbm9uZVxuICAgICAgICAgIGgtMTIgbS0xIHB4LTMgbWQ6cHgtNiBweS0xIG1kOnB5LTIgdGV4dC1zbSBtZDp0ZXh0LWJhc2VcbiAgICAgICAgICB0cmFuc2l0aW9uIGR1cmF0aW9uLTMwMCBlYXNlLWluLW91dCBcbiAgICAgICAgaG92ZXI6dGV4dC1ncmF5LTgwMCBob3Zlcjpmb250LXNlbWlib2xkIHRyYW5zZm9ybSBob3ZlcjotdHJhbnNsYXRlLXktMCBob3ZlcjpzY2FsZS0xMTBcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBwbGFjZS1zZWxmLWNlbnRlclwiPlxuICAgICAgICAgICAgQmFja1xuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2E+XG4gICAgICAgIHsjaWYgY29uZmlybWVkID09PSAnRkFMU0UnfVxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGZsZXgtY29sIG1sLTJcIj5cbiAgICAgICAgICAgIDxkaXYgb246Y2xpY2s9eyBoYW5kbGVUaWdlckh1bnQgfVxuICAgICAgICAgICAgICBjbGFzcz1cImJnLW9yYW5nZS01MDAgdGV4dC13aGl0ZSBhY3RpdmU6YmctZ3JheS03MDAgXG4gICAgICAgICAgICAgIGZvbnQtYm9sZCB1cHBlcmNhc2Ugcm91bmRlZCBzaGFkb3cgaG92ZXI6c2hhZG93LWxnXG4gICAgICAgICAgICAgIG91dGxpbmUtbm9uZSBmb2N1czpvdXRsaW5lLW5vbmUgXG4gICAgICAgICAgICAgIGgtMTIgbS0xIHB4LTMgbWQ6cHgtNiBweS0xIG1kOnB5LTIgdGV4dC1zbSBtZDp0ZXh0LWJhc2VcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbiBkdXJhdGlvbi0zMDAgZWFzZS1pbi1vdXQgXG4gICAgICAgICAgICBob3Zlcjp0ZXh0LWdyYXktODAwIGhvdmVyOmZvbnQtc2VtaWJvbGQgdHJhbnNmb3JtIGhvdmVyOi10cmFuc2xhdGUteS0wIGhvdmVyOnNjYWxlLTExMFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBmbGV4LXdyYXAgcGxhY2Utc2VsZi1jZW50ZXIgdy1mdWxsIG0tMFwiPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiY2hzX3RpZ2VyXzM2LnBuZ1wiIGFsdD1cIkNIUyBUaWdlclwiLz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWwtMiBzZWxmLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgVGlnZXIgSHVudFxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICB7L2lmfVxuICAgICAgPC9kaXY+XG4gICAgICB7I2lmIGNvbmZpcm1lZCA9PT0gJ0ZBTFNFJ31cbiAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtc20gbWQ6dGV4dC1sZyBtdC00IG1sLTMganVzdGlmeS1zZWxmLWVuZFwiPlxuICAgICAgICAgIERvIHlvdSBrbm93IGhvdyB0byBjb250YWN0IHsgbmFtZSB9PyBDbGljayBvbiBUaWdlciBIdW50IVxuICAgICAgICA8L2Rpdj5cbiAgICAgIHsvaWZ9XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC9zZWN0aW9uPlxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O2dCQXFDc0IsV0FBMkI7Z0NBQzdCLEdBQVk7OztNQUVwQixLQUFLLEVBQUUsR0FBRztNQUFFLE1BQU0sRUFBRSxHQUFHO01BQUUsT0FBTyxFQUFFLE1BQU07TUFBRSxNQUFNLEVBQUUsS0FBSztNQUFFLElBQUksRUFBRSxNQUFNOztPQUNyRSxLQUFLLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxPQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NERBa0NULEdBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7c0JBbUJKLEdBQUk7Ozs7Ozs7O3VDQUFKLEdBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0EzRGxDLEdBQVksUUFBSyxFQUFFOzhCQW1CakIsR0FBUSxRQUFLLE1BQU07K0JBbUJqQixHQUFTLFFBQUssT0FBTzsrQkFtQnZCLEdBQVMsUUFBSyxPQUFPOzs7Ozs7Ozs7O3NCQTVDdEIsR0FBSTs7OzRCQUlOLEdBQVU7OzBCQUFPLEdBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3NDQUp2QixHQUFJOzs7Ozs0Q0FJTixHQUFVOzswQ0FBTyxHQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7K0NBVUosR0FBSSxJQUFDLFdBQVcsR0FBRyxPQUFPLENBQUMsTUFBTSxFQUFFLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7d0JBM0J6RCxHQUFZLFFBQUssRUFBRTtxQkFzQ2YsR0FBUyxRQUFLLE9BQU87cUJBbUJ2QixHQUFTLFFBQUssT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztlQTNGVCxPQUFPLENBQUMsSUFBSSxFQUFFLE9BQU87O0VBRXRDLE1BQU07R0FDSixJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJO0dBQ3JCLFNBQVMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVM7R0FDL0IsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSTtHQUNyQixZQUFZLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPO0dBQ2hDLFVBQVUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVU7R0FDakMsUUFBUSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUTtHQUM3QixRQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRO0dBQzdCLFNBQVMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVM7Ozs7Ozs7O09BVTFCLE1BQUE7T0FDTCxJQUFJLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsU0FBUyxLQUFLLE1BQUE7OztPQUduRixlQUFlO1FBQ2IsSUFBSSwrQ0FBZ0QsU0FBUyxTQUFXLElBQUksWUFBYyxZQUFZLGFBQWUsUUFBUSxjQUFnQixTQUFTLDRCQUE4QixVQUFVLGFBQWUsUUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
